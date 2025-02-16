import React from 'react'
import Head from '../elements/Head'
import Menu from '../elements/Menu'
import Content1 from '../elements/Help/Content1'

function Help() {
  return (
    <div className='flex flex-row bg-white w-screen'>
        <Menu />
        <div className='w-full flex flex-col'>
          <Head nom="Aide JOB-in" arrow='hidden'/>
          <Content1 nom="Johan"/>
        </div>
    </div>
  )
}

export default Help