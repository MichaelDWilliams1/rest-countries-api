import Home from "./pages/Home";
import Nav from "./ components/Nav";
import {Route, Routes} from 'react-router-dom'
import Country from "./pages/countryPages/Country";
import { DataContext } from "./context/useData";
import { useContext } from "react";
function App() {

  const { darkMode } = useContext(DataContext)
 
  return (
    <section className={`${darkMode && 'dark'} h-screen w-screen`}>
      <Nav />
      <Routes>
      <Route exact path='/' element={<Home />}></Route>
      <Route exact path='/countryPages/:pageId' element={<Country />}></Route>
      </Routes>
      
    </section>
  );
}

export default App;
