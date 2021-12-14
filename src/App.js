import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Navbar from './components/Navbar';
import Consulting from './components/pages/Consulting';
import Contact from './components/pages/Contact';
import Home from './components/pages/Home';
import Marketing from './components/pages/Marketing';
import Products from './components/pages/Products';
import Services from './components/pages/Services';
import SignUp from './components/pages/SignUp';
import './App.css';

function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path='/' exact element={<Home />} />
        <Route path='/contact' element={<Contact />} />
        <Route path='/consulting' element={<Consulting />} />
        <Route path='/marketing' element={<Marketing />} />
        <Route path='/products' element={<Products />} />
        <Route path='/services' element={<Services />} />
        <Route path='/signup' element={<SignUp />} />
      </Routes>
    </Router>
  );
}

export default App;
