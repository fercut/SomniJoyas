import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import NavBar from './components/NavBar';
import Rings from './Screens/Rings';
import Earrings from './Screens/Earrings';
import Chokers from './Screens/Chokers';
import Bracelets from './Screens/Bracelets';
import Chains from './Screens/Chains';
import Pendants from './Screens/Pendants';
import Home from './Screens/Home';
import Contact from './Screens/Contact';
import ShoppingCart from './Screens/ShoppingCart';
import Search from './components/Search';
import Signin from './Screens/Signin';
import Login from './Screens/Login';
import './style/App.css';

const App = () => {
  const handleSearch = (searchTerm) => {
    console.log('Realizar búsqueda con término:', searchTerm);
  };

  return (
    <Router>
      <NavBar />
      <Search onSearch={handleSearch} />
      <div className="content">
        <Routes>
          <Route path="home" element={<Home />} />
          <Route path="/" element={<Navigate to="/home" />} />
          <Route path="rings" element={<Rings />} />
          <Route path="earrings" element={<Earrings />} />
          <Route path="chokers" element={<Chokers />} />
          <Route path="bracelets" element={<Bracelets />} />
          <Route path="chains" element={<Chains />} />
          <Route path="pendants" element={<Pendants />} />
          <Route path="shoppingCart" element={<ShoppingCart />} />
          <Route path="contact" element={<Contact />} />
          <Route path="signin" element={<Signin />} />
          <Route path="login" element={<Login />} />
        </Routes>
      </div>
    </Router>
    
  );
};

export default App;
