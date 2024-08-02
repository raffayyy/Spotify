import React from 'react'
import Sidebar from '../components/Sidebar'
import Player from '../components/Player'

function HomeLoayout() {
  return (
    <div className='h-screen overflow-hidden'>
      <Sidebar />
      <Player/>
    </div>
  )
}

export default HomeLoayout