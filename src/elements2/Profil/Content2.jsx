import React from 'react'
import { BiSolidEdit } from "react-icons/bi";
import ImageComponent from '../../functions/ImageComponent';

function Content2() {

    const infos = [
        {image:'email', app:"E-mail", link:"www.job-in.com"},
        {image:'telephone', app:"Téléphone", link:"+ 237 650374754"},
        {image:'langue', app:"Langues", link:"Français, Anglais"},
    ]
    const contact = [
        {image:'Whatsapp', app:"Whatsapp", link:"wa.me/c/237650374754"},
    ]

  return (
    <div className='p-4 lg:p-8 gap-y-6 flex flex-col'>
        {/*INFOS*/}
        <div className='border border-gray3 min-w-80 max-w-lg flex min-h-40 flex-col relative p-4 lg:px-8'>
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
        <div className='border border-gray3 min-w-80 max-w-lg flex min-h-40 flex-col relative p-4 lg:px-8'>
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
    </div>
  )
}

export default Content2