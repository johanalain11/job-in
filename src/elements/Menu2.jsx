import React, { useEffect, useState } from 'react'
import Logo from '../assets/logo1.png'
import Logo3 from '../assets/logo3.png'
import Candidat from '../assets/candidature.svg'
import Pub from '../assets/pub.svg'
import Offers from '../assets/offers.svg'
import Profile from '../assets/profil_E.png'
import { BiHomeAlt2 } from "react-icons/bi";
import { TbMessage } from "react-icons/tb";
import { BsArrowLeftShort} from 'react-icons/bs';
import {Link} from 'react-router-dom'
import useWindowSize from '../hooks/useWindowSize'

const Menu = () => {
    const [open, setOpen] = useState(true);
    const width= useWindowSize();

    useEffect(() => {
        if (width < 640) {
            setOpen(false);
        }
    })

  return (
    <div className='flex flex-col md:static justify-between h-screen max-h-[110%] bg-green3 bg-opacity-45 w-fit'>
        <div className={`max-w-80 text-green1 ${open ? "w-64 xl:w-72" : "w-16"} relative`}>
            <div className='mx-auto py-5 justify-center flex'>
                <img src={Logo} alt='/' className={`${!open ? "hidden": "inline-block"}`} />
                <img src={Logo3} alt='/' className={`${!open ? "inline-block w-10 pb-4": "hidden"}`} />
                <BsArrowLeftShort className='bg-white text-green1 text-4xl absolute
                -right-3 top-12 md:top-16 border-4 border-green1 cursor-pointer rounded-full'
                onClick={() => setOpen(!open)} />
            </div>
            <div className='text-xl'>
                <div>
                    <Link to="/dashboard-E" className='w-full'>
                        <div className='dashboard_item  text-white bg-green1'>
                        <BiHomeAlt2 className='text-4xl min-w-8'/>
                        <p className={`${!open ? "hidden": "inline-block"}`}>Tableau de bord</p>
                        </div>
                    </Link>
                    <Link to='/publications-E'>
                        <div className='dashboard_item'>
                        <TbMessage className='text-4xl min-w-8' size={36}/>
                        <p className={`${!open ? "hidden": "inline-block"}`}>Publications</p>
                        </div>
                    </Link>
                    <Link to='/candidatures-E' className='w-full'>
                        <div className='dashboard_item'>
                        <img src={Candidat} alt='/'/>
                        <p className={`${!open ? "hidden": "inline-block"}`}>Candidatures</p>
                        </div>
                    </Link>
                    <Link to='/publicites-E' className='w-full'>
                        <div className='dashboard_item'>
                        <img src={Pub} alt='/' />
                        <p className={`${!open ? "hidden": "inline-block"}`}>Publicités</p>
                        </div>
                    </Link>
                    <Link to='/offres-E' className='w-full'>
                        <div className='dashboard_item'>
                        <img src={Offers} alt='/' />
                        <p className={`${!open ? "hidden": "inline-block"}`}>Offres de job</p>
                        </div>
                    </Link>
                    <Link to='/profile-E' className='w-full'>
                        <div className='dashboard_item'>
                        <img src={Profile} alt='/' />
                        <p className={`${!open ? "hidden": "inline-block"}`}>Profil de l'entreprise</p>
                        </div>
                    </Link>
                </div>
                <div className='border-t border-green1 mt-4 pt-2'>
                    <Link to='/settings-E' className='w-full'>
                        <div className='dashboard_item'>
                        <svg xmlns="http://www.w3.org/2000/svg" width="36" height="40" viewBox="0 0 36 40" fill="none" className='min-w-8'>
                            <path d="M30.5251 14.8717L29.9761 14.5317C29.493 14.2552 29.0865 13.8382 28.8001 13.325C28.7746 13.28 28.7506 13.2317 28.7026 13.1384C28.3794 12.5615 28.2224 11.8887 28.2526 11.21L28.2616 10.5017C28.2796 9.36835 28.2886 8.79835 28.1446 8.28835C28.0173 7.83454 27.804 7.41628 27.5191 7.06168C27.1981 6.66168 26.7526 6.37502 25.8601 5.80502L25.1191 5.33002C24.2311 4.76168 23.7856 4.47668 23.3131 4.36835C22.8957 4.27232 22.4646 4.2763 22.0486 4.38002C21.5791 4.49668 21.1396 4.79002 20.2621 5.37335L20.2576 5.37668L19.7266 5.72835C19.6426 5.78502 19.5991 5.81168 19.5571 5.83835C19.1401 6.09668 18.6751 6.23835 18.1966 6.25502C18.1486 6.25835 18.0991 6.25835 18.0016 6.25835L17.8066 6.25668C17.3279 6.23994 16.8599 6.09591 16.4416 5.83668C16.3996 5.81168 16.3591 5.78335 16.2751 5.72668L15.7396 5.37002C14.8561 4.78002 14.4136 4.48668 13.9411 4.36835C13.5236 4.26441 13.0909 4.261 12.6721 4.35835C12.1981 4.46835 11.7541 4.75502 10.8646 5.32835L10.8601 5.33002L10.1281 5.80168L10.1206 5.80835C9.23862 6.37502 8.79612 6.66168 8.47812 7.06002C8.19474 7.41401 7.98252 7.83105 7.85562 8.28335C7.71312 8.79502 7.72062 9.36502 7.73862 10.505L7.74912 11.2117C7.74912 11.32 7.75362 11.3734 7.75212 11.425C7.7442 12.0305 7.58812 12.6222 7.30062 13.1367C7.25112 13.23 7.22862 13.2767 7.20312 13.32C6.95021 13.7736 6.60298 14.1532 6.19062 14.4267L6.02262 14.5317L5.48112 14.865C4.57812 15.42 4.12662 15.6984 3.79962 16.095C3.50889 16.4447 3.28896 16.8596 3.15462 17.3117C3.00462 17.8234 3.00462 18.395 3.00612 19.5417L3.00912 20.48C3.01062 21.6184 3.01362 22.1867 3.16512 22.695C3.2989 23.1443 3.51724 23.5568 3.80562 23.905C4.13262 24.2984 4.57962 24.575 5.47512 25.1284L6.01212 25.46C6.10362 25.5167 6.15012 25.5434 6.19362 25.5734C6.66368 25.8864 7.04757 26.3366 7.30362 26.875L7.40412 27.075C7.65749 27.6065 7.7767 28.2043 7.74912 28.805L7.73862 29.4834C7.72062 30.6267 7.71312 31.2 7.85712 31.7117C7.98462 32.165 8.19762 32.5834 8.48262 32.9384C8.80362 33.3384 9.25062 33.6234 10.1416 34.195L10.8826 34.67C11.7721 35.2384 12.2161 35.5234 12.6886 35.6317C13.1061 35.7277 13.5372 35.7237 13.9531 35.62C14.4241 35.5034 14.8636 35.21 15.7441 34.6234L16.2751 34.27C16.7325 33.9428 17.2614 33.7602 17.8051 33.7417H18.1951C18.6721 33.7584 19.1401 33.9034 19.5601 34.1617L19.6981 34.2534L20.2621 34.63C21.1471 35.22 21.5881 35.5134 22.0606 35.63C22.4779 35.735 22.9106 35.7395 23.3296 35.6434C23.8021 35.5334 24.2491 35.245 25.1386 34.6717L25.8811 34.1934C26.7631 33.6234 27.2056 33.3384 27.5236 32.94C27.8086 32.585 28.0186 32.1684 28.1461 31.7167C28.2886 31.2084 28.2811 30.6434 28.2631 29.52L28.2511 28.7867C28.2213 28.1091 28.3783 27.4375 28.7011 26.8617L28.7986 26.6784C29.0515 26.2247 29.3988 25.8452 29.8111 25.5717L29.9761 25.47L29.9791 25.4684L30.5206 25.135C31.4236 24.5784 31.8751 24.3017 32.2036 23.905C32.4946 23.555 32.7136 23.1384 32.8471 22.6884C32.9971 22.18 32.9971 21.61 32.9941 20.4767L32.9911 19.52C32.9896 18.3817 32.9881 17.8117 32.8366 17.3034C32.7021 16.8546 32.4833 16.4427 32.1946 16.095C31.8691 15.7017 31.4221 15.425 30.5281 14.8734L30.5251 14.8717Z" stroke="#164A41" stroke-width="3" stroke-linecap="round" stroke-linejoin="round"/>
                            <path d="M12 20C12 21.7682 12.6321 23.4638 13.7574 24.7141C14.8826 25.9643 16.4087 26.6667 18 26.6667C19.5913 26.6667 21.1174 25.9643 22.2426 24.7141C23.3679 23.4638 24 21.7682 24 20C24 18.2319 23.3679 16.5362 22.2426 15.286C21.1174 14.0358 19.5913 13.3334 18 13.3334C16.4087 13.3334 14.8826 14.0358 13.7574 15.286C12.6321 16.5362 12 18.2319 12 20Z" stroke="#164A41" stroke-width="3" stroke-linecap="round" stroke-linejoin="round"/>
                        </svg>
                        <p className={`${!open ? "hidden": "inline-block"}`}>Paramètres</p>
                        </div>
                    </Link>
                    <Link to='/help-E' className='w-full'>
                        <div className='dashboard_item'>
                        <svg xmlns="http://www.w3.org/2000/svg" width="36" height="40" viewBox="0 0 36 40" fill="none">
                            <path d="M18 36.6666C9.7155 36.6666 3 29.205 3 20C3 10.795 9.7155 3.33331 18 3.33331C26.2845 3.33331 33 10.795 33 20C33 29.205 26.2845 36.6666 18 36.6666ZM18 33.3333C21.1826 33.3333 24.2348 31.9286 26.4853 29.4281C28.7357 26.9276 30 23.5362 30 20C30 16.4638 28.7357 13.0724 26.4853 10.5719C24.2348 8.0714 21.1826 6.66665 18 6.66665C14.8174 6.66665 11.7652 8.0714 9.51472 10.5719C7.26428 13.0724 6 16.4638 6 20C6 23.5362 7.26428 26.9276 9.51472 29.4281C11.7652 31.9286 14.8174 33.3333 18 33.3333ZM18 28.3333C17.6022 28.3333 17.2206 28.1577 16.9393 27.8452C16.658 27.5326 16.5 27.1087 16.5 26.6666C16.5 26.2246 16.658 25.8007 16.9393 25.4881C17.2206 25.1756 17.6022 25 18 25C18.3978 25 18.7794 25.1756 19.0607 25.4881C19.342 25.8007 19.5 26.2246 19.5 26.6666C19.5 27.1087 19.342 27.5326 19.0607 27.8452C18.7794 28.1577 18.3978 28.3333 18 28.3333ZM19.914 22.97C19.6005 23.2423 19.2025 23.365 18.8076 23.3113C18.4126 23.2575 18.0531 23.0316 17.808 22.6833C17.5629 22.335 17.4524 21.8928 17.5008 21.4539C17.5492 21.0151 17.7525 20.6156 18.066 20.3433L18.657 19.83C18.8909 19.6283 19.0867 19.3773 19.2331 19.0913C19.3795 18.8054 19.4737 18.4901 19.5103 18.1637C19.5469 17.8372 19.5251 17.5059 19.4462 17.1888C19.3673 16.8717 19.2328 16.575 19.0505 16.3158C18.8682 16.0566 18.6417 15.8398 18.3839 15.6781C18.126 15.5163 17.842 15.4127 17.5481 15.3731C17.2541 15.3336 16.956 15.3589 16.6709 15.4475C16.3858 15.5362 16.1192 15.6866 15.8865 15.89L15.2955 16.4033C15.141 16.5455 14.9623 16.6517 14.7702 16.7158C14.578 16.7799 14.3763 16.8005 14.1768 16.7764C13.9774 16.7524 13.7843 16.6841 13.609 16.5756C13.4338 16.4671 13.2799 16.3207 13.1564 16.145C13.033 15.9692 12.9425 15.7678 12.8904 15.5525C12.8383 15.3373 12.8256 15.1126 12.853 14.8917C12.8804 14.6709 12.9474 14.4585 13.05 14.2669C13.1527 14.0754 13.2889 13.9087 13.4505 13.7766L14.04 13.2633C15.1372 12.3107 16.53 11.8815 17.9121 12.07C19.2941 12.2584 20.5522 13.0492 21.4095 14.2683C22.2668 15.4874 22.6532 17.035 22.4835 18.5706C22.3139 20.1062 21.6022 21.5041 20.505 22.4566L19.914 22.97Z" fill="#164A41"/>
                        </svg>
                        <p className={`${!open ? "hidden": "inline-block"}`}>Aide</p>
                        </div>
                    </Link>
                </div>
            </div>
        </div>
        <div className='text-white'>
            <div className='flex flex-row my-3 justify-center'>
            <svg xmlns="http://www.w3.org/2000/svg" width="55" height="55" viewBox="0 0 55 55" fill="none">
                <path d="M55 27.4725C55 12.3062 42.68 0 27.5 0C12.32 0 0 12.3062 0 27.4725C0 35.8256 3.795 43.3537 9.735 48.4069C9.79 48.4619 9.845 48.4619 9.845 48.5169C10.34 48.9019 10.835 49.2869 11.385 49.6719C11.66 49.8369 11.88 50.0534 12.155 50.2734C16.6996 53.3547 22.0643 55.0012 27.555 55C33.0457 55.0012 38.4104 53.3547 42.955 50.2734C43.23 50.1084 43.45 49.8919 43.725 49.7234C44.22 49.3419 44.77 48.9569 45.265 48.5719C45.32 48.5169 45.375 48.5169 45.375 48.4619C51.205 43.3503 55 35.8256 55 27.4725ZM27.5 51.5384C22.33 51.5384 17.6 49.8884 13.695 47.1419C13.75 46.7019 13.86 46.2653 13.97 45.8253C14.2977 44.6329 14.7784 43.4878 15.4 42.4188C16.005 41.3737 16.72 40.4388 17.6 39.6138C18.425 38.7887 19.415 38.0222 20.405 37.4172C21.45 36.8122 22.55 36.3722 23.76 36.0422C24.9794 35.7135 26.2371 35.5482 27.5 35.5506C31.2491 35.5241 34.8605 36.9622 37.565 39.5588C38.83 40.8237 39.82 42.3088 40.535 44.0103C40.92 45.0003 41.195 46.0453 41.36 47.1419C37.3009 49.9955 32.4618 51.5306 27.5 51.5384ZM19.085 26.1009C18.6004 24.9914 18.3567 23.7916 18.37 22.5809C18.37 21.3744 18.59 20.1644 19.085 19.0644C19.58 17.9644 20.24 16.9778 21.065 16.1528C21.89 15.3278 22.88 14.6713 23.98 14.1763C25.08 13.6813 26.29 13.4612 27.5 13.4612C28.765 13.4612 29.92 13.6813 31.02 14.1763C32.12 14.6713 33.11 15.3312 33.935 16.1528C34.76 16.9778 35.42 17.9678 35.915 19.0644C36.41 20.1644 36.63 21.3744 36.63 22.5809C36.63 23.8459 36.41 25.0009 35.915 26.0975C35.4373 27.1812 34.7664 28.169 33.935 29.0125C33.0912 29.8426 32.1035 30.5124 31.02 30.9891C28.7472 31.9231 26.1978 31.9231 23.925 30.9891C22.8415 30.5124 21.8538 29.8426 21.01 29.0125C20.1775 28.1813 19.5226 27.193 19.085 26.1009ZM44.605 44.3403C44.605 44.2303 44.55 44.1753 44.55 44.0653C44.0091 42.3446 43.2118 40.7152 42.185 39.2322C41.1573 37.7382 39.8942 36.4206 38.445 35.3306C37.3382 34.498 36.1385 33.7966 34.87 33.2406C35.4471 32.8599 35.9818 32.4185 36.465 31.9241C37.285 31.1145 38.0051 30.2098 38.61 29.2291C39.8281 27.2278 40.4572 24.9236 40.425 22.5809C40.442 20.8468 40.1051 19.1274 39.435 17.5278C38.7734 15.9866 37.821 14.5872 36.63 13.4062C35.4408 12.2376 34.0411 11.3045 32.505 10.6562C30.9028 9.98729 29.1812 9.65162 27.445 9.66969C25.7086 9.6527 23.987 9.98955 22.385 10.6597C20.8356 11.3066 19.4326 12.2594 18.26 13.4612C17.0914 14.6492 16.1583 16.0477 15.51 17.5828C14.8399 19.1824 14.503 20.9018 14.52 22.6359C14.52 23.8459 14.685 25.0009 15.015 26.0975C15.345 27.2525 15.785 28.2975 16.39 29.2841C16.94 30.2741 17.71 31.1541 18.535 31.9791C19.03 32.4741 19.58 32.9106 20.185 33.2956C18.9126 33.8665 17.7125 34.5865 16.61 35.4406C15.18 36.5406 13.915 37.8572 12.87 39.2872C11.8328 40.764 11.0346 42.3951 10.505 44.1203C10.45 44.2303 10.45 44.3403 10.45 44.3953C6.105 39.9987 3.41 34.0656 3.41 27.4725C3.41 14.2313 14.245 3.40656 27.5 3.40656C40.755 3.40656 51.59 14.2313 51.59 27.4725C51.5828 33.7974 49.0714 39.862 44.605 44.3403Z" fill="white"/>
            </svg>
            <div className={`${!open ? "hidden": "justify-center flex flex-col p-1"}`}>
                <p className='text-green1'>Johan NZALI</p>
                <p className='text-sm'>jank092016@gmail.com</p>
            </div>
            </div>
        </div>
        
    </div>
  )
}

export default Menu