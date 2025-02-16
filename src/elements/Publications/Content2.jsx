import React from 'react'
import { HiArrowNarrowRight } from "react-icons/hi";

const Content2 = () => {

    const nbPublications = 54;
    const publications = [
        {name:"Johan NZALI" , date:"22 décembre 2023", image:"/src/assets/account.png",
        description:"Flyer réalisé pour l’entreprise Fresh season"},
        {name:"Johan NZALI" , date:"22 décembre 2023", image:"/src/assets/account.png",
        description:"Flyer réalisé pour l’entreprise Fresh season"},
        {name:"Johan NZALI" , date:"22 décembre 2023", image:"/src/assets/account.png",
        description:"Flyer réalisé pour l’entreprise Fresh season"},
        {name:"Johan NZALI" , date:"22 décembre 2023", image:"/src/assets/account.png",
        description:"Flyer réalisé pour l’entreprise Fresh season"},
    ];

  return (
    <div className='padding_content'>
        <p className='font-bold text-xl md:text-2xl'>Toutes les publications</p>
        <p>{nbPublications} publications</p>
        <div className='my-4 md:my-8 gap-2 lg:gap-4 grid grid-cols-1 lg:grid-cols-2 justify-between items-center lg:items-start'>
            {
                publications.map((publications, index) => <div key={index} className='p-2 flex flex-col md:flex-row bg-[#9DC88D6B] bg-opacity-40 hover:scale-105 transition ease-in-out duration-300'>
                    <div className='p-2 bg-green1 max-w-52 min-w-40'><img src={publications.image} alt='/'/></div>
                    <div className='object-contain pl-2'>
                        <p className='text-xl font-bold min-w-40'>{publications.name}</p>
                        <p>{publications.date}</p>
                        <p>{publications.description}</p>
                        <HiArrowNarrowRight className='float-right bottom-2 mr-6 text-xl lg:text-3xl text-green1' />
                    </div>
                </div>)
            }
        </div>
    </div>
  )
}

export default Content2