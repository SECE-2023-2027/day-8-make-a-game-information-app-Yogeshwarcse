import React from 'react'
import Card from './Card'
import Link from 'next/link';

function HomePage() {
    const games = [
        {
            id: 1,
            img: '/nfs.png',
            name: 'Need For Speed',
            type: 'racing',
            rating: 9

        },
        {
            id: 2,
            img: '/forza.png',
            name: 'Forza Horizon',
            type: 'racing',
            rating: 8

        },
        {
            id: 3,
            img: '/gta.png',
            name: 'Grand Theft Auto V',
            type: 'open‑world',
            rating: 10

        },
        {
            id: 4,
            img: '/pubg.png',
            name: 'PUBG Mobile',
            type: 'battle royale',
            rating: 8

        },
        {
            id: 5,
            img: '/cod.png',
            name: 'Call of Duty',
            type: 'shooter',
            rating: 9

        },
        {
            id: 6,
            img: '/ss.png',
            name: 'Subway Surfers',
            type: 'endless runner',
            rating: 7

        },
        {
            id: 7,
            img: '/ff.png',
            name: 'Free Fire',
            type: 'battle royale',
            rating: 8

        },
        {
            id: 8,
            img: '/tr.png',
            name: 'Traffic Rider',
            type: 'racing',
            rating: 7

        }
    ];



    return (
        <div className='flex flex-col gap-5 px-5 py-5'>
            <div className='text-3xl'>
                Welcome to the guiding start your world of game
            </div>
            <h1 className='font-bold underline'>
                Popular Right Now
            </h1>
            <div className='flex flex-nowrap gap-4 overflow-x-auto overflow-y-hidden scroll-smooth px-3 py-3' style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}>
                {games.map((game, idx) => (
                    <Link key={game.id} href={`/game/${game.id}`}>
                        <Card key={idx} id={game.id} img={game.img} name={game.name} type={game.type} rat={game.rating} />
                    </Link>
                ))}
            </div>
        </div>
    )

}

export default HomePage