import React from 'react'
import { VscAccount } from "react-icons/vsc";
import { BiSolidEdit } from "react-icons/bi";
import { GrLocation } from "react-icons/gr"
import { PiFlag } from "react-icons/pi";
import { MdOutlineAddBox } from "react-icons/md";

function Content1() {

    const Jobber = [
        {name: "Johan NZALI", metier: "Développeur web, Développeur Android.. ",
        location:"Yaoundé, Cameroun", flag:true, profil:"Je suis un développeur- Analyste Cybersécurité- Designer graphique, travaillant actuellement en freelance. Figma ipsum component variant main layer. Polygon pencil selection star vertical text layout list. Project vector project polygon create share share text figma text. Asset ellipse project image project link text effect. Invite shadow pencil reesizing horizontal union undo.",
    },
    ]
    const experiences = [
        {nom:"Nom du job", entreprise:"Gold Telecom", type:"temps plein", localisation:"Yaoundé",
        logo:"", date:"Date", description:"Figma ipsum component variant main layer. Variant union stroke distribute opacity layer. Union outline export fill follower vertical."},
        {nom:"Nom du job", entreprise:"Gold Telecom", type:"temps plein", localisation:"Yaoundé",
        logo:"", date:"Date", description:"Figma ipsum component variant main layer. Variant union stroke distribute opacity layer. Union outline export fill follower vertical."},
    ]
    const education = [
        {nom:"Nom de l’école/ la structure", diplome:"Diplôme", specialite:"Spécialité", 
        localisation:"Yaoundé", logo:"", date:"Date"},
        {nom:"Nom de l’école/ la structure", diplome:"Diplôme", specialite:"Spécialité", 
        localisation:"Yaoundé", logo:"", date:"Date"},
    ]
    const competences =  [
        {titre:"Développement Web"},
        {titre:"Design graphique"},
        {titre:"Développement Android"},
        {titre:"Cryptographie"},
    ]

  return (
    <div className='p-4 lg:p-8 gap-y-6 flex flex-wrap w-full max-w-96'>
        {/*IDENTITE*/}
        <div className='border border-gray3 min-w-64 max-w-lg w-full flex flex-col relative'>
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
                        <div className='bg-green3 bg-opacity-70 py-1 px-2 text-green1 flex items-center'>
                            <PiFlag color='#164A41' size={26} className='mx-2'/>
                            {Jobber.flag} Disponible pour un job
                        </div>
                    </div>)
                }
            </div>
        </div>
        {/*PROFIL*/}
        <div className='border border-gray3 min-w-64 max-w-lg w-full flex min-h-40 flex-col relative p-4 lg:px-8'>
            <p className='text-3xl'>Profil</p>
            <div className='w-8 h-8 absolute right-5 top-4'><BiSolidEdit size={30} color='#164A41'/></div>
            <div className='mt-3'>
                {Jobber.map((Jobber) => 
                <div>
                    {Jobber.profil}
                </div>)}
            </div>
        </div>
        {/*EXPERIENCES*/}
        <div className='border border-gray3 min-w-64 max-w-lg flex min-h-40 flex-col relative p-4 lg:px-8'>
            <p className='text-3xl'>Expériences</p>
            <div className='w-8 h-8 absolute right-5 top-4'><MdOutlineAddBox size={30} color='#164A41'/></div>
            <div className='mt-4 w-full space-y-3 divide-y divide-gray3'>
                {experiences.map((experiences, index) => 
                <div key={index} className='flex flex-row md:max-w-screen-sm min-w-64 xl:w-full p-2 gap-x-3 lg:px-3'>
                    <div>
                        <img src={experiences.logo} alt='/' className='border-2 border-yellow rounded-full w-8'/>
                    </div>
                    <div className='flex flex-row justify-between w-full'>
                        <div className='gap-y-1 flex flex-col text-sm'>
                            <h2 className='text-2xl'>{experiences.nom}</h2>
                            <p>{experiences.entreprise} - {experiences.localisation}</p>
                            <p className='text-gray1'>{experiences.type} - {experiences.date}</p>
                            <p>{experiences.description}</p>
                        </div>
                        <div className='mt-2 min-w-10 items-end'>
                            <BiSolidEdit size={27} color='#164A41'/>
                        </div>
                    </div>
                </div>)}
            </div>
            <p className='text-yellow1 flex justify-center mt-2'>Voir plus</p>
        </div>
        {/*EDUCATION*/}
        <div className='border border-gray3 min-w-64 max-w-lg w-full flex min-h-40 flex-col relative p-4 lg:px-8'>
            <p className='text-3xl'>Education</p>
            <div className='w-8 h-8 absolute right-5 top-4'><MdOutlineAddBox size={30} color='#164A41'/></div>
            <div className='mt-4 w-full space-y-3 divide-y divide-gray3'>
                {education.map((education, index) => 
                <div key={index} className='flex flex-row md:max-w-screen-sm min-w-80 xl:w-full p-2 gap-x-3 lg:px-3'>
                    <div>
                        <img src={education.logo} alt='/' className='border-2 border-yellow rounded-full w-8'/>
                    </div>
                    <div className='flex flex-row justify-between w-full'>
                        <div className='gap-y-1 flex flex-col text-sm'>
                            <h2 className='text-xl'>{education.nom}</h2>
                            <p>{education.diplome} - {education.specialite}</p>
                            <p className='text-gray1'>{education.localisation} - {education.date}</p>
                        </div>
                        <div className='mt-2 min-w-8 items-end'>
                            <BiSolidEdit size={27} color='#164A41'/>
                        </div>
                    </div>
                </div>)}
            </div>
            <p className='text-yellow1 flex justify-center mt-2'>Voir plus</p>
        </div>
        {/*COMPETENCES*/}
        <div className='border border-gray3 min-w-64 max-w-lg w-full flex min-h-40 flex-col relative p-4 lg:px-8'>
            <p className='text-3xl'>Compétences</p>
            <div className='w-8 h-8 absolute right-5 top-4'><BiSolidEdit size={30} color='#164A41'/></div>
            <div className='mt-3 flex flex-wrap'>
                {competences.map((competences) => 
                <div className='bg-green3 bg-opacity-40 p-1 m-1 whitespace-nowrap'>
                    {competences.titre}
                </div>)}
            </div>
        </div>

    </div>
  )
}

export default Content1