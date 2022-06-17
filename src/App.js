import './App.css';
import Header from './components/Header.js/header';
import Categories from './components/Categories/categories'
import Footer from './components/Footer/footer';
import Products from './components/Products/products';
import { Route ,Routes } from 'react-router-dom';
import ProductDetails from "./components/ProductDetails"

function App() {
  return (
    <>
   <Header/>
   <Categories/>
   <Products/>
    <Footer/>
    </>
  );
}

export default App;
