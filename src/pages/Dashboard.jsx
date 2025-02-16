import React from 'react'
import Head from '../elements/Head'
import Menu from '../elements/Menu'
import Content1 from '../elements/Dashboard/Content1'
import Content2 from '../elements/Dashboard/Content2'

function Dashboard() {
  return (
    <div className='flex flex-row bg-white w-screen' >
      <Menu />
      <div className='flex flex-col w-full bg-white h-full'>
        <Head nom="Tableau de bord" arrow="hidden"/>
        <Content1 />
        <Content2 />
      </div>
    </div>
  )
}

export default Dashboard