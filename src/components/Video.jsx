import React from 'react'
import model2 from '../assets/model2.png'
import play from '../assets/play.svg'

const Video = () => {
  return (
    <div className='w-full bg-green1 h-4/6 px-4 py-14 flex justify-center'>
        <div className='p-3 md:p-4 flex items-center justify-center m-auto bg-green3 h-2/5 justify-self-center hover:scale-110 hover:drop-shadow-xl hover:shadow-green2 shadow-lg transition ease-out duration-500'>
            <img src={model2} alt='/' />
            <img src={play} className='absolute m-auto flex justify-center py-auto w-1/5 max-w-24 opacity-70 hover:opacity-100 hover:scale-110 transition ease-out duration-500' alt='/' />
        </div>
    </div>
  )
}

export default Video