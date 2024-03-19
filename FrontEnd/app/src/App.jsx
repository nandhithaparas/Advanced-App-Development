import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Login from './components/Main/Login'
import Register from './components/Main/Register'
import NavigationBar from './components/Main/NavigationBar'
import HomePage from './components/Main/HomePage'
import Products from './components/Main/Products'
import Sidebarr from './components/Dashboard/Sidebarr'
import Menu from './components/Main/Menu'
import Profile from './components/Dashboard/Profile'
import Cart from './components/Updates/Cart'
import ReactVirtualizedTable from './components/Dashboard/Table'
import Dashboard from './components/Dashboard/Dashboard'

function App() {
  
  return (
   <div>
   <BrowserRouter>
   <Routes>
   <Route path="/" element={<Login/>}/>
   <Route path="/register" element={<Register/>}/>
   <Route path="/home" element={<HomePage/>}/>
   <Route path="/nav" element={<NavigationBar/>}/>
   <Route path="/product" element={<Products/>}/>
   <Route path="/side" element={<Sidebarr/>}/>
   <Route path="/cart" element={<Cart/>}/>
   <Route path="/menu" element={<Menu/>}/>
   <Route path="/profile" element={<Profile/>}/>
   <Route path="/table" element={<ReactVirtualizedTable/>}/>
   <Route path="/dash" element={<Dashboard/>}/>
  
   </Routes>
   </BrowserRouter>
   </div>
  )
}

export default App
