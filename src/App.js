import './App.css';
import Header from './components/Header.js/header';
import Categories from './components/Categories/categories'
import Footer from './components/Footer/footer';
import Products from './components/Products/products';
import Cart from './components/Cart/cart';

function App() {
  return (
    <>
   <Header/>
   <Categories/>
   <Products/>
   <Cart/>
    <Footer/>
    </>
  );
}

export default App;
