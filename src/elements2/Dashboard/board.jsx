import React from 'react'
import { FaChevronRight } from "react-icons/fa6";
import { BsFileMedical } from "react-icons/bs";
import CountUp from 'react-countup';

function board() {

  const actus = [
    {n:36, text:"Nouvelles candidatures à consulter", color:"bg-green1 h-full", delay:0.25},
    {n:10, text:"Nouvelles candidatures aujourd’hui", color:"bg-yellow1 h-full", delay:0.5},
    {n:5, text:"Nouvelles publications", color:"bg-green1 h-full", delay:0.75},
  ]
  const jobsPubliés = 54;

  return (
    <div className='pb-4 px-4 max-w-screen-lg'>
      {/**CONTENT 1 */}
      <div className='w-full'>
        <div className='gap-x-3 lg:gap-x-7 gap-y-1 grid grid-cols-1 md:grid-cols-3 w-full justify-between'>
          {
            actus.map((actus) => 
            <div className='w-full transition duration-500 ease-in-out transform hover:scale-105 shadow-lg hover:shadow-green2'>
            <div className={actus.color}>
              <div className='flex flex-row gap-x-3 m-1 min-h-14 md:justify-center items-center text-white p-1 md:p-2 xl:py-3'>
                <CountUp delay={actus.delay} separator=' ' duration={2} className='text-5xl font-bold' end={actus.n}/>
                <div className='w-fit'>{actus.text}</div>
                <div className='w-4 text-lg'><FaChevronRight /></div>
              </div>
            </div>
            </div>)
          }
        </div>
      </div>
      {/**CONTENT2 */}
      <div className='mt-7 gap-y-5 flex flex-col'>
        <div className='border border-gray3 py-2 px-5 w-full md:w-64 lg:w-72 transition duration-500 ease-in-out transform hover:scale-105 shadow-lg hover:shadow-green2'>
            <p className='font-semibold text-xl md:text-2xl'>Jobs publiés</p>
            <div className='w-full flex flex-row justify-between space-x-16 items-end'>
                <CountUp delay={1} separator=' ' duration={2} className='text-6xl font-extrabold text-green1 mt-5' end={jobsPubliés}/>
                <BsFileMedical size={80} color='#164A41' />
            </div>
        </div>
      </div>
    </div>
  )
}

export default board