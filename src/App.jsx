import { BrowserRouter, NavLink, Route, Routes } from "react-router-dom"
import Homepage from "./Components/Homepage"
import RecipePage from "./Components/RecipePage"

function App() {

  return (
    <>
    <BrowserRouter>

      <nav>
        <NavLink to='/'>Home</NavLink>
        <NavLink to='/recipe'>Recipe</NavLink>
      </nav>
      <Routes>
        <Route path='/'element ={<Homepage />} />
        <Route path='/recipe'element ={<RecipePage />} />
      </Routes>
      </BrowserRouter>
      
    </>
  )

}

export default App