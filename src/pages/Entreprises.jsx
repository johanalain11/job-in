import React from 'react'
import Menu from '../elements/Menu'
import Head from '../elements/Head'
import Content1 from '../elements/Entreprises/Content1'
import Content2 from '../elements/Entreprises/Content2'

const Entreprises = () => {
  return (
    <div className='flex flex-row bg-white w-screen'>
        <Menu />
        <div className='w-full flex flex-col'>
          <Head nom="Entreprises" arrow='hidden'/>
          <Content1 />
          <Content2 />
        </div>
    </div>
  )
}

export default Entreprises