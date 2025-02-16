import React from 'react'
import { useState } from 'react'
import {BsChevronDown} from 'react-icons/bs'

const Content2 = () => {

    const nbJobs = 54;

    const [filterOpen1, setFilterOpen1] = useState(true);
    const [filterOpen2, setFilterOpen2] = useState(true);
    const secteurs = [
        {title: "Développement Web"},
        {title: "Base de données"},
        {title: "Design"},
        {title: "Graphisme"},
        {title: "Réseaux et Systèmes"}
    ]
    const salaires = [
        {title: "10 000 - 29 999 F"},
        {title: "30 000 - 59 999 F"},
        {title: "60 000- 99 900 F"},
        {title: "100 000 - 199 999 F"},
        {title: "200 000 - 499 999 F"},
        {title: "500 000 F et plus"}
    ]
    const jobs = [
        {nom:"Développeur", entreprise:"Gold Telecom", type:"temps plein", localisation:"Yaoundé",
        logo:"", nbPosts:50, nbPostsLimit:67},
        {nom:"Développeur", entreprise:"Gold Telecom", type:"temps plein", localisation:"Yaoundé",
        logo:"", nbPosts:50, nbPostsLimit:67},
        {nom:"Développeur", entreprise:"Gold Telecom", type:"temps plein", localisation:"Yaoundé",
        logo:"", nbPosts:50, nbPostsLimit:67},
        {nom:"Développeur", entreprise:"Gold Telecom", type:"temps plein", localisation:"Yaoundé",
        logo:"", nbPosts:50, nbPostsLimit:67},
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
                            <input type="checkbox" name='checkSecteur' />
                            <p>{secteurs.title}</p>
                        </li>
                    ))}
                </ul>
            )}

            <h1 className='flex font-medium duration-200 cursor-pointer mt-3 w-full justify-between' onClick={() => setFilterOpen2(!filterOpen2)}>
                Tranche salariale
                <BsChevronDown className={`${filterOpen2 && "rotate-180"} ml-2`} />
            </h1>
            {!filterOpen2 && (
                <ul>
                    {salaires.map((salaires, index) => (
                        <li key={index} className='text-gray2 text-sm flex items-center gap-x-2 cursor pointer p-1.5 px-2'>
                            <input type="checkbox" name='checkSalaire' />
                            <p>{salaires.title}</p>
                        </li>
                    ))}
                </ul>
            )}
        </div>
        <div className='w-full xl:pl-8 pl-3'>
            <p className='font-bold text-xl md:text-2xl mb-2'>Tous les jobs</p>
            <p>{nbJobs} résultats</p>
            <div className='mt-4 w-full space-y-3'>
                {jobs.map((jobs, index) => 
                <div key={index} className='border border-gray3 flex flex-row md:max-w-screen-sm w-full md:min-w-96 xl:w-full p-2 gap-x-3 lg:px-3'>
                    <div>
                        <img src={jobs.logo} alt='/' className='border-2 border-yellow rounded-full w-8'/>
                    </div>
                    <div className='flex flex-row justify-between w-full'>
                        <div className='gap-y-1 flex flex-col'>
                            <h2 className='font-semibold text-xl'>{jobs.nom}</h2>
                            <p className='text-gray1'>{jobs.entreprise} - {jobs.localisation}</p>
                            <p className='text-sm'>{jobs.type}</p>
                        </div>
                        <div className='flex flex-col justify-center items-center w-fit'>
                            <button className='bg-green3 text-white p-1 font-bold'>Postuler</button>
                            <p className='text-xs mt-2 text-gray1'>{jobs.nbPosts} postulants sur {jobs.nbPostsLimit}</p>
                        </div>
                    </div>
                </div>)}
            </div>
        </div>
    </div>
  )
}

export default Content2