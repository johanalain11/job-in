import React from 'react'
import { MdAdd } from "react-icons/md";

function Content1(props) {
  return (
    <div className='p-2 md:p-3 flex justify-between max-w-screen-lg'>
      <p className='text-2xl pt-2'>Jobs ({props.nbJobs})</p>
      <div className='text-white bg-green2 border p-2 mx-3 flex space-x-2'>
        <MdAdd />
        <input type="submit" value="Poster un job"/>
      </div>
    </div>
  )
}

export default Content1