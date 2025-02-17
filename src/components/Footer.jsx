import React from 'react'
import Logo from '../assets/logo1.png'
import Logo2 from '../assets/logo2.png'
import { FiPhone } from "react-icons/fi"
import { TfiEmail } from "react-icons/tfi"
import { GrLocation } from "react-icons/gr"
import {Form} from "radix-ui"

const Footer = () => {
  return (
    <div className='bg-black min-h-[170px] h-fit md:h-36'>
        <div className=' grid grid-cols-1 md:grid-cols-2 space-x-10 space-y-6 md:space-y-0 max-w-[1240px] text-white items-center py-6 md:mt-0 justify-center mx-auto'>
            <div className='flex flex-col md:flex-row justify-center items-center mx-auto space-y-6'>
                <div className='md:min-w-60 w-full md:w-fit flex flex-col justify-center items-center mx-auto '>
                    <img src={Logo} alt='/' className='justify-self-center md:justify-start w-40'/>
                    <div className='flex flex-col justify-center mx-auto mt-3 md:mt-8 gap-y-3'>
                        <div className='flex flex-row items-center'><FiPhone style={{color:'white'}}/><p className='px-2'> + 237 650 37 47 54 </p> </div>
                        <div className='flex flex-row items-center'><TfiEmail style={{color:'white'}}/><p className='px-2'> job-in @gmail.com </p> </div>
                        <div className='flex flex-row items-center'><GrLocation style={{color:'white'}}/><p className='px-2'> Yaoundé, Cameroun </p> </div>
                    </div>
                </div>
                <div className='my-auto flex flex-row md:flex-col space-x-2 md:space-y-2 mx-3 md:mx-auto items-center justify-center'>
                    <p>Accueil</p>
                    <p>Inscription</p>
                    <p>Publicités</p>
                    <p>Jobs</p>
                    <p className='text-center'>Services populaires</p>
                    <p>Job-bers</p>
                </div>
            </div>
            <div className='space-y-3 pt-3 flex flex-col md:px-5 justify-center md:items-start items-center'>
                <Form.Root className="w-[260px]">
                    <Form.Field className="mb-2.5 grid" name="email">
                        <div className="flex items-baseline justify-between">
                            <Form.Label className="text-[15px] font-medium leading-[25px] text-white">
                                Email
                            </Form.Label>
                            <Form.Message
                                className="text-[13px] text-white opacity-80"
                                match="valueMissing"
                            >
                                Entrez votre email s'il vous plait
                            </Form.Message>
                            <Form.Message
                                className="text-[13px] text-white opacity-80"
                                match="typeMismatch"
                            >
                                Votre email n'est pas valide
                            </Form.Message>
                        </div>
                        <Form.Control asChild>
                            <input
                                className="box-border inline-flex h-[35px] w-full appearance-none items-center justify-center rounded bg-black px-2.5 text-[15px] leading-none text-white shadow-[0_0_0_1px] shadow-black outline-none selection:bg-black selection:text-white hover:shadow-[0_0_0_1px_black] focus:shadow-[0_0_0_2px_black]"
                                type="email"
                                required
                            />
                        </Form.Control>
                    </Form.Field>
                    <Form.Field className="mb-2.5 grid" name="question">
                        <div className="flex items-baseline justify-between">
                            <Form.Label className="text-[15px] font-medium leading-[25px] text-white">
                                Laissez nous un avis.
                            </Form.Label>
                            <Form.Message
                                className="text-[13px] text-white opacity-80"
                                match="valueMissing"
                            >
                                Entrez votre avis s'il vous plait
                            </Form.Message>
                        </div>
                        <Form.Control asChild>
                            <textarea
                                className="box-border inline-flex w-full resize-none appearance-none items-center justify-center rounded bg-black p-2.5 text-[15px] leading-none text-white shadow-[0_0_0_1px] shadow-black outline-none selection:bg-black selection:text-white hover:shadow-[0_0_0_1px_black] focus:shadow-[0_0_0_2px_black]"
                                required
                            />
                        </Form.Control>
                    </Form.Field>
                    <Form.Submit asChild>
                        <button className="mt-2.5 box-border inline-flex h-[35px] w-full items-center justify-center rounded bg-white px-[15px] font-medium leading-none text-green1 shadow-[0_2px_10px] shadow-black hover:bg-green3 focus:shadow-[0_0_0_2px] focus:shadow-black focus:outline-none">
                            Envoyer
                        </button>
                    </Form.Submit>
	            </Form.Root>
            </div>
        </div>
        <div className='flex w-full justify-center absolute mx-auto items-center self-center md:-my-64 -my-80'>
            <img src={Logo2} alt='/'/>
        </div>
        <div className='justify-center flex h-fit text-gray1 p-3 xl:px-10 border-t-2 mx-auto'>
            <div>
                <p className=' max-w-6xl'>@ 2023 Job-in - All rights reserved </p>
            </div>
        </div>
    </div>
  )
}

export default Footer