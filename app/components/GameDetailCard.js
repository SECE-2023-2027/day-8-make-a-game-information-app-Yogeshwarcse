// app/expedition33/page.jsx
'use client'
import Image from 'next/image'
import Link from 'next/link'

function GameDetailCard({ id }) {

    const games = [
        {
            id: 1,
            img: '/nfs.png',
            name: 'Need For Speed',
            type: 'racing',
            rating: 9,
            url: 'https://www.youtube.com/embed/K-5EdHZ0hBs?si=e0fGW5536DKjY-CB'
        },
        {
            id: 2,
            img: '/forza.png',
            name: 'Forza Horizon',
            type: 'racing',
            rating: 8,
            url: 'https://www.youtube.com/embed/FYH9n37B7Yw?si=AZZFZIKoy9QlYXZn'
        },
        {
            id: 3,
            img: '/gta.png',
            name: 'Grand Theft Auto V',
            type: 'open‑world',
            rating: 10,
            url: 'https://www.youtube.com/embed/hvoD7ehZPcM?si=aDxYGm1w3hKTKypE'
        },
        {
            id: 4,
            img: '/pubg.png',
            name: 'PUBG Mobile',
            type: 'battle royale',
            rating: 8,
            url: 'https://www.youtube.com/embed/uCd6tbUAy6o?si=5Ef-D8ijeSpHBVNS'
        },
        {
            id: 5,
            img: '/cod.png',
            name: 'Call of Duty',
            type: 'shooter',
            rating: 9,
            url: 'https://www.youtube.com/embed/0E44DClsX5Q?si=5VlIGIe30QRp-UY5'
        },
        {
            id: 6,
            img: '/ss.png',
            name: 'Subway Surfers',
            type: 'endless runner',
            rating: 7,
            url: 'https://www.youtube.com/embed/vASVw5OiK7o?si=lkg-XGOFxC7wpIQD'
        },
        {
            id: 7,
            img: '/ff.png',
            name: 'Free Fire',
            type: 'battle royale',
            rating: 8,
            url: 'https://www.youtube.com/embed/oq2Rz2I11l0?si=-OmvLGLYekcUePnG'
        },
        {
            id: 8,
            img: '/tr.png',
            name: 'Traffic Rider',
            type: 'racing',
            rating: 7,
            url: 'https://www.youtube.com/embed/B5FbWxzcDGo?si=3As2ZmDacB6jD2Cs'
        }
    ];

    const game = games.find(game => game.id === parseInt(id));

    return (
        <div className="min-h-screen bg-cover bg-center">
            <div className="backdrop-blur-md bg-black/70 w-full">
                <div className="max-w-7xl mx-auto px-4 py-8 space-y-8">
                    <div className="bg-purple-600 text-white text-center text-sm py-3 rounded-md">
                        Data validation on this page is currently pending.
                    </div>
                    <h1 className="text-5xl md:text-6xl font-bold text-white">{game.name}</h1>
                    <div className="flex flex-col md:flex-row md:items-center gap-4 text-gray-300">
                        <span>4/24/2025 (2 months ago)</span>
                        <span className="hidden md:inline">•</span>
                        <span className="text-indigo-300 font-semibold">Full Release</span>
                    </div>
                    <Link href="#" className="text-indigo-200 hover:underline">Sandfall Interactive</Link>

                    <div className="flex flex-col md:flex-row gap-8 w-full h-120">
                        <Image src={game.img} width={400} height={600} alt="Expedition 33 cover" className="rounded-lg object-cover" />
                        <div className="flex-1 flex flex-col gap-8">
                            <div className="flex-1 flex items-center justify-center">
                                <iframe src={game.url} title={game.name} width="100%" height="340" allowFullScreen className="rounded-lg shadow-lg border-4 border-purple-600"></iframe>
                            </div>
                        </div>
                        <div className="flex flex-col gap-6 bg-black/80 p-6 rounded-lg h-80 min-w-[220px]">
                            <div className="flex items-center gap-2">
                                <span className="text-white text-3xl font-semibold">{game.rating}.0</span>
                            </div>
                            <span className="text-sm text-gray-400">Genre: {game.type}</span>
                            <div className="flex items-center gap-6">
                                <div className="flex flex-col items-center">
                                    <span className="text-sm mt-1 text-gray-300">WANT</span>
                                    <span className="text-lg font-semibold text-white">313</span>
                                </div>
                                <div className="flex flex-col items-center">
                                    <span className="text-sm mt-1 text-gray-300">PLAYING</span>
                                    <span className="text-lg font-semibold text-white">138</span>
                                </div>
                                <div className="flex flex-col items-center">
                                    <span className="text-sm mt-1 text-gray-300">PLAYED</span>
                                    <span className="text-lg font-semibold text-white">331</span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default GameDetailCard