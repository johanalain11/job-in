import React from 'react'
import {Link} from 'react-router-dom'
import Logo from '../assets/logo1.png'

function NoPage() {
  return (
    <div class="h-screen w-screen bg-green3 flex items-center">
    <div class="container flex flex-col md:flex-row items-center justify-between px-5 text-white">
            <div class="w-full lg:w-1/2 mx-8">
                <div class="text-7xl text-green-500 font-dark font-extrabold mb-8 flex items-center"> 404 <img src={Logo} alt='Job-in' className='m-6'/></div>
            <p class="text-2xl md:text-3xl font-light leading-normal mb-8">
                Désolé, nous n'avons pas pu trouver la page que vous recherchez
            </p>
            
            <Link to='/' class="px-5 inline py-3 text-xm font-medium leading-5 shadow-2xl text-white transition-all duration-400 border border-transparent rounded-lg focus:outline-none bg-green1 active:bg-red-600 hover:scale-105 ease-in-out">retour à la page d'accueil</Link>
    </div>
        <div class="w-full lg:flex lg:justify-end lg:w-1/2 mx-5 my-12">
        <img src="https://user-images.githubusercontent.com/43953425/166269493-acd08ccb-4df3-4474-95c7-ad1034d3c070.svg" class="" alt="Page non trouvée"/>
        </div>
    </div>
    </div>
  )
}

export default NoPage