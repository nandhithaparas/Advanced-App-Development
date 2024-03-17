import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Login from './components/Main/Login'
import Register from './components/Main/Register'
import Home from './components/Home'
import NavigationBar from './components/Main/NavigationBar'
import HomePage from './components/Main/HomePage'
import Footer from './components/Main/Footer'
import Contents from './components/Main/Contents'
import Corousel from './components/Main/Corousel'
import Products from './components/Main/Products'

function App() {
  
  return (
   <div>
   <BrowserRouter>
   <Routes>
   <Route path="/" element={<Login/>}/>
   <Route path="/register" element={<Register/>}/>
   <Route path="/h" element={<Home/>}/>
   <Route path="/home" element={<HomePage/>}/>
   <Route path="/nav" element={<NavigationBar/>}/>
   <Route path="/footer" element={<Footer/>}/>
   <Route path="/con" element={<Contents/>}/>
   <Route path="/cor" element={<Corousel/>}/>
   <Route path="/product" element={<Products/>}/>
   </Routes>
   </BrowserRouter>
   </div>
  )
}

export default App
