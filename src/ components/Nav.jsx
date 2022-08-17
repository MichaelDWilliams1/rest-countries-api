import React, { useContext } from 'react'
import {Link} from 'react-router-dom'
import { DataContext } from '../context/useData'
const Nav = () => {
  const {reset, toggleDarkMode} = useContext(DataContext)
  return (
    <nav className='flex h-28 shadow-md dark:bg-slate-700'>
        <div className=' flex flex-grow items-center'>
           <Link to='/'><h1 onClick={() => reset()} className='w-full ml-10 sm:ml-20 text-sm sm:text-3xl dark:text-gray-50'>Where in the world?</h1></Link> 
        </div>
        <div className='flex justify-end items-center flex-grow'>
        <i onClick={toggleDarkMode} className="cursor-pointer text-sm sm:text-3xl uil uil-moon dark:text-gray-50"></i>
            <h4 onClick={toggleDarkMode} className='cursor-pointer ml-2 mr-20 text-sm sm:text-3xl dark:text-gray-50'>Dark Mode</h4>
        </div>
    </nav>
  )
}

export default Nav