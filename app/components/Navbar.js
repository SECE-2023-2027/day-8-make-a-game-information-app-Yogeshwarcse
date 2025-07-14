'use client'
import React,{useState} from 'react'
import Link from 'next/link'
import { useRouter } from 'next/navigation';


function Navbar() {
  const [searchTerm, setSearchTerm] = useState('');
  const router = useRouter();

  const handleSearch = (e) => {
    if (e.key === 'Enter' && searchTerm.trim() !== '') {
      router.push(`/${searchTerm}`);
    }
  };

  return (
    <nav className='bg-gray-700'>
        <ul className='flex gap-3 justify-center items-center'>
            <div className='flex gap-5 justify-center items-center'>
            <Link className='hover:bg-gray-800 hover: cursor-pointer font-bold px-5 py-3 text-white' href='/'><li>IGDB</li></Link>
            <input type='text' placeholder='Search' className='rounded-xs bg-white placeholder:px-2 px-2 w-150 h-8' value={searchTerm} onChange={(e) => setSearchTerm(e.target.value)} onKeyDown={handleSearch}/>
            <Link className='hover:bg-violet-700 hover: cursor-pointer font-bold  text-white bg-violet-600 rounded-xs py-2 px-2' href='/Card'><li>LOGIN WITH TWITCH</li></Link>
            </div>
        </ul>
        <div className='h-2 bg-violet-600'></div>
    </nav>
  )
}

export default Navbar