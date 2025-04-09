import React from 'react'

const VideoTitle = ({title,overview}) => {
  return (
    <div className='w-screen aspect-video pt-36 px-12 absolute text-white bg-gradient-to-r from-black'>
        <h1 className='text-6xl font-bold'>{title}</h1>
        <p className='py-6 text-lg w-1/2'>{overview}</p>
        <div className=''>
            <button className='bg-white text-black  p-3 px-12 text-xl text-bold rounded-lg hover:opacity-60'>▶️Play</button>
            <button className='bg-gray-500 mx-2 text-xl p-3 px-12 opacity-70 rounded-lg text-white'>More Info</button>
        </div>
    </div>
  )
}

export default VideoTitle