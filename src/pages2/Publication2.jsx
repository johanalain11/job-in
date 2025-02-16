import React from 'react'
import Menu2 from '../elements/Menu2'
import Head from '../elements/Head'
import Content1 from '../elements/Publications/Content1'
import Content2 from '../elements/Publications/Content2'

function Publication() {
  return (
    <div className='flex flex-row relative bg-white w-screen'>
        <Menu2 />
        <div className='w-full flex flex-col'>
          <Head nom="Publication" arrow="inlineblock"/>
          <Content1 />
          <Content2 />
        </div>
    </div>
  )
}

export default Publication