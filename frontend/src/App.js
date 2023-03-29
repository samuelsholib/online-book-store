import React from 'react';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import "./main.css";


import Header from './component/Header';
import Home from './component/home/Home';
import LoginRegisterPage from './component/loginregister/LoginRegisterPage';
import Logout from './component/Logout';
import ProductsPage from './component/products/ProductsPage';
import CartPage from './component/cart/CartPage';
import AccountTabs from './component/account/AccountTabs';
import AdminPage from './component/admin/AdminPage';
import EditAccount from './component/account/EditAccount';
import OrderHistory from './component/account/OrderHistory';
import FilteredResults from './component/products/FilteredResults';
import Footer from "./component/Footer";

function App() {
  return (<>
    <BrowserRouter>
      <Header />
      <div className="page-content">
      <Routes>  
        <Route path='/'         element={<Home />}/>
        <Route path='/login'    element={<LoginRegisterPage />}/>
        <Route path='/logout'   element={<Logout />}/>
        <Route path='/products' element={<ProductsPage />}/>
        <Route path='/cart'     element={<CartPage />}/>
        <Route path='/account'  element={<AccountTabs />} />
        <Route path='/admin'    element={<AdminPage />}/>
        <Route path='/editAccount'    element={<EditAccount />}/>
        <Route path='/orderHistory'    element={<OrderHistory />}/>
        <Route path='/results/:type/:request' element = {<FilteredResults />} />
      </Routes>
      </div>
      <Footer />
    </BrowserRouter>
  </>);
}

export default App;
