import React from 'react'
import {Link} from 'react-router-dom'
const Nav = () => {
  return (
    <nav className='flex h-28 shadow-md'>
        <div className=' flex flex-grow items-center'>
           <Link to='/'><h1 className='w-full ml-10 sm:ml-20 text-sm sm:text-3xl '>Where in the world?</h1></Link> 
        </div>
        <div className='flex justify-end items-center flex-grow'>
            <h4 className='mr-20 text-sm sm:text-3xl'>Dark Mode</h4>
        </div>
    </nav>
  )
}

export default Nav