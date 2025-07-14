'use client'
import React from 'react'

function Card({ id, img, name, type, rat }) {
    return (
        <div className='flex-shrink-0 h-90 bg-white w-55 rounded-xl shadow-gray-300 outline-1 outline-gray-600'>
            <img src={img} className='h-70 w-full object-cover bg-amber-600 rounded-t-xl' />
            <div className=' flex flex-col gap-5 text-center'>
                <p className='font-semibold text-xl'>{name}</p>
                <div className='flex justify-between px-2'>
                    <div className='capitalize'>
                        {type}
                    </div>
                    <div>
                        {rat}/10
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Card