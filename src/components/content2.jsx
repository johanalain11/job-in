import React from 'react'
import model4 from '../assets/model4.png'
import {motion} from "framer-motion"
import { fadeIn } from '../variants';
import {Link } from 'react-router-dom'

const content1 = () => {
  return (
    <div className='px-auto text-white bg-green2 min-h-[400px] xl:pt-10 xl:pb-2 flex justify-center rounded-bl-[50px] rounded-tl-[50px]'>
      <div className='max-w-[1240px] flex justify-center'>
        <motion.div 
        variants={fadeIn("right", 0.1)}
        initial="hidden"
        whileInView={"show"}
        viewport={{once:true, amount: 0.7}}
        className='justify-center items-center px-6 py-14 md:my-6'>
          <h1 className='text-3xl md:text-4xl font-extrabold'>Vous êtes une entreprise en plein essor, augmentez votre clientèle grâce à des<span className='text-yellow'> publicités. </span></h1>
          <p className='text-xl md:mt-3'>Faites la promotion de votre marque, de vos services et des offres de votre entreprise sur 
          <span className='text-2xl font-logo font-black'> JOB-in</span></p>
          <button className='bg-yellow text-green1 text-2xl md:text-3xl rounded-full p-2 mt-3 md:mt-5 font-extrabold button'><Link to='/dashboard-E'>Rejoignez-nous </Link></button>
        </motion.div>
        <motion.div 
        variants={fadeIn("left", 0.1)}
        initial="hidden"
        whileInView={"show"}
        viewport={{once:true, amount: 0.7}}
        className='hidden object-contain xl:h-[500px] md:block p-2 right-0'>
          <img src={model4} alt='/' className='boxShadowColor-3xl'/>
        </motion.div>
      </div>
    </div>
  )
}

export default content1