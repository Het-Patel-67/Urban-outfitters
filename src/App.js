import './App.css';
import { createContext, useState, useEffect } from 'react';
import { Routes, Route } from "react-router-dom";
import { Header } from './components/Header';
import { Footer } from './components/Footer';
import ScrollToTop from './components/Scrolltop';
import Home from './pages/Home.jsx';
import axios from 'axios';
import Product from './pages/Product.jsx';
import Shoppingbag from './pages/Shoppingbag.jsx';
import Orders from './pages/Orders.jsx';
import Pages from './pages/Pages.jsx';
import News from './pages/News.jsx';
import Aboutus from './pages/Aboutus.jsx';
import Contactus from './pages/Contactus.jsx';
import Store from './pages/Store.jsx';
import Login from './pages/Login.jsx';
import Register from './pages/Register.jsx';
import Profile from './pages/Profile.jsx';

export const ProductContext = createContext();
function App() {
  const [products, setProducts] = useState([]);
  const [items,setItems] = useState([]);
  useEffect(()=>{
    axios.get('http://localhost:5000/products')
    .then(response => {
      setProducts(response.data);
    })
    .catch(error => {
      console.error('There was an error fetching the items!', error);
    });
  },[]);

  return (
    
      <ProductContext.Provider value={{ products, setProducts }}>
        <Header />
        <ScrollToTop />
        <Routes>
          <Route path="/" element={ <Home /> } />
          <Route path='/:category' element={<Product items={items} setItems={setItems}/>} />
          <Route path='/Shoppingbag' element={<Shoppingbag />} />
          <Route path="/Orders" element={<Orders/>} />
          <Route path="/Aboutus" element={<Aboutus />}/>
          <Route path="/Contactus" element={<Contactus />}/>
          <Route path="/News" element={<News />}/>
          <Route path="/Pages" element={<Pages />}/>
          <Route path="/Store" element={<Store />}/>
          <Route path='/Login' element={<Login/>}/>
          <Route path='/Register' element={<Register />}/>
          <Route path='/Profile' element={<Profile/>}/>
          </Routes>
        <Footer />
      </ProductContext.Provider>
    
  );
}

export default App;
