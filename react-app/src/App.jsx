import { BrowserRouter, Routes, Route } from 'react-router-dom'
import './App.css'
import Navigation from "./components/Navbar"
import Home from './Pages/Home'
import About from './Pages/About'
import NotFound from './Pages/Not-found'
import Service from './Pages/Service'
import Contact from './Pages/Contact'
import Register from './Pages/Auth/Register'
import Login from './Pages/Auth/Login.jsx'
// import Dashboard from './Pages/user/Dashboard'
import Dashboard from './User/Dashboard'
import Private from './routes/Private'
import Products from './Admin/AdminPages/Products'
import Category from './Admin/AdminPages/Category'
import Users from './Admin/AdminPages/Users'
import { ToastContainer } from 'react-toastify';
import AdminDashboard from './Admin/AdminDashboard'
import AdminRoute from './routes/Adminroute'
import Order from './User/userPages/Order'
import Profile from './User/userPages/Profile'

function App() {
  return (
    <div>

      <BrowserRouter>
        <Navigation />
        <ToastContainer />
        <Routes>

          <Route path='/' element={<Home />} />


          {/* User-Routes */}
          <Route path='/dashboard/user' element={<Private />} >
            <Route index element={<Dashboard />} />
            <Route path='order' element={<Order />} />
            <Route path='profile' element={<Profile />} />
          </Route>

          {/* Admin-Routes */}
          <Route path='/dashboard/admin' element={<AdminRoute />}>
            <Route index element={<AdminDashboard />} />
            <Route path='create-category' element={<Category />} />
            <Route path='products' element={<Products />} />
            <Route path='users' element={<Users />} />
          </Route>


          {/* Web-Routes */}
          <Route path='/about' element={<About />} />
          <Route path='/service' element={<Service />} />
          <Route path='/contact' element={<Contact />} />
          <Route path='/register' element={<Register />} />
          <Route path='/login' element={<Login />} />
          <Route path='' element={"Cart"} />



          <Route path='*' element={<NotFound />} />

        </Routes>

      </BrowserRouter>
    </div >
  )
}

export default App
