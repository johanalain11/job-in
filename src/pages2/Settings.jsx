import React from 'react'
import Head from '../elements/Head'
import Menu2 from '../elements/Menu2'
import Content1 from '../elements2/Settings/Content1'

function Settings() {
  return (
    <div className='flex flex-row bg-white w-screen'>
        <Menu2 />
        <div className='w-full flex flex-col'>
          <Head nom="Paramètres" arrow='hidden'/>
          <Content1 nom="JANK Company" nbJobs='14'/>
        </div>
    </div>
  )
}

export default Settings