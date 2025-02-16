import React from 'react'
import Head from '../elements/Head'
import Menu from '../elements/Menu'
import Content1 from '../elements/Profil/Content1'
import Content2 from '../elements/Profil/Content2'

function Profile() {
  return (
    <div className='flex flex-row bg-white w-screen'>
        <Menu />
        <div className='w-full flex flex-col h-full'>
          <Head nom="Mon Profil" arrow='hidden'/>
          <div className='flex flex-wrap md:mt-0 w-full h-full'>
            <Content1 />
            <Content2 />
          </div>
        </div>
    </div>
  )
}

export default Profile