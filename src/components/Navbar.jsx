import React, {useState} from 'react'
import logo1 from '../assets/logo1.png'
import account from '../assets/account.png'
import {AiOutlineClose, AiOutlineMenu} from 'react-icons/ai'

const Navbar = () => {
    const [nav, setNav] = useState(false)

    const handleNav = () => {
        setNav(!nav)
    }

  return (
    <div className='text-white flex justify-between items-center max-w-[1240px] mx-auto px-4 h-24'>
        <img src={logo1} alt='/' className='hover:translate-y-1'/>
        <ul className='hidden md:flex'>
            <li className='p-4 hover:translate-y-1 navbar_items1 text-yellow'>Accueil</li>
            <li className='p-4 hover:translate-y-1 navbar_items1'>Jobs</li>
            <li className='p-4 hover:translate-y-1 navbar_items1'>Publicités</li>
            <li><button className='bg-yellow button rounded-full m-2 font-extrabold p-2 lg:mt-2 hover:translate-y-1'>S'inscrire</button></li>
            <li><img src={account} alt='/' className='mx-4 hover:translate-y-1'/></li>
        </ul>
    <div onClick={handleNav} className='fixed right-6 md:hidden'>
        {!nav ? <AiOutlineClose size={20}/> : <AiOutlineMenu size={20}/> }
    </div>
    <div className={!nav ? 'fixed left-0 top-0 w-[60%] md:hidden h-full border-r border-green1 bg-green3 ease-in-out duration-200' : 'fixed left-[-100%]' }>
        <img src={logo1} className='m-4' alt='/'/>
        <ul className='pt-24 uppercase'>
                <li className='p-4 border-b border-[#164A41] navbar_items2'>Accueil</li>
                <li className='p-4 border-b border-[#164A41] navbar_items2'>Jobs</li>
                <li className='p-4 border-b border-[#164A41] navbar_items2'>Publicités</li>
                <li className='p-4 border-b border-[#164A41] navbar_items2'>S'inscrire</li>
                <li className='p-4 border-b border-[#164A41] navbar_items2'>Compte</li>
            </ul>
    </div>
    </div>
  )
}

export default Navbar