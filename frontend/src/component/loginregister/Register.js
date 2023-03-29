import React, { useState } from 'react';
import { FloatingLabel } from 'react-bootstrap';
import axios from "axios";
import Form from 'react-bootstrap/Form'
import Modal from 'react-bootstrap/Modal'
import { useDispatch } from 'react-redux'
import { signin } from '../../slices/login/LoginSlice'

function Register({ showRegister, setShowRegister, setShowLogin }) {

  const dispatch = useDispatch();

  //potential error messages when validating form
  const [errorMessages, setErrorMessages] = useState({});
  const errors = {
    fullname: "please enter your name",
    uname: "username should be between 3-30 characters and only contain letters, numbers, periods, or underscores",
    pass: "password should be at least 8 characters long",
    unameused: "username taken",
    email: "invalid email format"
  };

  //POST AXIOS & EMAIL AND VALIDATION
  function handleSubmit(e) {
    e.preventDefault();

    const regForm = document.getElementById("regform");
    const { first, last, username, password, email} = regForm;

    const emailFormat =
      /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;

    const usernameFormat = /^[a-zA-Z0-9._-]*$/;

    //check that username is not only whitespace
    if (username.value.trim().length < 3 || 
        username.value.trim().length > 30 || 
        !username.value.match(usernameFormat)) {

      setErrorMessages({ name: "uname", message: errors.uname });

    } else if (password.value.length < 8) {

      setErrorMessages({ name: "pass", message: errors.pass });

    } else if (!email.value.trim() || !email.value.match(emailFormat)) {

      setErrorMessages({ name: "email", message: errors.email });


    } else {

    //   check if username is in database
     axios.get(`http://localhost:8080/user?username=${username.value}`)
     .then((res) => {
        //res.data will be true if user found from username
        if (res.data) {
          //username taken
          setErrorMessages({ name: "unameused", message: errors.unameused });

        } else {
          // new user
          const newUser = {
            firstName: first.value,
            lastName: last.value,
            username: username.value,
            password: password.value,
            email: email.value
          }

          axios.post(`http://localhost:8080/newUser`, newUser)
          .then((res) => {

            setShowRegister(false);
            dispatch(signin(res.data));
            setErrorMessages({});
          });
        }
      })
    }
  }

  function renderErrorMessage(name) {
    if (name === errorMessages.name) {
      return (<div className="error">{errorMessages.message}</div>);
    }
  }

  //change which modal is showing on button click
  function changeForm() {
    setShowLogin(true);
    setShowRegister(false);
  }

  function handleClose(){
    setShowRegister(false);
    setErrorMessages({});
  }

  const renderForm = (
    <Modal
      show={showRegister}
      onHide={handleClose}
      size="md"
      aria-labelledby="contained-modal-title-vcenter"
      centered
    >
      <Form id="regform" className='regform' onSubmit={handleSubmit}>
        <div className="formbuttons">
          <button className="unselectedbutton" onClick={changeForm}>
            Sign In
          </button>
          <button className="selectedbutton" disabled>
            Sign Up
          </button>
        </div>
        <Modal.Header closeButton>
          <img
            alt="Bookworm Library Logo"
            src="http://localhost:3000/bookworm_logo.svg"
            width="30"
          />{' '}
          <h3>Register an Account:</h3>
        </Modal.Header>

        <Modal.Body>
          <Form.Group className="logininput">
            <FloatingLabel label="First Name" className='floatinglabel'>
              <Form.Control
                type='text'
                name='first'
                placeholder='first name'
                required
                className='formcontrol'
              />
              {renderErrorMessage("fullname")}
            </FloatingLabel>
          </Form.Group>
          <Form.Group className="logininput">
            <FloatingLabel label="Last Name" className='floatinglabel'>
              <Form.Control
                type='text'
                name='last'
                placeholder='last name'
                required
                className='formcontrol'
              />
              {renderErrorMessage("fullname")}
            </FloatingLabel>
          </Form.Group>
          <Form.Group className="logininput">
            <FloatingLabel label="Username" className='floatinglabel'>
              <Form.Control
                type='text'
                name='username'
                placeholder='username'
                required
                className='formcontrol'
              />
              {renderErrorMessage("unameused")}
              {renderErrorMessage("uname")}
            </FloatingLabel>
          </Form.Group>
          <Form.Group className="logininput">
            <FloatingLabel label="Password" className='floatinglabel'>
              <Form.Control
                type='password'
                name='password'
                placeholder='password'
                required
                className='formcontrol'
              />
              {renderErrorMessage("pass")}
            </FloatingLabel>
          </Form.Group>          
          <Form.Group className="logininput">
            <FloatingLabel label="Email" className='floatinglabel'>
              <Form.Control
                type='email'
                name='email'
                placeholder='email'
                required
                className='formcontrol'
              />
              {renderErrorMessage("email")}
            </FloatingLabel>
          </Form.Group>   
        </Modal.Body>


        <Modal.Footer>
          <button className="resetbtn" variant="none" type="reset" onClick={()=>setErrorMessages({})}>
            Clear
          </button>
          <button className="loginbtn" variant="none" type="submit">
            Submit
          </button>
        </Modal.Footer>
      </Form>
    </Modal>
  );

  return renderForm;
};

export default Register;