import React from 'react'
import { FaWhatsapp } from "react-icons/fa";
import { LiaLinkedin } from "react-icons/lia";
import { PiGlobe } from "react-icons/pi";
import { FiLink } from "react-icons/fi";
import { MdOutlineMailOutline } from "react-icons/md";
import { HiOutlineDevicePhoneMobile } from "react-icons/hi2";
import { IoLanguage } from "react-icons/io5";

function ImageComponent({inputString}) {
  const getImageForString = (stringValue) => {
    switch(stringValue.toLowerCase()) {
      case 'whatsapp':
        return <FaWhatsapp size={28}/>
      case 'linkedin':
        return <LiaLinkedin size={32}/>
      case 'website':
        return <PiGlobe size={28}/>
      case 'email':
        return <MdOutlineMailOutline size={28}/>
      case 'telephone':
        return <HiOutlineDevicePhoneMobile size={28}/>
      case 'langue':
        return <IoLanguage size={28}/>
      default:
        return <FiLink size={28}/>
    }
  }
  return (
    <div>
      {getImageForString(inputString)}
    </div>
  )
}

export default ImageComponent