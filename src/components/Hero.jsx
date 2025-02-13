import React from 'react';
import Typed from 'react-typed';
import Model1 from '../assets/model1.png'
import whatsapp from '../assets/Whatsapp.svg'
import linkedIn from '../assets/linkedIn.svg'
import jd from '../assets/jank-design.png'

const Hero = () => {
  return (
    <div className='text-white h-screen'>
      <div className='w-full grid md:grid-cols-2'>
        <div className='max-w-[1240px] mt-[-96px] h-screen mx-auto flex flex-col justify-center items-center md:items-start md:ms-4 lg:ms-36'>
            <p className='p-2 text-xl'>Vous voulez obtenir un job facilement?</p>
            <div className='text-yellow font-bold p-2 text-7xl xl:text-8xl text-center md:text-start float-left' >
            <Typed strings={['Postulez à', 'Trouvez', 'Cherchez']} typeSpeed={60} backSpeed={100} loop /></div>
            <h1 className='text-white font-bold px-2 text-7xl xl:text-8xl'>un job</h1>
            <p className='p-2 text-xl'>grâce à votre application <span className='text-2xl font-bold font-["League Spartan"]'>JOB-in</span></p>
            <button className='text-3xl md:text-4xl m-2 h-16 w-max px-8 bg-yellow rounded-full font-black text-green1 inline button hover:px-9'>Inscrivez-vous !</button>
        </div>
        <div className='flex relative align-center invisible md:visible'>
          <div className='bg-green3 absolute h-[467px] mt-32 w-full md:mt-36 md:w-[496px] right-0 md:rounded-tl-[94px] '>
            <img src={Model1} alt='/' className='w-min float-right md:-mt-20 justify-end'/>
          </div>
        </div>
      </div>
      <div className='grid w-screen md:mt-[-96px] md:h-24 static md:grid-cols-2 right-0 bg-green1 md:bg-transparent'>
        <div className='bg-green1 col-end-2 h-24 md:rounded-tl-full md:right-0 md:absolute mr-0 px-10 md:mr-[386px] w-full md:w-[457px] pt-6'>
          <p className='text-center'>Cette application est à but lucratif. Il vous sera donc demandé de souscrire à des offres ultérieurement.</p>
        </div>
        <div className='bg-yellow md:absolute md:h-24 right-0 px-8 md:col-end-2 md:col-span-1 col-span-2 end w-full md:w-[385px] h-auto pt-2 end-0 '>
          <p className='text-center'>Nos partenaires</p>
          <div className='flex justify-evenly px-10'>
            <img className='px-4' src={whatsapp} alt='/' />
            <img className='px-4' src={linkedIn} alt='/' />
            <img className='px-4' src={jd} alt='/'/>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Hero