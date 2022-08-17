import React, { useContext } from 'react'
import Nav from '../ components/Nav'
import Countries from '../ components/Countries'
import { DataContext } from '../context/useData'
const Home = () => {
    const {countries} = useContext(DataContext)
    console.log(countries)
  return (
    <>
    <header className='w-full h-32 flex flex-col sm:flex-row'>
        <form className='w-full sm:w-1/2 h-full flex items-center'>
            <div className='h-1/2 w-3/4 sm:w-80 shadow-md ml-20 flex items-center'>
        <i class="uil uil-search pl-4 text-gray-400"></i>
            <input
            className='pl-4'
            type='text'
            placeholder='Search for a country...'
            id='search'
            />
            </div>
        </form>
        <div className='w-full sm:w-1/2 h-full flex  sm:justify-end items-center'>
            <div className='shadow-md ml-20 sm:mr-20 w-48 h-1/2 flex items-center'>
                <p className='ml-4 text-gray-600'>Filter by region</p> <i class="text-gray-600 ml-8 uil uil-angle-down"></i>
            </div>
        </div>
    </header>
    <main className='h-auto w-screen flex flex-wrap justify-center'>
       <Countries />
    </main>
    </>
  )
}

export default Home