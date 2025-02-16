import React from 'react'
import { IoCheckmarkCircleOutline } from "react-icons/io5";

function Content3() {

    const jobs = [
        {nom:"Développeur", entreprise:"Gold Telecom", type:"temps plein", localisation:"Yaoundé",
        logo:"", nbPosts:50, nbPostsLimit:67, 
        },
    ]
    const description="Figma ipsum component variant main layer. Library team link share prototype comment link. Ipsum select create project list shadow slice scrolling vertical device. Plugin rotate distribute list image slice team. Clip style editor frame link invite prototype select scale horizontal.";
    const Exigences = [
        {nom:"Avoir au moins 2 années d’expérience dans le développement web"},
        {nom:"Être âgé de plus de 21 ans"}
    ]

  return (
    <div className='w-full p-5 md:p-8 xl:p-10 md:max-w-4xl'>
        <div className='divide-y divide-gray3'>
            <div className='space-y-3 border-[16px] border-yellow1 border-opacity-20 p-3 w-full xl:max-w-4xl flex flex-row items-center'>
                {jobs.map((jobs, index) => 
                <div className='w-full flex flex-col'>
                    <div key={index} className='flex flex-col md:flex-row gap-x-3 lg:px-3 w-full justify-center md:justify-start items-center'>
                        <div>
                            <img src={jobs.logo} alt='/' className='border-2 border-yellow rounded-full w-24 h-24 md:w-12 md:h-12 mb-2 md:mb-0'/>
                        </div>
                        <div className='flex flex-col md:flex-row justify-center items-center md:justify-between w-full xl:ml-3'>
                            <div className='gap-y-1 flex flex-col justify-center md:justify-start items-center md:items-start my-4 md:my-0'>
                                <h2 className='font-semibold text-xl'>{jobs.nom}</h2>
                                <p className='text-gray1'>{jobs.entreprise} - {jobs.localisation}</p>
                                <p className='text-sm'>{jobs.type}</p>
                            </div>
                            <div className='flex flex-col justify-center items-center'>
                                <button className='bg-green3 text-white p-1 font-bold text-lg'>Postuler</button>
                                <p className='text-xs mt-2 text-gray1'>{jobs.nbPosts} postulants sur {jobs.nbPostsLimit}</p>
                            </div>
                        </div>
                    </div>
                </div>)}
            </div>
            <div className='mt-3 pt-3'>
                <h2 className='text-lg'>Description</h2>
                <p className='text-gray1 my-2'>{description}</p>
                <h2 className='text-lg mt-5'>Exigences</h2>
                <div>
                    {
                        Exigences.map((Exigences, index) =>
                        <div className='flex my-1'>
                            <IoCheckmarkCircleOutline color='#164A41' size={20}/>
                            <p className='text-gray1 mx-1'>{Exigences.nom}</p>
                        </div>)
                    }
                </div>
            </div>
        </div>
        <div>
            
        </div>
    </div>
  )
}

export default Content3