import { BrowserRouter, Route, Routes } from "react-router-dom"
import NavBar from "./components/NavBar"
import Home from "./pages/Home/Home"
import Footer from "./components/Footer"
import Store from "./pages/Store/Store"
import Admin from "./pages/Admin/Admin"
import Error from "./pages/Error/Error"
import Login from "./pages/Login/Login"
import Registro from "./pages/Login/Registro"

function App() {

  return (
    <BrowserRouter>
    <NavBar/>
    <Routes>
      <Route path="/" element={ <Home/> } />
      <Route path="/tienda" element={ <Store/> } />
      <Route path="/admin" element={ <Admin/> } />
      <Route path="/login" element={ <Login/> } />
      <Route path="/registro" element={ <Registro/> } />
      <Route path="/*" element={ <Error/> } />
    </Routes>
    <Footer/>
    </BrowserRouter>
  )
}

export default App