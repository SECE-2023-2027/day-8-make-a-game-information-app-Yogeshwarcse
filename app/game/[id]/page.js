import GameDetailCard from '@/app/components/GameDetailCard'
import React from 'react'


const GameRoute = async({params}) => {
  return (
    <div>
        <GameDetailCard id={params.id}/>
    </div>
  )
}

export default GameRoute