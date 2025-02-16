import React from 'react'
import model2 from '../assets/model2.png'
import play from '../assets/play.svg'
import {motion} from "framer-motion"
import ReactPlayer from 'react-player'
import { fadeIn } from '../variants';

const Video = () => {
  return (
    <div
    className='w-full bg-green1 h-3/4 px-6 py-14 flex justify-center'>
        <motion.div 
        variants={fadeIn("up", 0.1)}
        initial="hidden"
        whileInView={"show"}
        viewport={{once:true, amount: 0.7}}>
          <div
          className='p-3 md:p-4 flex items-center justify-center m-auto bg-green3 justify-self-center hover:scale-105 hover:drop-shadow-xl hover:shadow-green2 shadow-lg transition ease-out duration-500'>
            <ReactPlayer url='https://youtu.be/cFfgcvpKpCw' controls={true}/>
          </div>
        </motion.div>
    </div>
  )
}

export default Video