import React from 'react'
import Menu2 from '../elements/Menu2'
import Head from '../elements/Head'
import Content1 from '../elements2/Offres/Content1'
import Content2 from '../elements2/Offres/Content2'

function Postulats() {
  return (
    <div className='flex flex-row relative bg-white w-screen'>
        <Menu2 />
        <div className='w-[86%] flex flex-col h-full'>
          <Head nom="Offres de job" arrow='hidden'/>
          <Content1 nbJobs='14'/>
          <Content2 />
        </div>
    </div>
  )
}

export default Postulats