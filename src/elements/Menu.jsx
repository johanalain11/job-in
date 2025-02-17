import React, { useEffect, useState } from 'react'
import Logo from '../assets/logo1.png'
import Logo3 from '../assets/logo3.png'
import { BiHomeAlt2 } from "react-icons/bi";
import { TbMessage } from "react-icons/tb";
import { RiSearchLine } from "react-icons/ri";
import { BsArrowLeftShort} from 'react-icons/bs';
import { HiOutlineDocumentText } from "react-icons/hi";
import { PiBuildingsBold } from "react-icons/pi";
import { RiProfileLine } from "react-icons/ri";
import { RiSettings5Line } from "react-icons/ri";
import { TbHelp } from "react-icons/tb";
import { MdOutlineAccountCircle } from "react-icons/md";
import {Link, useLocation} from 'react-router-dom'
import useWindowSize from '../hooks/useWindowSize'
import { HoverCard } from "radix-ui";

const Menu = () => {
    const [open, setOpen] = useState(true);
    const width = useWindowSize();
    const location = useLocation();

    useEffect(() => {
        if ((width < 640)) {
            setOpen(false)
        }
    })

    const dashboardItems1 = [
        {to: '/dashboard', icon: <BiHomeAlt2 className='text-4xl min-w-8'/>, text: 'Tableau de bord'},
        {to: '/publications', icon: <TbMessage className='text-4xl min-w-8' size={36}/>, text: 'Publications'},
        {to: '/postulats', icon: <HiOutlineDocumentText className='text-4xl min-w-8' size={36}/>, text: 'Postulats'},
        {to: '/recherche', icon: <RiSearchLine className='text-4xl min-w-8' size={36}/>, text: 'Recherche'},
        {to: '/entreprises', icon: <PiBuildingsBold className='text-4xl min-w-8' size={36}/>, text: 'Entreprises'},
        {to: '/profile', icon: <RiProfileLine className='text-4xl min-w-8' size={36}/>, text: 'Profil public'},
    ]

    const dashboardItems2 = [
        {to: '/settings', icon: <RiSettings5Line className='text-4xl min-w-8' size={36}/>, text: 'Paramètres'},
        {to: '/help', icon: <TbHelp className='text-4xl min-w-8' size={36}/>, text: 'Aide'},
    ]

  return (
    <div className='flex flex-col md:static justify-between h-screen bg-green3 w-fit'>
        <div className={`max-w-80 text-green1 ${open ? "w-64 lg:w-72" : "w-16"} relative`}>
            <div className='mx-auto py-5 justify-center flex'>
                <Link to='/'>
                <img src={Logo} alt='/' className={`${!open ? "hidden": "inline-block"}`} />
                <img src={Logo3} alt='/' className={`${!open ? "inline-block w-10 pb-4": "hidden"}`} />
                </Link>
                <BsArrowLeftShort className='bg-white text-green1 text-4xl absolute
                -right-3 top-12 md:top-16 border-4 border-green3 cursor-pointer rounded-full'
                onClick={() => setOpen(!open)} />
            </div>
            <div>
                {
                    dashboardItems1.map((item) => 
                        <Link to={item.to} >
                            	<HoverCard.Root className='dashboard_item'>
                                <HoverCard.Trigger asChild>
                                    <div className={`w-full dashboard_item ${location.pathname === item.to ? 'bg-green1 text-white' : 'text-green1'}`}>
                                        {item.icon}
                                        <p className={`${!open ? "hidden": "inline-block"}`}>{item.text}</p>
                                    </div>
                                </HoverCard.Trigger>
                                <HoverCard.Portal>
                                    <HoverCard.Content
                                    className="w-fit p-2 rounded-md bg-white shadow-[hsl(206_22%_7%_/_35%)_0px_10px_38px_-10px,hsl(206_22%_7%_/_20%)_0px_10px_20px_-15px] data-[side=bottom]:animate-slideUpAndFade data-[side=left]:animate-slideRightAndFade data-[side=right]:animate-slideLeftAndFade data-[side=top]:animate-slideDownAndFade data-[state=open]:transition-all"
                                    sideOffset={5}>
                                    <p>{item.text}</p>
                                        <HoverCard.Arrow className='fill-white' />
                                    </HoverCard.Content>
                                </HoverCard.Portal>
                            </HoverCard.Root>
                        </Link>
                )}
                <div className='border-t border-green1 mt-4 pt-2'>
                {
                    dashboardItems2.map((item) => 
                    <Link to={item.to}>
                        <HoverCard.Root className='dashboard_item'>
                            <HoverCard.Trigger asChild>
                                <div className={`w-full dashboard_item ${location.pathname === item.to ? 'bg-green1 text-white' : 'text-green1'}`}>
                                    {item.icon}
                                    <p className={`${!open ? "hidden": "inline-block"}`}>{item.text}</p>
                                </div>
                            </HoverCard.Trigger>
                            <HoverCard.Portal>
                                <HoverCard.Content
                                className="w-fit p-2 rounded-md bg-white shadow-[hsl(206_22%_7%_/_35%)_0px_10px_38px_-10px,hsl(206_22%_7%_/_20%)_0px_10px_20px_-15px] data-[side=bottom]:animate-slideUpAndFade data-[side=left]:animate-slideRightAndFade data-[side=right]:animate-slideLeftAndFade data-[side=top]:animate-slideDownAndFade data-[state=open]:transition-all"
                                sideOffset={5}>
                                <p>{item.text}</p>
                                    <HoverCard.Arrow className='fill-white' />
                                </HoverCard.Content>
                            </HoverCard.Portal>
                        </HoverCard.Root>
                    </Link>
                )}
                </div>
            </div>
        </div>
        <div className='text-white mb-3'>
            <div className='flex flex-row justify-center py-2 space-x-3 rounded-full hover:bg-green2 hover:text-white cursor-pointer transition duration-500 ease-in-out transform hover:scale-105'>
            <MdOutlineAccountCircle className='text-5xl min-w-8' />
            <div className={`${!open ? "hidden": "justify-center flex flex-col space-y-1"}`}>
                <p className='text-green1'>Johan NZALI</p>
                <p className='text-sm font-medium'>jank092016@gmail.com</p>
            </div>
            </div>
        </div>
        
    </div>
  )
}

export default Menu