import React from 'react';
import { BrowserRouter as Router , Routes , Route } from 'react-router-dom';
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Home from "./pages/Home";
import Disclaimer from './pages/Disclaimer';
import About from "./pages/About";
import ReturnPolicy from './pages/ReturnPolicy';
import Register from './pages/Register';
import Login from './pages/Login';
import ProductDetail from "./pages/ProductDetail";
import Shop from "./pages/Shop";
import Cart from "./pages/Cart";
import Checkout from "./pages/Checkout";
import OrderSuccess from './pages/OrderSuccess';
import Profile from './pages/Profile';
import AdminDashboard from './admin/AdminDashboard';
import AddProduct from './admin/AddProduct';
import AdminProducts from './admin/AdminProducts';
import EditProduct from './admin/EditProduct';
import AdminOrders from './admin/AdminOrders';
import AdminUsers from './admin/AdminUsers';


const App = () => {
  return (
    <Router>
      <Navbar />
         <Routes>
          <Route path="/" element={<Home />}/>
          <Route path="/shop" element={<Shop />}/>
          <Route path="/cart" element={<Cart />}/>
          <Route path="/checkout" element={<Checkout />}/>
          <Route path="/ordersuccess" element={<OrderSuccess />}/>
          <Route path="/about" element={<About />}/>
          <Route path="/profile" element={<Profile />}/>
          <Route path="/return" element={<ReturnPolicy />}/>
          <Route path="/disclaimer" element={<Disclaimer />}/>
           <Route path="/login" element={<Login />}/>
          <Route path="/register" element={<Register />}/>
          <Route path="/products/:id" element={<ProductDetail />}/>
          <Route path="/admin" element={<AdminDashboard />} />
          <Route path="/admin/add-product" element={<AddProduct />} />
          <Route path="/admin/products" element={<AdminProducts />} />
          <Route path="/admin/edit-product/:id" element={<EditProduct />} />
          <Route path="/admin/orders" element={<AdminOrders />} />
          <Route path="/admin/users" element={<AdminUsers />} />

         </Routes>
         <Footer />
    </Router>
  )
}

export default App