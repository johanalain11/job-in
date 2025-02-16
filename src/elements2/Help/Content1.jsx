import React from 'react'

function Content1(props) {
  return (
    <div className='p-3 md:p-5 xl:px-9 pb-5 divide-y divide-gray3 space-y-3 max-w-screen-lg'>
      <div>
        <p className='text-xl'>Hello {props.nom},</p>
        <p className='text-gray1'>Consultez l'aide pour faciliter votre recherche de job !</p>
      </div>
      <div></div>
    </div>
  )
}

export default Content1