import React from 'react'

const Content1 = (props) => {
  return (
    <div className='p-2 md:p-5 pb-5 w-full'>
      <p className='text-xl'>Hello {props.nom},</p>
      <p className='text-gray1'>Heureux de vous revoir parmi nous!</p>
    </div>
  )
}
export default Content1
