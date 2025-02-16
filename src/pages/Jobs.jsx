import React from 'react'
import Menu from '../elements/Menu'
import Head from '../elements/Head'
import Content3 from '../elements/Recherche/Content3'

function Jobs() {
  return (
    <div>
    <div className='flex flex-row relative bg-white w-screen'>
        <Menu />
        <div className='w-full flex flex-col'>
          <Head nom="Desciption du job" arrow='inline-block'/>
          <Content3 />
        </div>
    </div>
    </div>
  )
}

export default Jobs