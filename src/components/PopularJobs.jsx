import React from 'react'
import right from '../assets/right.svg'
import company from '../assets/CompanyLogo.png'
import {motion} from "framer-motion"
import { fadeIn } from '../variants';

const PopularJobs = () => {
    const popular_jobs = [
        {icon:company, title:"Developpement Web", company:"Revolut", location:"Yaounde", 
            description:"Revolut est à la recherche d'un Email Marketing pour aider...", type:"Temps plein", category:"Développement Web" },
        {icon:company, title:"Design", company:"Revolut", location:"Yaounde", 
            description:"Revolut est à la recherche d'un Email Marketing pour aider...", type:"Temps plein", category:"Design graphique" },
        {icon:company, title:"Cybersécurité et systèmes d'information", company:"Revolut", location:"Yaounde", 
            description:"Revolut est à la recherche d'un Email Marketing pour aider...", type:"Temps plein", category:"Analyste cybersécurité" },
        {icon:company, title:"Data Science", company:"Revolut", location:"Yaounde", 
            description:"Revolut est à la recherche d'un Email Marketing pour aider...", type:"Temps plein", category:"Développement Web" },
        {icon:company, title:"Infogaphie", company:"Revolut", location:"Yaounde", 
            description:"Revolut est à la recherche d'un Email Marketing pour aider...", type:"Temps plein", category:"Développement Web" },
        {icon:company, title:"Management", company:"Revolut", location:"Yaounde", 
            description:"Revolut est à la recherche d'un Email Marketing pour aider...", type:"Temps plein", category:"Développement Web" },
        {icon:company, title:"Marketing digital", company:"Revolut", location:"Yaounde", 
            description:"Revolut est à la recherche d'un Email Marketing pour aider...", type:"Temps plein", category:"Développement Web" },
        {icon:company, title:"E-commerce", company:"Revolut", location:"Yaounde", 
            description:"Revolut est à la recherche d'un Email Marketing pour aider...", type:"Temps plein", category:"Développement Web" }
    ]
  return (
    <div className='bg-green1 rounded-br-[50px] rounded-tr-[50px]' id='jobs'>
    <div className='max-w-[1240px] px-6 items-center py-10 md:mt-0 min-h-[650px] ml-8 justify-center md:items-start md:ms-4 xl:ms-36 '>
        <motion.div
        variants={fadeIn("right", 0.1)}
        initial="hidden"
        whileInView={"show"}
        viewport={{once:true, amount: 0.7}}>
            <div className='font-bold text-4xl col-span-5 w-full items-center md:justify-start text-white'>Jobs <span className='text-yellow'>populaires</span></div>
            <div className='float-right right-0 md:-mt-6 md:mr-20 mr-6 text-yellow hover:bg-yellow2 transition ease-out duration-500 rounded-full md:p-2 hover:-translate-y-1'>Tous <img src={right} className='float-right mt-1 mx-2' alt='/'/> </div>
        </motion.div>
        <motion.div 
        variants={fadeIn("left", 0.1)}
        initial="hidden"
        whileInView={"show"}
        viewport={{once:true, amount: 0.7}}
        className='my-8 flex flex-wrap justify-evenly md:justify-between md:mr-6'>
            {
                popular_jobs.map((item, index) =><div className='jobPopulaire'>
                <div className='flex justify-between px-2'>
                    <img src={item.icon} alt='/' className='border-2 rounded-full border-yellow size-10 md:size-14' />
                    <div className='durée'>{item.type}</div>
                </div>
                <div>
                    <p className='font-bold md:mt-4 mb-1 truncate whitespace-normal max-h-[3rem]'>{item.title}</p>
                    <div className='flex justify-start text-gray1 text-sm'>
                        <p>{item.company}</p>
                        <p className='text-3xl -mt-4 m-1 text-gray2 text-opacity-35'>.</p>
                        <p>{item.location}</p>
                    </div>
                    <p className='text-xs text-gray2 my-3 hidden md:block'>{item.description}</p>
                    <div className='domaine'>{item.category}</div>
                </div>
            </div>
            )}
            <div className='hidden md:inline-block w-64 xl:hidden'></div>
        </motion.div>
    </div>
        
    </div>
  )
}

export default PopularJobs