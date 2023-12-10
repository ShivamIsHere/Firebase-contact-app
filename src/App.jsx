import React from 'react'
import NavBar from './components/NavBar'
import {FiSearch} from "react-icons/fi";
import {AiFillPlusCircle} from "react-icons/ai";

const App = () => {
  return (
    <div className='max-w-[370px] mx-auto px-4 '>
      <NavBar/>
      <div className='flex gap-2'>
      <div className=' relative items-center flex flex-grow '>
        <FiSearch className='text-white text-3xl absolute ml-1'/>
        <input type='text' className=' flex-grow  rounded-md border border-white bg-transparent h-10 text-white pl-9'/>
      </div>
      
        <AiFillPlusCircle className='text-5xl text-white cursor-pointer'/>

      </div>
    </div>
  )
}

export default App
