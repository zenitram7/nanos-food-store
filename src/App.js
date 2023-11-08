import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Navbar from './components/Navbar';
import Shop from '../src/pages/Shop/Shop';
import Cart
  from '../src/pages/Cart/Cart';
import { ShopContextProvider } from './context/ShopContext';
import Footer from './components/Footer';
import ProductDisplay from './pages/ProductDisplay/ProductDisplay';


function App() {
  return (
    <div className="App">
      <ShopContextProvider>
        <Router>
          <Navbar />
          <Routes>
            <Route path='/' element={<Shop />} />
            <Route path='/cart' element={<Cart />} />
            <Route path='/product/:productId' element={<ProductDisplay />} />
          </Routes>
          <Footer />
        </Router>
      </ShopContextProvider>
    </div>
  );
}

export default App;
