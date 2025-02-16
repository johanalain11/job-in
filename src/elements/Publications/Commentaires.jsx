import React from 'react'

function Commentaires() {
    const commentaires = [
        {image:"", nom:"jank store", date:"il y a 2 jours",
        text:"Votre flyer est magnifique! Nous sommes interessés par vos services."},
        {image:"", nom:"jank store", date:"il y a 2 jours",
        text:"Votre flyer est magnifique! Nous sommes interessés par vos services."},
        {image:"", nom:"jank store", date:"il y a 2 jours",
        text:"Votre flyer est magnifique! Nous sommes interessés par vos services."},
    ]

  return (
    <div>
        <h1 className='text-2xl mt-5 mb-3'>Commentaires</h1>
        <div className='divide-y divide-gray2'>
            {
                commentaires.map((commentaires, index) =><div key={index} className='bg-gray3 max-w-96 flex flex-col p-4'>
                    <div className='flex flex-row justify-between relative w-full mb-2'>
                        <div className='flex flex-row'>
                            <img src={commentaires.image} alt='/' sizes='24' className='rounded-full border-2 border-yellow mr-3'/>
                            <p><b>{commentaires.nom}</b></p>
                        </div>
                        <p className='float-right'>{commentaires.date}</p>
                    </div>
                    <p className='text-sm'>{commentaires.text}</p>
                </div>)
            }
        </div>
    </div>
  )
}

export default Commentaires