import React from 'react'
import Account from '../../assets/account1.svg'
import Rate from '../../assets/rate.svg'
import { GrLocation } from "react-icons/gr"
import ImageComponent from '../../functions/ImageComponent';
import Commentaires from './Commentaires';

function Content4() {

    const jobber = [
        {image:"", name:"Johan NZALI", periode:"il y a 3 jours", rate:4.2,
        metier:"Développeur Android, Designer graphique.. ", localisation:"Yaoundé, Cameroun",
        publication:'../../assets/publi.png', date:'22 décembre 2023',
        comment:"Flyer réalisé pour l'entreprise Fresh Season"}
    ]
    const contact = [
        {image:'Whatsapp', app:"Whatsapp", link:"wa.me/c/237650374754"},
        {image:'Linkedin', app:"LinkedIn", link:"linkedIn.com/johanNzali"},
        {image:'Website', app:"Site Web", link:"www.johanNzali.com"},
    ]

  return (
    <div className='padding_content flex flex-col-reverse md:flex-row gap-3'>
        <div>
            <div>
                <div>
                    {
                        jobber.map((jobber) =>
                    <div className='flex flex-col bg-gray3 p-1.5 w-full md: md:w-80 items-center justify-between'>
                        <div className='flex flex-row justify-evenly w-full'>
                            <img src={Account} alt='/' />
                            <div className='flex items-end flex-col mt-4'>
                                <h2 className='font-bold text-2xl'>{jobber.name}</h2>
                                <p className='text-gray1'>{jobber.periode}</p>
                                <div className='flex flex-row items-center justify-center'>
                                    <img src={Rate} alt='/' /><span> {jobber.rate}</span>
                                </div>
                            </div>
                        </div>
                        <div className='justify-center flex flex-col p-2'>
                            <p>{jobber.metier}</p>
                            <div className='flex flex-row space-x-2'>
                                <GrLocation color='#164A41'/>
                                <p className='text-gray1'>{jobber.localisation}</p>
                            </div>
                        </div>
                    </div>)
                    }
                </div>
            </div>
            <div className='text-xl mt-4'>
                <h1 className='text-2xl'>Contacts</h1>
                <div>
                    {
                        contact.map((contact, index) => <div className='text-gray1 space-y-2'>
                            {
                                <div className='text-lg flex flex-row m-2 justify-start items-start'>
                                    <ImageComponent inputString={contact.image}/>
                                    <div className='mx-2'>
                                        <p>{contact.app}</p>
                                        <p className='text-base text-green1'>{contact.link}</p>
                                    </div>
                                </div>
                            }
                            
                        </div>)
                    }
                </div>
            </div>
        </div>
        <div className='border-b md:border-l md:border-b-0 border-black px-3 lg:px-12 py-5 md:py-0'>
            {
                jobber.map((jobber) =>
                <div className='justify-center max-w-screen-md'>
                    <div className='border-8 border-green1 w-full md:max-w-96 min-w-60 max-h-96 min-h-60 hover:scale-110 transition ease-in-out duration-300'>
                        <img src={jobber.publication} alt='/' className="object-contain" />
                    </div>
                    <p className='text-gray2 justify-end flex w-full mt-3'>{jobber.date}</p>
                    <p className='mt-3 text-lg'>{jobber.comment}</p>
                </div>)
            }
            <Commentaires />
        </div>
    </div>
  )
}

export default Content4