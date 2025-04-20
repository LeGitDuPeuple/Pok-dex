import { BrowserRouter, Routes, Route } from "react-router-dom";
import Pokedex from "./page/pokedex"
import Home from "./page/Home1"


function App() {
 

  return (
    <BrowserRouter>
    <Routes>
      <Route path="/" element={<Home/>} />
      <Route path="/pokedex" element={<Pokedex/>} />
      {/* Mettre une erreur 404 pour cette route */}
      <Route path="*" element={<Home/>} /> 


    </Routes>
  </BrowserRouter>
 
  )
}

export default App
