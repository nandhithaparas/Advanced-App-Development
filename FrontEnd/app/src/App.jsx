import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Login from './components/Main/Login'
import Register from './components/Main/Register'
import HomePage from './components/Main/HomePage'
import Products from './components/Main/Products'
import Profile from './components/Dashboard/Profile'
import Cart from './components/Updates/Cart'
import ReactVirtualizedTable from './components/Dashboard/Table'
import Customize from './components/Updates/Customize'
import NavigationBar from './components/Main/NavigationBar'


function App() {
  
  return (
    <div>
    <BrowserRouter>
   <Routes>
   <Route path="/" element={<Login/>}/>
   <Route path="/register" element={<Register/>}/>
   <Route path="/home" element={<HomePage/>}/>
   <Route path="/product" element={<Products/>}/>
   <Route path="/cart" element={<Cart/>}/>
   <Route path="/profile" element={<Profile/>}/>
   <Route path="/cus" element={<><NavigationBar/><Customize/></>} />
   </Routes>
   </BrowserRouter>
   </div>
  )
}

export default App
