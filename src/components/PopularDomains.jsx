import React from 'react'
import right from '../assets/right.svg'
import design from '../assets/design.svg'
import reseau from '../assets/reseau.svg'
import bd from '../assets/bd*.svg'
import cloud from '../assets/cloud.svg'
import dev from '../assets/dev.svg'
import Maint from '../assets/Maintenance.svg'
import graph from '../assets/graph.svg'
import si from '../assets/SI.svg'

const PopularDomains = () => {
  return (
    <div className='max-w-[1240px] mt-40 md:mt-0 min-h-[650px] ml-8 justify-center md:items-start md:ms-4 lg:ms-36 '>
        <div className='mb-7'>
            <div className='font-bold text-4xl col-span-5 text-white'>Domaines <span className='text-yellow'>populaires</span></div>
            <div className='float-right right-0 md:-mt-6 md:mr-20 mr-6 text-yellow hover:bg-yellow2 transition ease-out duration-500 rounded-full p-2 hover:-translate-y-1'>Tous <img src={right} className='float-right mt-1 mx-2' alt='/'/> </div>
        </div>
        <div className='my-8 flex flex-wrap justify-evenly md:justify-between md:mr-6'>
            <div className='domainPopulaire'>
                <img src={design} alt='/' className='bg-white rounded-lg'/>
                <p className='text-3xl my-10 mb-2'>Design <img src={right} className='float-right mt-6' alt='/'/> </p>
                <p>54 jobs disponibles</p>
            </div>
            <div className='domainPopulaire'>
                <img src={reseau} alt='/' className='bg-white rounded-lg' />
                <p className='text-3xl my-10 mb-2'>Réseaux <img src={right} className='float-right mt-6' alt='/'/> </p>
                <p>55 jobs disponibles</p>
            </div>
            <div className='domainPopulaire'>
                <img src={si} alt='/' className='bg-green3 rounded-lg' />
                <p className='text-3xl stroke-green1 my-4 mb-2'>Systèmes d'information <img src={right} className='float-right mt-6' alt='/'/> </p>
                <p>55 jobs disponibles</p>
            </div>
            <div className='domainPopulaire'>
                <img src={graph} alt='/' className='bg-white rounded-lg' />
                <p className='text-3xl my-10 mb-2'>Graphisme <img src={right} className='float-right mt-6' alt='/'/> </p>
                <p>55 jobs disponibles</p>
            </div>
            <div className='domainPopulaire'>
                <img src={Maint} alt='/' className='bg-white rounded-lg' />
                <p className='text-3xl my-10 mb-2'>Maintenance <img src={right} className='float-right mt-6' alt='/'/> </p>
                <p>55 jobs disponibles</p>
            </div>
            <div className='domainPopulaire'>
                <img src={dev} alt='/' className='bg-white rounded-lg' />
                <p className='text-3xl my-4 mb-2'>Développement Web <img src={right} className='float-right mt-6' alt='/'/> </p>
                <p>55 jobs disponibles</p>
            </div>
            <div className='domainPopulaire'>
                <img src={cloud} alt='/' className='bg-white rounded-lg' />
                <p className='text-3xl my-8 mb-2'>Cloud <img src={right} className='float-right mt-6' alt='/'/> </p>
                <p>55 jobs disponibles</p>
            </div>
            <div className='domainPopulaire'>
                <img src={bd} alt='/' className='bg-white rounded-lg' />
                <p className='text-3xl my-4 mb-2'>Base de données <img src={right} className='float-right mt-6' alt='/'/> </p>
                <p>55 jobs disponibles</p>
            </div>
            <div className='hidden md:inline-block w-64 xl:hidden'></div>
        </div>
    </div>
  )
}

export default PopularDomains