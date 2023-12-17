import React from 'react'
import { IoIosContacts } from "react-icons/io";

const NoContactFound = () => {
  return ( 
    <div className='flex justify-center
    items-center h-[80vh] gap-4'>
        <div>
        <IoIosContacts className="h-20 w-20 text-blue-500"/>
        </div>
      
      <h3 className='text-white text-2xl font-semibold'>Contact Not Found</h3>
    </div>
  )
}

export default NoContactFound
