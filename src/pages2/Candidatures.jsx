import React from 'react'
import Menu2 from '../elements/Menu2'
import Head from '../elements/Head'
import Content1 from '../elements2/Candidatures/Content1'
import Content2 from '../elements2/Candidatures/Content2'

function Postulats() {
  return (
    <div className='flex flex-row relative bg-white w-screen'>
        <Menu2 />
        <div className='w-full flex flex-col'>
          <Head nom="Candidatures" arrow='hidden'/>
          <Content1 nom="Johan" nbJobs='14'/>
          <Content2 />
        </div>
    </div>
  )
}

export default Postulats