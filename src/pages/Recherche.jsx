import React from 'react'
import Menu from '../elements/Menu'
import Head from '../elements/Head'
import Content1 from '../elements/Recherche/Content1'
import Content2 from '../elements/Recherche/Content2'

function Recherche() {
  return (
    <div className='flex flex-row relative bg-white w-screen'>
        <Menu />
        <div className='w-full flex flex-col'>
          <Head nom="Rechercher un job" arrow='hidden'/>
          <Content1 nom="Johan" nbJobs='14'/>
          <Content2 />
        </div>
    </div>
  )
}

export default Recherche