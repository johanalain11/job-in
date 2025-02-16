import React from 'react'
import { useState } from 'react'
import {BsChevronDown} from 'react-icons/bs'

const Content2 = () => {

    const nbEntreprises = 51;

    const [filterOpen1, setFilterOpen1] = useState(true);
    const [filterOpen2, setFilterOpen2] = useState(true);
    const secteurs = [
        {title: "Tous"},
        {title: "Développement Web"},
        {title: "Base de données"},
        {title: "Design"},
        {title: "Graphisme"},
        {title: "Réseaux et Systèmes"}
    ]
    const portée = [
        {title: "Locale"},
        {title: "Nationale"},
        {title: "Multinationale"},
    ]
    const jobs = [
        {nom:"Gold Telecom", domaine1:"Design", domaine2:"Cybersécurité", nbJobs:4,
        description:"Figma ipsum component variant main layer. Opacity device project italic invite vertical device bold pencil blur. Ellipse bullet line figjam "},
        {nom:"Gold Telecom", domaine1:"Design", domaine2:"Cybersécurité", nbJobs:4,
        description:"Figma ipsum component variant main layer. Opacity device project italic invite vertical device bold pencil blur. Ellipse bullet line figjam "},
        {nom:"Gold Telecom", domaine1:"Design", domaine2:"Cybersécurité", nbJobs:4,
        description:"Figma ipsum component variant main layer. Opacity device project italic invite vertical device bold pencil blur. Ellipse bullet line figjam "},
        {nom:"Gold Telecom", domaine1:"Design", domaine2:"Cybersécurité", nbJobs:4,
        description:"Figma ipsum component variant main layer. Opacity device project italic invite vertical device bold pencil blur. Ellipse bullet line figjam "},
    ]

  return (
    <div className='padding_content flex flex-col md:flex-row w-full'>
        <div className='w-full md:w-64 mt-2 mx-3 mb-3'>
            <p className='flex font-medium duration-200 cursor-pointer justify-between' onClick={() => setFilterOpen1(!filterOpen1)}>
                <span className='text-nowrap w-40 '>Secteurs d'activité</span>
                <BsChevronDown className={`${filterOpen1 && "rotate-180"} ml-2`} />
            </p>
            {!filterOpen1 && (
                <ul>
                    {secteurs.map((secteurs, index) => (
                        <li key={index} className='text-gray2 text-sm flex items-center gap-x-2 cursor pointer p-1.5 px-2'>
                            <input type="checkbox" name='checkSecteur' checked/>
                            <p>{secteurs.title}</p>
                        </li>
                    ))}
                </ul>
            )}

            <h1 className='flex font-medium duration-200 cursor-pointer mt-3 w-full justify-between' onClick={() => setFilterOpen2(!filterOpen2)}>
                Portée
                <BsChevronDown className={`${filterOpen2 && "rotate-180"} ml-2`} />
            </h1>
            {!filterOpen2 && (
                <ul>
                    {portée.map((portée, index) => (
                        <li key={index} className='text-gray2 text-sm flex items-center gap-x-2 cursor pointer p-1.5 px-2'>
                            <input type="checkbox" name='checkSalaire' />
                            <p>{portée.title}</p>
                        </li>
                    ))}
                </ul>
            )}
        </div>
        <div className='w-full xl:pl-8 pl-3 mb-10'>
            <p className='font-bold text-xl md:text-2xl mb-2'>Toutes les entreprises</p>
            <p>{nbEntreprises} résultats</p>
            <div className='mt-4 w-full space-y-3 lg:space-y-0 grid gri-cols-1 lg:grid-cols-2 justify-center items-center max-w-screen-md gap-4'>
                {jobs.map((jobs, index) => 
                <div key={index} className='border border-gray3 flex flex-col justify-center items-center p-2 lg:px-3 gap-x-3
                                            hover:bg-yyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyell'>
                    <div className='flex flew-row justify-between w-full py-2'>
                        <img src={jobs.logo} alt='/' className='border-2 border-yellow rounded-full w-10 h-10'/>
                        <div className='px-2.5 h-6 bg-gray3 bg-opacity-50 rounded text-sm'>{jobs.nbJobs} jobs</div>
                    </div>
                    <div className='flex flex-col justify-between w-full'>
                        <div className='gap-y-1 flex flex-col mb-2'>
                            <h2 className='font-semibold text-xl'>{jobs.nom}</h2>
                            <p className='text-gray1 text-xs lg:text-sm'>{jobs.description}</p>
                        </div>
                        <div className='flex flex-row gap-x-3 w-full items-center text-xs lg:text-sm'>
                            <p className='bg-green3 bg-opacity-40 text-green1 p-1 rounded-2xl px-2'>{jobs.domaine1}</p>
                            <p className='p-1 rounded-2xl px-2 text-red1 bg-red2'>{jobs.domaine2}</p>
                        </div>
                    </div>
                </div>)}
            </div>
        </div>
    </div>
  )
}

export default Content2