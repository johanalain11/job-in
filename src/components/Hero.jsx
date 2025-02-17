import React from 'react'
import { ReactTyped } from 'react-typed';
import Model1 from '../assets/model1.png'
import { ImWhatsapp } from "react-icons/im";
import { AiOutlineLinkedin } from "react-icons/ai";
import jd from '../assets/jank-design.png'
import {motion} from "framer-motion"
import { fadeIn } from '../variants';
import {Link} from 'react-router-dom';
import ShinyText from './ShinyText';

const Hero = () => {
  return (
    <div className='text-white h-screen'>
      <div className='w-full grid md:grid-cols-2'>
        <motion.div 
        variants={fadeIn("right", 0.4)}
        initial="hidden"
        whileInView={"show"}
        viewport={{once:true, amount: 0.7}}
        className='max-w-[1240px] mt-[-96px] h-screen mx-auto flex flex-col justify-center items-center md:items-start md:ms-4 xl:ms-24 2xl:ms-36'>
            <p className='p-2 text-xl xl:text-2xl'>Vous voulez obtenir un job facilement?</p>
            <div className='text-yellow font-bold p-2 text-6xl lg:text-7xl xl:text-8xl text-center md:text-start float-left max-h-32 whitespace-nowrap overflow-visible' >
            <ReactTyped strings={['Postulez à', 'Trouvez', 'Cherchez']} typeSpeed={60} backSpeed={100} loop/></div>
            <h1 className='text-white font-bold px-2 text-5xl lg:text-6xl xl:text-7xl'>un job</h1>
            <p className='p-2 text-xl xl:mt-3 xl:text-2xl'>grâce à votre application  <ShinyText disabled={false} speed={3} className='text-2xl font-black font-["League Spartan"]' text="JOB-in"/></p>
            <Link to="/dashboard"><button className='text-2xl md:text-3xl xl:text-4xl m-2 p-2 md:px-6 w-max px-8 bg-yellow rounded-full font-black text-green1 inline button hover:px-8'>Inscrivez-vous !</button></Link>
            <div className='space-x-5 hidden'>
            <Link to="/dashboard-E"><button className='text-lg md:text-xl xl:text-2xl m-1 h-10 w-max px-3 bg-green3 rounded-full font-black text-green1 inline  hover:px-6 transition ease-out duration-500 hover:scale-105 hover:text-white'>Entreprise</button></Link>
            <Link to="/dashboard">
                <ShinyText text="Inscrivez-vous !" disabled={false} speed={1} className='text-xl md:text-2xl m-1 h-10 w-max px-3 bg-green2 rounded-full  hover:px-6 transition ease-out duration-500 hover:scale-105 hover:text-white' />
            </Link>
            </div>
        </motion.div>
        <motion.div
        variants={fadeIn("left", 0.4)}
        initial="hidden"
        whileInView={"show"}
        viewport={{once:true, amount: 0.7}}
        className='relative align-right invisible md:visible'>
          <div className='flex justify-center bg-green3 absolute h-3/4 max-h-[500px] max-w-[40vh] lg:max-w-[80vh] bottom-0 w-full md:w-[496px] right-0 md:rounded-tl-[94px] '>
            <img src={Model1} alt='/' className=' object-cover h-[80vh] max-h-[700px] left-0 bottom-0 absolute'/>
          </div>
        </motion.div>
      </div>
      <div className='grid w-screen mt-[-96px] static md:grid-cols-2 right-0 bg-green1 md:bg-transparent'>
        <div className='bg-green1 col-end-2 h-20 md:h-24 md:rounded-l-full md:right-0 md:absolute mr-0 px-10 md:px-6 md:mr-[386px] w-full md:w-[457px] py-4 lg:py-6'>
          <p className='text-center text-sm sm:text-base '>Cette application est à but lucratif. Il vous sera donc demandé de souscrire à des offres ultérieurement.</p>
        </div>
        <div className='bg-yellow md:absolute md:h-24 right-0 px-8 md:col-end-2 md:col-span-1 col-span-2 end w-full md:w-[385px] h-auto pt-2 end-0 '>
          <p className='text-center'>Nos partenaires</p>
          <div className='flex justify-evenly px-auto font-white w-full'>
            <ImWhatsapp className='w-12' />
            <AiOutlineLinkedin className='w-12' />
            <img src={jd} alt='jank_design'/>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Hero