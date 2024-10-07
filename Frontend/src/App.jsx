

import './App.css'
import Header from './Header'
import Home from './Pages/Home'
import { useEffect } from 'react'
import About from './Pages/About'
import Services from './Pages/Services'
import Contact from './Pages/Contact'
import Projects from './Pages/Projects'
import Footer from './Components/Footer'
import ServiceDetail from './Pages/ServiceDetail'
import AOS from 'aos';
import 'aos/dist/aos.css';
 import {BrowserRouter ,Routes,Route} from 'react-router-dom'
import GetQuote from './Pages/GetQuote'

function App() {
  useEffect(() => {
    AOS.init({ duration: 1000 }); // Initialize AOS with a duration of 1000ms
  }, []);
return(

  <div className='bg-gradient-to-b  from-orange-50 to-orange-10'> 
  
  <BrowserRouter>
  <Header></Header>
  <Routes>
       
  <Route path='/' element={<Home></Home>}></Route>
    <Route path='/about' element={<About></About>}></Route>
    <Route path='/services' element={<Services></Services>}></Route>
    <Route path="/services/:serviceId" element={<ServiceDetail />} />
    <Route path='/projects' element={<Projects></Projects>}></Route>
    <Route path='/contact' element={<Contact></Contact>}></Route>
    <Route path='/getquote' element={<GetQuote></GetQuote>}></Route>
  </Routes>
  <Footer></Footer>
  </BrowserRouter>


  </div>
)
}

export default App
