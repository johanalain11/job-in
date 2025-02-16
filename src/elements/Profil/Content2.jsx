import React from 'react'
import { BiSolidEdit } from "react-icons/bi";
import { MdOutlineAddBox } from "react-icons/md";
import ImageComponent from '../../functions/ImageComponent';

function Content2() {

    const infos = [
        {image:'email', app:"E-mail", link:"jank092016@gmail.com"},
        {image:'telephone', app:"Téléphone", link:"+ 237 650374754"},
        {image:'langue', app:"Langues", link:"Français, Anglais"},
    ]
    const contact = [
        {image:'Whatsapp', app:"Whatsapp", link:"wa.me/c/237650374754"},
        {image:'Linkedin', app:"LinkedIn", link:"linkedIn.com/johanNzali"},
        {image:'Website', app:"Site Web", link:"www.johanNzali.com"},
    ]
    const publication = [
        {image:"/", date: "22 décembre 2023",
        description: "Flyer réalisé pour l’entreprise Fresh season"},
        {image:"/", date: "22 décembre 2023",
        description: "Flyer réalisé pour l’entreprise JANK Store"},
    ]

  return (
    <div className='p-4 lg:p-8 gap-y-6 flex flex-wrap w-full max-w-96'>
        {/*INFOS*/}
        <div className='border border-gray3 min-w-64 max-w-lg w-full flex h-fit flex-col relative p-4 lg:px-8'>
            <p className='text-3xl'>Informations </p>
            <div className='w-8 h-8 absolute right-5 top-4'><BiSolidEdit size={30} color='#164A41'/></div>
                <div className='mt-3'>
                    {
                        infos.map((infos, index) => <div className='text-gray1 space-y-2'>
                            {
                                <div className='text-lg flex flex-row m-2 justify-start items-start'>
                                    <ImageComponent inputString={infos.image}/>
                                    <div className='mx-2'>
                                        <p>{infos.app}</p>
                                        <p className='text-base text-green1'>{infos.link}</p>
                                    </div>
                                </div>
                            }
                            
                        </div>)
                    }
                </div>
        </div>
        {/*Réseaux sociaux*/}
        <div className='border border-gray3 min-w-64 max-w-lg w-full flex h-fit flex-col relative p-4 lg:px-8'>
            <p className='text-3xl md:mr-20'>Réseaux sociaux </p>
            <div className='w-8 h-8 absolute right-5 top-4'><BiSolidEdit size={30} color='#164A41'/></div>
                <div className='mt-3'>
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
        {/*Publications*/}
        <div className='border border-gray3 min-w-64 max-w-lg w-full flex min-h-40 flex-col relative p-4 lg:px-8'>
            <p className='text-3xl md:mr-20'>Publications </p>
            <div className='w-16 h-8 absolute right-5 top-4 space-x-2 flex'><MdOutlineAddBox size={30} color='#164A41'/><BiSolidEdit size={30} color='#164A41'/></div>
            <div className='w-full flex flex-col justify-center mt-3 space-y-2'>
                {
                    publication.map((publication, index) => 
                    <div key={index} className='flex justify-center p-3 flex-col items-center bg-gray3 bg-opacity-15 border-b border-green1 border-dashed border-spacing-60 my-3'>
                        <div className='bg-green3 h-40 p-2 w-36 bg-opacity-55 mb-1'>
                            <img src={publication.image} alt='/' className='object-contain' />
                        </div>
                        <p className='text-center'>{publication.description}</p>
                        <p className='text-gray2 text-sm'>{publication.date}</p>
                    </div>)
                }
            </div>
            <p className='text-green1 flex justify-center mt-3'>Voir plus</p>
        </div>
    </div>
  )
}

export default Content2