import React from 'react'
import Menu from '../elements/Menu'
import Head from '../elements/Head'
import Content3 from '../elements/Publications/Content3'
import Content4 from '../elements/Publications/Content4'

function Publication() {
  return (
    <div className='flex flex-row relative bg-white w-screen'>
        <Menu />
        <div className='w-full flex flex-col'>
          <Head nom="Publication" arrow="inlineblock"/>
          <Content3 />
          <Content4 />
        </div>
    </div>
  )
}

export default Publication