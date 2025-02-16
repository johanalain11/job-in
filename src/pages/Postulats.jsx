import React from 'react'
import Menu from '../elements/Menu'
import Head from '../elements/Head'
import Content1 from '../elements/Postulats/Content1'
import Content2 from '../elements/Postulats/Content2'

function Postulats() {
  return (
    <div className='flex flex-row relative bg-white w-screen'>
        <Menu />
        <div className='w-full flex flex-col'>
          <Head nom="Postulats" arrow='hidden'/>
          <Content1 nom="Johan" nbJobs='14'/>
          <Content2 />
        </div>
    </div>
  )
}

export default Postulats