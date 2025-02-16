import React from 'react'
import Menu from '../elements/Menu'
import Head from '../elements/Head'
import Content1 from '../elements/Publications/Content1'
import Content2 from '../elements/Publications/Content2'

function Publications() {
  return (
    <div className='flex flex-row relative bg-white w-screen justify-self-center'>
        <Menu />
        <div className='w-full flex flex-col max-w-screen-lg'>
          <Head nom="Publications" arrow="hidden"/>
          <Content1 />
          <Content2 />
        </div>
    </div>
  )
}

export default Publications