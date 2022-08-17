import React, { useContext, useState } from 'react'
import Nav from '../ components/Nav'
import Countries from '../ components/Countries'
import FilterRegion from '../ components/FilterRegion'
import { DataContext } from '../context/useData'
const Home = () => {
    const [filterModal, setFilterModal] = useState(false)
    const [userSearch, setUserSearch] = useState({
        country: null
    })
    const {countries} = useContext(DataContext)
    console.log(countries)

    const onChange = (e) => {
        e.preventDefault();
        setUserSearch(prev => ({
            ...prev, 
            country: e.target.value
        }))
    }
  return (
    <>
    <header className='dark:bg-slate-800  w-full h-32 flex flex-col sm:flex-row'>
        <form className='w-full sm:w-1/2 h-full flex items-center'>
            <div className='h-1/2 w-3/4 sm:w-80 shadow-3xl ml-20 flex items-center dark:bg-slate-700 dark:shadow-dk '>
        <i className="uil uil-search pl-4 text-gray-400"></i>
            <input
            className='pl-4 w-full dark:bg-slate-700 '
            type='text'
            placeholder='Search for a country...'
            id='search'
            value={userSearch.country}
            onChange={onChange}
            />
            </div>
        </form>
        <div className='w-full sm:w-1/2 h-full flex  sm:justify-end items-center'>
            <div onClick={()=> setFilterModal(prev => !prev)} className='cursor-pointer relative shadow-3xl ml-20 sm:mr-20 w-48 h-1/2 flex items-center dark:bg-slate-700 dark:shadow-dk'>
                <p className='ml-4 text-gray-600 dark:text-gray-50'>Filter by region</p> <i className="text-gray-600 ml-8 uil uil-angle-down dark:text-gray-50"></i>
                    {filterModal && <FilterRegion />}
            </div>
        </div>
    </header>
    <main className='h-auto w-screen flex flex-wrap justify-center dark:bg-slate-800 dark:text-gray-50'>
       <Countries userSearch={userSearch.country} />
    </main>
    </>
  )
}

export default Home