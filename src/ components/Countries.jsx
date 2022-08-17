import React, {useContext} from 'react'
import { DataContext } from '../context/useData'
import { Link } from 'react-router-dom'
const Countries = () => {

    const {countries} = useContext(DataContext)


  return (
    <>
  {
    countries.map(country =>  <Link to={`/countryPages/${country.name}`}><section id={country?.numericCode} className='shadow-md flex flex-col h-80 w-80 m-3'>
    <div className='h-2/4 full'>
    <img className='h-full w-full object-cover' src={country?.flag}/>
    </div>
    <div className='h-2/4 flex flex-col ml-6'>
        <h2 className='font-bold text-xl h-2/5 pt-4'>{country?.name}</h2>
    <p className='font-bold text-sm'>Population: <span className='font-normal'>{country?.population}</span></p>
    <p className='font-bold text-sm'>Region: <span className='font-normal'>{country?.region}</span></p>
    <p className='font-bold text-sm'>Capital: <span className='font-normal'>{country?.capital}</span></p>
    </div>
</section></Link>)
  } 
  </>
  )
}

export default Countries