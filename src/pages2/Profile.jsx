import React from 'react'
import Head from '../elements/Head'
import Menu2 from '../elements/Menu2'
import Content1 from '../elements2/Profil/Content1'
import Content2 from '../elements2/Profil/Content2'

function Profile() {
  return (
    <div className='flex flex-row bg-white w-screen'>
        <Menu2 />
        <div className='w-full flex flex-col'>
          <Head nom="Profil de l'entreprise" arrow='hidden'/>
          <div className='flex flex-wrap md:mt-0'>
            <Content1  className='w-[55%]'/>
            <Content2 />
          </div>
        </div>
    </div>
  )
}

export default Profile