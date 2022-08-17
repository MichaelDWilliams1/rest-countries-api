import Home from "./pages/Home";
import Nav from "./ components/Nav";
import Spinner from "./ components/Spinner";
import {Route, Routes} from 'react-router-dom'
import Country from "./pages/countryPages/Country";
import { DataContext } from "./context/useData";
import { useContext } from "react";
function App() {

  const { darkMode, loading } = useContext(DataContext)
 
  return (
  <>
    { loading ?  <section className={`${darkMode && 'dark'} h-screen w-screen`}><Spinner /> </section> :
    <section className={`${darkMode && 'dark'} h-screen w-screen`}>
      <Nav />
      <Routes>
      <Route exact path='/' element={<Home />}></Route>
      <Route exact path='/countryPages/:pageId' element={<Country />}></Route>
      </Routes>
      
    </section>
    }
    </>
  );
}

export default App;
