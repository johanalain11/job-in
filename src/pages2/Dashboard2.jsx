import React from 'react'
import Head from '../elements/Head'
import Menu2 from '../elements/Menu2'
import Board from '../elements2/Dashboard/board'
import Content1 from '../elements/Dashboard/Content1'

function Dashboard() {
  return (
    <div className='flex flex-row bg-white w-screen' >
      <Menu2 />
      <div className='flex flex-col w-full bg-white h-screen'>
        <Head nom="Tableau de bord" arrow='hidden'/>
        <Content1 nom='JANK Company' />
        <Board />
      </div>
    </div>
  )
}

export default Dashboard