import React, { useContext } from 'react'
import { DataContext } from '../context/useData'
const FilterRegion = () => {
    const {countries, filterCountries} = useContext(DataContext)


  return (
    <section className='absolute bg-white w-full h-auto top-20 flex flex-col dark:bg-slate-700 dark:text-gray-50 cursor-pointer'>
        <h4 onClick={(e)=>filterCountries(e)} className='ml-4'>Africa</h4>
        <h4 onClick={(e)=>filterCountries(e)} className='ml-4'>Americas</h4>
        <h4 onClick={(e)=>filterCountries(e)} className='ml-4'>Asia</h4>
        <h4 onClick={(e)=>filterCountries(e)} className='ml-4'>Europe</h4>
        <h4 onClick={(e)=>filterCountries(e)} className='ml-4'>Oceania</h4>
    </section>
  )
}

export default FilterRegion