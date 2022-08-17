import Home from "./pages/Home";
import Nav from "./ components/Nav";
import {Route, Routes} from 'react-router-dom'
import Country from "./pages/countryPages/Country";
function App() {
  return (
    <section className="h-screen w-full w-screen">
      <Nav />
      <Routes>
      <Route exact path='/' element={<Home />}></Route>
      <Route exact path='/countryPages/:pageId' element={<Country />}></Route>
      </Routes>
      
    </section>
  );
}

export default App;
