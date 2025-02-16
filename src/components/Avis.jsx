import React from 'react'
import Account from '../assets/account.png'
import {motion} from "framer-motion"
import { fadeIn } from '../variants';

const Avis = () => {
    const avis = [
        {name:"Johan NZALI", periode: "il y a 3 jours", image: "/src/assets/account.png", 
        message:"Cette application est très efficace et m’a permis d’arrondir mes fins du mois."},
        {name:"Johan NZALI", periode: "il y a 3 jours", image: "../assets/account.png", 
        message:"Cette application est très efficace et m’a permis d’arrondir mes fins du mois."},
        {name:"Johan NZALI", periode: "il y a 3 jours", image: "../assets/account.png", 
        message:"Cette application est très efficace et m’a permis d’arrondir mes fins du mois."},
        {name:"Johan NZALI", periode: "il y a 3 jours", image: "../assets/account.png", 
        message:"Cette application est très efficace et m’a permis d’arrondir mes fins du mois."},
    ];

  return (
    <div className='bg-green1' id='avis'>
    <div className='max-w-[1240px] px-6 items-center py-10 md:mt-0 min-h-[500px] m-2 justify-center md:items-start md:ms-4 xl:ms-36 '>
        <motion.div
        variants={fadeIn("down", 0.1)}
        initial="hidden"
        whileInView={"show"}
        viewport={{once:false, amount: 0.7}}>
            <div className='font-bold text-4xl w-full items-center md:justify-start text-white'>Avis de nos <span className='text-yellow'>utilisateurs</span></div>
        </motion.div>
        <motion.div 
        variants={fadeIn("up", 0.1)}
        initial="hidden"
        whileInView={"show"}
        viewport={{once:true, amount: 0.7}}
        className='grid lg:grid-cols-4 sm:grid-cols-2 grid-cols-1 gap-4 md:gap-8 items-center md:justify-evenly py-8 md:py-12'>
            {
                avis.map((avis, index) => <div key={index} className='bg-white hover:-translate-y-2 shadow-lg hover:shadow-green2 transition ease-out duration-500 p-4 md:p-6 xl:p-7 max-w-64 h-fit hover:rounded-lg rounded-md mx-auto'>
                    <div className='flex flex-row'>
                        <img src={Account} alt='/' className='rounded-full shadow-lg shadow-green3 bg-black p-0.5 object-contain size-10 md:size-14 py-auto justify-self-center mr-3' />
                        <div>
                            <h3 className='text-lg md:text-2xl font-bold'>{avis.name}</h3>
                            <p className='text-xs md:text-base text-gray1 pb-2'>{avis.periode}</p>
                        </div>
                    </div>
                    <p className='items-start pt-1 md:pt-3 text-sm md:text-base'>"{avis.message}"</p>
                    </div>)
            }
        </motion.div>
    </div>
        
    </div>
  )
}

export default Avis