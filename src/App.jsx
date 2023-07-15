
import './App.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import Home from './pages/Home';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Maquillaje from './pages/Maquillaje';
import Ropa from './pages/Ropa';
import Accesorios from './pages/Accesorios';
import Users from './pages/Users';
import Blog from './pages/Blog';
import PagesNotFound from './pages/PagesNotFound';
import MenuHeader from './pages/MenuHeader';
import Footer from './pages/Footer';

function App() {
  return (
    <div>
    
    <Router>
    <MenuHeader/>
      <Routes>
          <Route  path="/" element={<Home />} />
          <Route path="/Maquillaje" element={<Maquillaje />} />
          <Route path="/Ropa" element={<Ropa />} />
          <Route path="/Accesorios" element={<Accesorios />} />
          <Route path="/Users" element ={<Users name='Anny Monroe' />} />
          <Route path="/Blog" element={<Blog/>} />
          <Route  element={<PagesNotFound />} />
      </Routes>
    </Router>
    <Footer/>
    </div>
  )
}

export default App
