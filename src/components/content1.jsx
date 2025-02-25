import React from 'react'
import model3 from '../assets/model3.png'
import {motion} from "framer-motion"
import { fadeIn } from '../variants';
import { Link } from 'react-router-dom';

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
          <h1 className='text-3xl md:text-4xl font-extrabold'>Construisez un profil <span className='text-yellow'>attrayant</span> pour les entreprises</h1>
          <p className='text-xl md:mt-3'>Mettez en avant vos compétences et vos performances en gardant votre profil à jour et en postant régulièrement vos réalisations.</p>
          <ol className='list-decimal ml-4 md:mt-2'>
            <li>Concevez des CVs personnalisés</li>
            <li>Faites des publications pour mettre en valeur votre travail</li>
          </ol>
          <div className='bg-yellow text-green1 text-2xl md:text-3xl rounded-full p-2 mt-3 md:mt-5 font-extrabold button lg:mt-12 w-fit'>
          <Link to='/dashboard'>Commencez maintenant</Link>
          </div>
        </motion.div>
        <motion.div 
        variants={fadeIn("left", 0.1)}
        initial="hidden"
        whileInView={"show"}
        viewport={{once:true, amount: 0.7}} 
        className='hidden object-cover xl:h-[550px] md:block mt-6 p-2 right-0 '>
          <img src={model3} alt='/' className='boxShadowColor-3xl'/>
        </motion.div>
      </div>
    </div>
  )
}

export default content1