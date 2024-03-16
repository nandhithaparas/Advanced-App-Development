import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Login from './components/Login'
import Register from './components/Register'
import NavigationBar from './components/NavigationBar'
import LandingPage from './components/LandingPage'

function App() {
  
  return (
   <div>
   <BrowserRouter>
   <Routes>
   <Route path="/" element={<Login/>}/>
   <Route path="/register" element={<Register/>}/>
   <Route path="/home" element={<LandingPage/>}/>
   <Route path="/nav" element={<NavigationBar/>}/>
  
   </Routes>
   </BrowserRouter>
   </div>
  )
}

export default App
