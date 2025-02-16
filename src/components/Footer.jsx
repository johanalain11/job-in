import React from 'react'
import Logo from '../assets/logo1.png'
import Logo2 from '../assets/logo2.png'
import { FiPhone } from "react-icons/fi"
import { TfiEmail } from "react-icons/tfi"
import { GrLocation } from "react-icons/gr"
import {motion} from "framer-motion"
import { fadeIn } from '../variants';

const Footer = () => {
  return (
    <div className='bg-black min-h-[370px] h-fit md:h-48'>
        <div className=' grid grid-cols-1 md:grid-cols-2 space-x-10 space-y-6 max-w-[1240px] text-white items-center py-10 md:mt-0 justify-center mx-auto'>
            <div className='flex flex-col md:flex-row justify-center items-center mx-auto space-y-6'>
                <motion.div 
                variants={fadeIn("up", 0.1)}
                initial="hidden"
                whileInView={"show"}
                viewport={{once:true, amount: 0.7}}
                className='md:min-w-60 w-full md:w-fit md:ml-8 flex flex-col justify-center items-center mx-auto ml-3'>
                    <img src={Logo} alt='/' className='justify-self-center md:justify-start w-40'/>
                    <div className='flex flex-col justify-center mx-auto mt-3 md:mt-8 gap-y-3'>
                        <div className='flex flex-row items-center'><FiPhone style={{color:'white'}}/><p className='px-2'> + 237 650 37 47 54 </p> </div>
                        <div className='flex flex-row items-center'><TfiEmail style={{color:'white'}}/><p className='px-2'> job-in @gmail.com </p> </div>
                        <div className='flex flex-row items-center'><GrLocation style={{color:'white'}}/><p className='px-2'> Yaoundé, Cameroun </p> </div>
                    </div>
                </motion.div>
                <motion.div 
                variants={fadeIn("down", 0.1)}
                initial="hidden"
                whileInView={"show"}
                viewport={{once:true, amount: 0.7}}
                className='md:ml-20 my-auto flex flex-row md:flex-col space-x-2 md:space-y-2 mx-3 md:mx-auto items-center justify-center'>
                    <p>Accueil</p>
                    <p>Inscription</p>
                    <p>Publicités</p>
                    <p>Jobs</p>
                    <p className='text-center'>Services populaires</p>
                    <p>Job-bers</p>
                </motion.div>
            </div>
            <motion.div 
            variants={fadeIn("up", 0.1)}
            initial="hidden"
            whileInView={"show"}
            viewport={{once:true, amount: 0.7}}
            className='space-y-3 flex flex-col md:px-5 md:pl-20 justify-center md:items-start items-center'>
                <p>Laissez nous un commentaire</p>
                <form className='flex flex-col justify-center min-w-64 xl:w-80 text-white'>
                    <input type="email" name="email" placeholder='E-mail' className='bg-black border p-1 border-white rounded-xl focus:bg-gray1 focus:text-white focus:outline-none'/>
                    <textarea rows={3} name="message" placeholder='Message' className='bg-black border p-1 border-white rounded-xl mt-3'></textarea>
                    <input type="submit" value="Envoyer" className='bg-white w-fit p-1 text-black font-extrabold rounded-lg mx-auto md:mx-0 lg:mt-2 mt-2 button '/>
                </form>
            </motion.div>
        </div>
        <div className='flex w-full justify-center absolute mx-auto items-center self-center md:-my-64 -my-80'>
            <img src={Logo2} alt='/'/>
        </div>
        <div className='justify-center flex h-fit text-gray1 p-3 xl:px-10 border-t-2 mx-auto'>
            <motion.div
            variants={fadeIn("up", 0.1)}
            initial="hidden"
            whileInView={"show"}
            viewport={{once:true, amount: 0.7}}>
                <p className=' max-w-6xl'>@ 2023 Job-in - All rights reserved </p>
            </motion.div>
        </div>
    </div>
  )
}

export default Footer