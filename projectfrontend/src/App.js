import './App.css';
import { Routes, Route } from "react-router-dom"
import NavBar from './Components/NavBar'
import Home from './Components/Home'
import About from './Components/AboutUs'
import Contactus from "./Components/ContactUs"
import Login from './Components/Login';
import SignUp from './Components/SignUp';
import Products from './Components/Products'
import Footer from './Components/Footer';
import AdminDashboard from './Components/AdminDashboard';
import SigninAdminProtectedRoute from './ProtectedRoutes/SigninAdminProtectedRoute';
import Admin from './Components/Admin';
import AdminSignin from './Components/AdminSignin'


function App() {
  return (
    <>
      <NavBar />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/products' element={<Products />} />
        <Route path='/about' element={<About />} />
        <Route path='/contactus' element={<Contactus />} />
        <Route path='/login' element={<Login />} />
        <Route path='/signup' element={<SignUp />} />
        <Route path='/admin/signin' element={<AdminSignin />} />
        <Route path='/admindashboard' element={<AdminDashboard />} />

        <Route
          path="/admin"
          element={
            <SigninAdminProtectedRoute>
              <AdminDashboard />
            </SigninAdminProtectedRoute>
          }
        >
        </Route>
      </Routes>
      <Footer />
    </>
  );
}

export default App;
