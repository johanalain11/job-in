import React from 'react'
import Head from '../elements/Head'
import Menu2 from '../elements/Menu2'
import Content1 from '../elements2/Help/Content1'

function Help() {
  return (
    <div className='flex flex-row bg-white w-screen'>
        <Menu2 />
        <div className='w-full flex flex-col'>
          <Head nom="Aide JOB-in" arrow='hidden'/>
          <Content1 nom="JANK Company"/>
        </div>
    </div>
  )
}

export default Help