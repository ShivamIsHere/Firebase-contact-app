import React from 'react'
import { IoLogoFirebase } from "react-icons/io5";

const NavBar = () => {
  return (
    <div className='flex items-center justify-center h-[60px] bg-white my-4 rounded-lg gap-2 text-xl font-medium' >
    
        <IoLogoFirebase className='h-12 w-12 text-orange'/>
        <h1>Firebase Contact App</h1>
    
    </div>
  )
}

export default NavBar
