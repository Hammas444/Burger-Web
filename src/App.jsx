
import { Routes,Route } from 'react-router-dom'
import 'bootstrap/dist/css/bootstrap.min.css'
import Login from './Pages/Login'
import Home from './Pages/Home'
import About from './Pages/About'
import Meals from './Pages/Meals'
import TableReserve from './Pages/TableReserve'
import Navbar from './Components/Navbar'

function App() {

  return (
    <>
    <Navbar/>
<Routes>

<Route path='/' element={<Login/>}/>
<Route path='/home' element={<Home/>}/>
<Route path='/About' element={<About/>}/>
<Route path='/meals' element={<Meals/>}/>
<Route path='/TableReservation' element={<TableReserve/>}/>

</Routes>



    </>
  )
}

export default App
