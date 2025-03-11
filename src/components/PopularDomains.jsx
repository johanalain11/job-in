import React from 'react'
import right from '../assets/right.svg'
import design from '../assets/design.svg'
import reseau from '../assets/reseau.svg'
import bd from '../assets/bd*.svg'
import cloud from '../assets/cloud.svg'
import dev from '../assets/dev.svg'
import Maint from '../assets/Maintenance.svg'
import graph from '../assets/graph.svg'
import syst from '../assets/SI.svg'
import {motion} from "framer-motion"
import { fadeIn } from '../variants';

const PopularDomains = () => {

    const popular_domains =[
        {icon:design, title:"Design", nbJobs:"54"},
        {icon:reseau, title:"Réseaux", nbJobs:"55"},
        {icon:syst, title:"Systèmes d'informations", nbJobs:"55"},
        {icon:graph, title:"Graphisme", nbJobs:"55"},
        {icon:Maint, title:"Maintenance", nbJobs:"55"},
        {icon:dev, title:"Développement Web", nbJobs:"55"},
        {icon:cloud, title:"Cloud", nbJobs:"55"},
        {icon:bd, title:"Base de données", nbJobs:"55"}
    ]

  return (
    <div id='domains' className='max-w-[1240px] px-6 mt-12 xl:mt-20 md:mt-0 min-h-[650px] mx-8 justify-center md:items-start md:ms-4 xl:ms-36 rounded-b-[50px]'>
        <motion.div 
        variants={fadeIn("right", 0.1)}
        initial="hidden"
        whileInView={"show"}
        viewport={{once:true, amount: 0.7}}
        className='mb-12'>
            <div className='font-bold text-4xl col-span-5 text-white'>Domaines <span className='text-yellow'>populaires</span></div>
            <div className='float-right right-0 md:-mt-6 md:mr-20 mr-6 text-yellow hover:bg-yellow2 transition ease-out duration-500 rounded-full p-2 hover:-translate-y-1'>Tous <img src={right} className='float-right mt-1 mx-2' alt='/'/> </div>
        </motion.div>
        <motion.div
        variants={fadeIn("left", 0.1)}
        initial="hidden"
        whileInView={"show"}
        viewport={{once:true, amount: 0.7}} 
        className='my-8 grid grid-cols-2 gap-x-4 lg:grid-cols-3 xl:grid-cols-4 sm:flex-wrap justify-evenly md:justify-between md:mr-6'>
            {
                popular_domains.map((item, index) =><div className='domainPopulaire group gap-x-4 md:mx-3'>
                <img src={item.icon} alt='/' className='hidden sm:inline bg-green1 rounded-lg w-16 h-16 mt-4 md:mt-0 py-2'/>
                <div>
                    <p className='text-2xl md:text-3xl mt-4 mb-2 whitespace-nowrap md:whitespace-normal truncate w-28 md:w-full'>{item.title}  </p>
                    <p>{item.nbJobs} jobs <span className='hidden sm:inline'>disponibles</span> <img src={right} className='float-right mb-2 md:mb-6 group-hover:animate-bounce' alt='/'/></p>
                </div>
            </div>
                )
            }
    
            <div className='hidden md:inline-block w-64 xl:hidden'></div>
        </motion.div>
    </div>
  )
}

export default PopularDomains