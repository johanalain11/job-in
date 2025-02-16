import React from 'react'
import chars from '../../assets/chars.png'
import { RiCheckboxBlankFill, RiCheckboxBlankLine } from "react-icons/ri";
import { HiArrowLongRight } from "react-icons/hi2";
import CountUp from 'react-countup';

const Content2 = () => {
    const jobsPostulés = 14;
    const jobsPEffectués = 9;

  return (
    <div className='flex flex-col md:flex-row max-w-screen-lg px-4'>
        <div className='py-3 gap-5 flex flex-col min-w-64 w-full md:w-fit'>
            <div className='border border-gray3 py-2 px-5 w-full md:w-64 lg:w-72 transition duration-500 ease-in-out transform hover:scale-105 shadow-lg hover:shadow-green2'>
                <p className='font-semibold text-xl md:text-2xl'>Jobs postulés</p>
                <div className='w-full flex flex-row justify-between items-end'>
                    <CountUp delay={0.5} separator=' ' duration={2} className='text-6xl font-extrabold text-yellow md:mt-5' end={jobsPostulés}/>
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 83 83" fill="none" className='-mb-2 md:h-[83px] h-[70px]'>
                        <path d="M31.1252 44.9584H51.8752M31.1252 58.7917H41.5002M13.8335 13.8334V69.1667C13.8335 71.0011 14.5622 72.7604 15.8593 74.0575C17.1565 75.3546 18.9157 76.0834 20.7502 76.0834H62.2502C64.0846 76.0834 65.8439 75.3546 67.141 74.0575C68.4381 72.7604 69.1668 71.0011 69.1668 69.1667V28.8494C69.1667 27.928 68.9825 27.0159 68.625 26.1666C68.2675 25.3174 67.7439 24.5481 67.0849 23.904L51.7299 8.88794C50.4377 7.62446 48.7024 6.91691 46.8952 6.91669H20.7502C18.9157 6.91669 17.1565 7.6454 15.8593 8.94253C14.5622 10.2397 13.8335 11.9989 13.8335 13.8334Z" stroke="#F1B24A" stroke-width="3" stroke-linecap="round" stroke-linejoin="round"/>
                        <path d="M48.417 6.91669V20.75C48.417 22.5844 49.1457 24.3437 50.4428 25.6408C51.74 26.938 53.4992 27.6667 55.3337 27.6667H69.167" stroke="black" stroke-width="3" stroke-linejoin="round"/>
                    </svg>
                </div>
            </div>
            <div className='border border-gray3 py-2 px-5 w-full md:w-64 lg:w-72 transition duration-500 ease-in-out transform hover:scale-105 shadow-lg hover:shadow-green2'>
                <p className='font-semibold text-xl md:text-2xl'>Jobs effectués</p>
                <div className='w-full flex flex-row justify-between space-x-16 items-end'>
                    <CountUp delay={0.75} separator=' ' duration={2} className='text-6xl font-extrabold text-green1 md:mt-5' end={jobsPEffectués}/>
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 83 83" fill="none" className='-mb-2 md:h-[83px] h-[70px]'>
                        <path d="M50.146 6.91669H20.7502C18.9157 6.91669 17.1565 7.6454 15.8593 8.94253C14.5622 10.2397 13.8335 11.9989 13.8335 13.8334V69.1667C13.8335 71.0011 14.5622 72.7604 15.8593 74.0575C17.1565 75.3546 18.9157 76.0834 20.7502 76.0834H62.2502C64.0846 76.0834 65.8439 75.3546 67.141 74.0575C68.4381 72.7604 69.1668 71.0011 69.1668 69.1667V25.9375L50.146 6.91669Z" stroke="#164A41" stroke-width="3" stroke-linecap="round" stroke-linejoin="round"/>
                        <path d="M48.4167 6.91669V27.6667H69.1667M31.125 51.875L38.0417 58.7917L51.875 44.9584" stroke="#164A41" stroke-width="3" stroke-linecap="round" stroke-linejoin="round"/>
                    </svg>
                </div>
            </div>
        </div>
        <div className='border border-gray3 p-3 md:m-3 w-full md:w-fit min-w-64 md:px-6 justify-between transition duration-500 ease-in-out transform hover:scale-105 shadow-lg hover:shadow-green2'>
            <p className='font-semibold text-xl md:text-2xl'>Statistiques générales</p>
            <div className='flex flex-row w-full justify-between'>
                <img src={chars} alt='/' />
                <div className='py-10 justify-between flex flex-col'>
                    <RiCheckboxBlankLine color='#9DC88D' />
                    <p>Jobs</p>
                    <RiCheckboxBlankFill color='#9DC88D' />
                    <p>Jobs appréciés</p>
                </div>
            </div>
        <p className='text-xl text-green1 flex justify-center items-center'><span>Voir toutes les notes </span><HiArrowLongRight className='text-2xl mx-3'/> </p>
        </div>
    </div>
  )
}

export default Content2