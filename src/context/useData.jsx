import { createContext, useState, useEffect } from "react";

const DataContext = createContext();

const DataProvider = ({children}) => {
    const [countries, setCountries] = useState([])

    useEffect(() => {
        const getCountries = async() => {
            const res = await fetch(
                `https://restcountries.com/v2/all`
            )
            const data = await res.json();
            setCountries(data)
        }
      getCountries()
    }, [])

    console.log(countries[0])

return (
    <DataContext.Provider value={{ countries }}>
        {children}
    </DataContext.Provider>
)
};

export { DataProvider, DataContext };