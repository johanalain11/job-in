import React from 'react'

function Content1(props) {
  return (
    <div className='p-2 md:p-5 pb-5'>
      <p className='text-xl'>Hello {props.nom},</p>
      <p className='text-gray1'>Vous avez  déjà postulé à <span className='font-bold text-black'>{props.nbJobs}</span> jobs chez nous !</p>
    </div>
  )
}

export default Content1