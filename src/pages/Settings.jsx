import React from 'react'
import Head from '../elements/Head'
import Menu from '../elements/Menu'
import Content1 from '../elements/Settings/Content1'

function Settings() {
  return (
    <div className='flex flex-row bg-white w-screen'>
        <Menu />
        <div className='w-full flex flex-col'>
          <Head nom="Paramètres" arrow='hidden'/>
          <Content1 nom="Johan" nbJobs='14'/>
        </div>
    </div>
  )
}

export default Settings