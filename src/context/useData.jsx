import { createContext, useState, useEffect } from "react";

const DataContext = createContext();

const DataProvider = ({children}) => {
    const [countries, setCountries] = useState([])
    const [region, setRegion] = useState('all')
    const [userRegion, setUserRegion] = useState('')
    const [darkMode, setDarkMode] = useState(false)
    const [loading, setLoading] = useState(true)
    useEffect(() => {
        const getCountries = async() => {
            const res = await fetch(
                `https://restcountries.com/v2/${region}/${userRegion}`
            )
            const data = await res.json();
            setCountries(data)
            setLoading(false)
        }
      getCountries()
    }, [region, userRegion])

    const filterCountries = (e) => {
console.log(e.target.innerHTML)
setRegion('region')
setUserRegion(e.target.innerHTML)

    }

    const reset = () =>{
        setRegion('all')
        setUserRegion('')
    }

    const toggleDarkMode = () => {
setDarkMode(prev => !prev)
    }

return (
    <DataContext.Provider value={{ countries, filterCountries, reset, toggleDarkMode, darkMode, loading }}>
        {children}
    </DataContext.Provider>
)
};

export { DataProvider, DataContext };