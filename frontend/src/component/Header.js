import React, { useState } from "react";
import {useNavigate, Link} from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import {signout} from '../slices/login/LoginSlice';
import Login from "../component/loginregister/Login";
import Register from "../component/loginregister/Register";
import {Navbar, Container, Nav, Badge} from 'react-bootstrap';
import {FiShoppingCart} from 'react-icons/fi';
import { emptyCart } from "../slices/cart/CartSlice";
import templogo from "./assets/images/bookworm_logo.svg";

function Header() {
  const user = useSelector((state)=>state.login.value.roleType);
  const name = useSelector((state)=>state.login.value.firstName);
  const cartCount = useSelector((state) => state.cart.value.count);
  const dispatch = useDispatch();
  const [showLogin, setShowLogin] = useState(false);
  const [showRegister, setShowRegister] = useState(false);
  

  const navigate = useNavigate();

  function logout(){
    dispatch(signout()); 
    dispatch(emptyCart());
    navigate('/');
  }

  return(
    <>
      <Navbar bg="dark" variant="dark" sticky="top" expand="lg">
        <Container>
          <Navbar.Brand className="navbar-title" as={Link} to="/">
            <img
              alt="Bookworm Library Logo"
              src={templogo}
              width="30"
              height="30"
              className="d-inline-block align-top"
            />{' '}
            Bookworm Digital Library
          </Navbar.Brand>
          <Navbar.Text>Welcome{!!name ? ' '+name : name}!</Navbar.Text>
          <Navbar.Toggle aria-controls="responsive-navbar-nav" />
          <Navbar.Collapse id="responsive-navbar-nav" className="justify-content-end">
            <Nav>
              <button className="headerbtn" onClick={() => navigate('/products')}>Catalog</button>
              {user === 'admin' ?
                <button className="headerbtn" onClick={() => navigate('/admin')}>Admin Portal</button>
                : ""
              }
              {user !== null?
                <>
                <button className="headerbtn" onClick={() => navigate('/account')}>Account</button>
                <button className="headerbtn" onClick={() => {logout()}}>Logout</button>
                </>
                : <button className="headerbtn" onClick={() => setShowLogin(true)}>Login/Register</button>
              }
              <button className="headerbtn" onClick={()=>navigate('/cart')}>
                <FiShoppingCart /> <Badge pill bg="secondary">{cartCount}</Badge><span className="visually-hidden">items in cart</span>
              </button>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
      <Login showLogin={showLogin} setShowLogin={setShowLogin} setShowRegister={setShowRegister} />
      <Register showRegister={showRegister} setShowLogin={setShowLogin} setShowRegister={setShowRegister} />
    </>
  );
}

export default Header;
