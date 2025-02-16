import React from 'react'
import { VscAccount } from "react-icons/vsc";
import { BiSolidEdit } from "react-icons/bi";
import { GrLocation } from "react-icons/gr"

function Content1() {

    const Jobber = [
        {name: "JANK Company", metier: "https://jankcompany.cm ",
        location:"Yaoundé, Cameroun", flag:true, profil:" Figma ipsum component variant main layer. Polygon pencil selection star vertical text layout list. Project vector project polygon create share share text figma text. Asset ellipse project image project link text effect. Invite shadow pencil reesizing horizontal union undo.",
    },
    ]
    const secteurs =  [
        {titre:"Développement Web"},
        {titre:"Design graphique"},
        {titre:"Développement Android"},
        {titre:"Cryptographie"},
    ]

  return (
    <div className='p-4 lg:p-8 gap-y-6 flex flex-col'>
        {/*INFORMATIONS*/}
        <div className='border border-gray3 min-w-80 max-w-lg flex flex-col relative'>
            <div className='w-full bg-yellow h-48'></div>
            <div className='rounded-full absolute flex justify-self-center p-2 bg-white top-16 mx-auto left-0 right-0 w-fit'><VscAccount size={170} color='#164A41'/></div>
            <div className='bg-white p-0.5 w-8 h-8 absolute rounded-lg right-4 top-3'><BiSolidEdit size={28} color='#164A41'/></div>
            <div>
                {
                    Jobber.map((Jobber) => 
                    <div className='text-lg mt-14 mb-3 space-y-2 items-center justify-center flex flex-col'>
                        <p className='text-3xl uppercase'>{Jobber.name}</p>
                        <p className='text-center'>{Jobber.metier}</p>
                        <div className='flex text-gray1 items-center'>
                            <GrLocation color='#164A41' size={28} className='mx-2'/>
                            {Jobber.location}
                        </div>
                    </div>)
                }
            </div>
        </div>
        {/*PROFIL*/}
        <div className='border border-gray3 min-w-80 max-w-lg flex min-h-40 flex-col relative p-4 lg:px-8'>
            <p className='text-3xl'>Profil</p>
            <div className='w-8 h-8 absolute right-5 top-4'><BiSolidEdit size={30} color='#164A41'/></div>
            <div className='mt-3'>
                {Jobber.map((Jobber) => 
                <div>
                    {Jobber.profil}
                </div>)}
            </div>
        </div>
        {/*Secteurs*/}
        <div className='border mb-8 border-gray3 min-w-80 max-w-lg flex min-h-40 flex-col relative p-4 lg:px-8'>
            <p className='text-3xl'>Secteurs d'activité</p>
            <div className='w-8 h-8 absolute right-5 top-4'><BiSolidEdit size={30} color='#164A41'/></div>
            <div className='mt-3 flex flex-wrap'>
                {secteurs.map((secteurs) => 
                <div className='bg-green3 bg-opacity-40 p-1 m-1 whitespace-nowrap'>
                    {secteurs.titre}
                </div>)}
            </div>
        </div>

    </div>
  )
}

export default Content1