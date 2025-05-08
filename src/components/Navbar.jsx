import React, {useState} from 'react'
import logo1 from '../assets/logo1.png'
import account from '../assets/account.png'
import {AiOutlineClose, AiOutlineMenu} from 'react-icons/ai'
import { Link as LinkScroll } from 'react-scroll'
import {Link} from 'react-router-dom'

const Navbar = () => {
    const [nav, setNav] = useState(true)

    const handleNav = () => {
        setNav(!nav)
    }

    const nav_links = [
        {key:0, path:"home" ,link: "Accueil"},
        {key:1, path:"domains" ,link: "Domaines"},
        {key:2, path:"jobs" ,link: "Jobs"},
        {key:3, path:"avis" ,link: "Avis"},
        {key:4, path:"faq" ,link: "FAQ"},
    ]


  return (
    <div className='block w-screen'>
        <div id='home' className='text-white flex justify-center p-4 h-24 px-auto'>

            {/** COTE WEB  */}
            <span className='md:flex flex-row w-full max-w-[1240px] xl:max-w-[1340px] justify-between hidden md:fixed z-50 bg-transparent backdrop-blur-xl px-3 md:px-auto rounded-3xl'>
                <img src={logo1} alt='/' className='hover:translate-y-1 ml-3'/>
                <ul className='hidden md:flex flex-row min-w-1/2 w-fit'>
                    {
                        nav_links.map(({link, path}) => <LinkScroll spy={true} smooth={true} offset={-100} key={link} to={path} activeClass='active'
                        className='p-4 hover:translate-y-1 navbar_items1'>{link}</LinkScroll>)
                    }
                    <li><div className='bg-yellow button rounded-full m-2 font-extrabold p-2 lg:mt-2 hover:translate-y-1'><Link to='/dashboard'>S'inscrire</Link></div></li>
                    <li><Link to='/dashboard'><img src={account} alt='/' className='mx-4 hover:translate-y-1'/></Link></li>
                </ul>
            </span>

        {/* COTE MOBILE */}
            <div className="left-0 top-0 w-full fixed backdrop-blur-xl bg-transparent">
                <div className='flex justify-between items-center pr-6 md:hidden'>
                    <img src={logo1} className='m-4' alt='/'/>
                    <div onClick={handleNav} className='md:hidden'>
                        {!nav ? <AiOutlineClose size={20}/> : <AiOutlineMenu size={20}/> }
                    </div>
                </div>
                <ul className={'pt-4 uppercase flex flex-col border-r border-green1 bg-green3 z-50 sticky' + (nav ? " hidden" : "")}>
                        {
                            nav_links.map(({link, path}) => <li><LinkScroll spy={true} smooth={true} offset={-10} key={link} to={path} activeClass='active'
                            className='p-4 border-b block border-[#164A41] navbar_items2' onClick={handleNav} >{link}</LinkScroll></li>)
                        }
                        <li className='p-4 border-b border-[#164A41] navbar_items2'><Link to='/dashboard'><div className='w-full'>S'inscrire</div></Link></li>
                        <li className='p-4 border-b border-[#164A41] navbar_items2'><Link to='/dashboard'><div className='w-full'>Compte</div></Link></li>
                </ul>
            </div>
        </div>
    </div>
  )
}

export default Navbar