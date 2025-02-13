import React from 'react'
import model3 from '../assets/model3.png'

const content1 = () => {
  return (
    <div className='w-full px-auto text-white bg-green2 min-h-[400px] xl:pt-10 xl:pb-2 flex justify-center'>
      <div className='max-w-[1240px] flex justify-center'>
        <div className='justify-center items-center px-6 py-14 md:my-6'>
          <h1 className='text-3xl md:text-4xl font-extrabold'>Construisez un profil <span className='text-yellow'>attrayant</span> pour les entreprises</h1>
          <p className='text-xl md:mt-3'>Mettez en avant vos compétences et vos performances en gardant votre profil à jour et en postant régulièrement vos réalisations</p>
          <ol className='list-decimal ml-4 md:mt-2'>
            <li>Actualisez régulièrement votre CV</li>
            <li>Faites des publications</li>
          </ol>
          <button className='bg-yellow text-green1 text-2xl md:text-3xl rounded-full p-2 mt-3 md:mt-5 font-extrabold button lg:mt-12'>Commencez maintenant</button>
        </div>
        <div className='hidden object-cover xl:h-[550px] md:inline-block mt-6 p-2 right-0 md:mr-[-7%]'>
          <img src={model3} alt='/' className='boxShadowColor-3xl'/>
        </div>
      </div>
    </div>
  )
}

export default content1