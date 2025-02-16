import React from 'react'
import { RiSearchLine } from "react-icons/ri";

function Content1(props) {
  return (
    <div className='p-2 md:p-5 pb-2 flex justify-between'>
      <p className='text-gray1 text-2xl '>Total des candidatures: <span className='font-bold text-black'>{props.nbJobs}</span></p>
      <div className='text-gray1 border border-gray3 p-1 flex space-x-2'>
        <RiSearchLine size={30}/>
        <input type="text" placeholder='chercher une candidature' />
      </div>
    </div>
  )
}

export default Content1