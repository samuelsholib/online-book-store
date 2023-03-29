import axios from "axios";
import React, { useState } from "react";
import { Button, Col, Form, Modal, Row } from "react-bootstrap";

function AddUserForm(props) {

  const [ show, setShow ] = useState(false);
  const [ form, setForm ] = useState({});
  const [ errors, setErrors ] = useState({});
  const [ submits, setSubmits ] = useState(0);

  const handleShow = () => {show ? setShow(false) : setShow(true)};
  
  const setField = (field, value) => {
    setForm({ ...form, [field]: value })
  }

  const findFormErrors = () => {
    const {username,password,email,firstName,lastName,roleType} = form;
    const errorsFound = {};

    if(!!!username) errorsFound.username='Required'
    else if(username.length<3) errorsFound.username='Username too short'
    else if(username.length>30) errorsFound.username='Username too long'
    else {
      let newUsernameL = username.toLowerCase();
      for(const user of props.users) {
        let usernameL = user.username.toLowerCase();
        if(usernameL === newUsernameL) errorsFound.username='Username taken'
      }
    }
    if(!!!password) errorsFound.password='Required'
    else if(password.length<7) errorsFound.password='Password too short'
    else if(password.length>50) errorsFound.password='Password too long'
    if(!!!email) errorsFound.email='Required'
    // eslint-disable-next-line
    else if(!(/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/).test(email)) errorsFound.email='Invalid email'
    if(!!!firstName) errorsFound.firstName='Required'
    else if(firstName.length>50) errorsFound.firstName='First name too long'
    if(!!!lastName) errorsFound.lastName='Required'
    else if(lastName.length>50) errorsFound.lastName='Last name too long'
    if(!!!roleType) errorsFound.roleType='Required'

    return errorsFound;
  }

  const handleSubmit = (event) => {
    event.preventDefault();
    setSubmits(submits+1);
    setErrors({});

    const formErrors = findFormErrors();
    if(Object.keys(formErrors).length > 0) setErrors(formErrors)
    else {
      const {username,password,email,firstName,lastName,roleType} = form;
      let newUser = {
        username:username,
        password:password,
        email:email,
        firstName:firstName,
        lastName:lastName,
        roleType:roleType
      }
      
      axios.post('http://localhost:8080/newUser',newUser);
      alert('New user submitted!');
      window.location.reload(false);
    }
  };

  const renderUserForm = (
    <Modal show={show} onHide={handleShow}>
      <Modal.Header closeButton>
        <Modal.Title>Create New User</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <Form noValidate>
          <Form.Group>
            <Form.Label>Role Type</Form.Label>
            <Form.Select
              defaultValue="Select Role..."
              onChange={ e => setField('roleType', e.target.value) }
              isValid={ form.roleType && !!!errors.roleType && !!submits }
              isInvalid={ !!errors.roleType } >
              <option disabled>Select Role...</option>
              <option>user</option>
              <option>admin</option>
            </Form.Select>
            <Form.Control.Feedback type="invalid">{errors.roleType}</Form.Control.Feedback>
          </Form.Group>
          <Form.Group style={{ marginTop: '10px' }}>
            <Form.Label>Email</Form.Label>
            <Form.Control
              type="email"
              placeholder="user@email.com"
              onChange={ e => setField('email', e.target.value) }
              isValid={ form.email && !!!errors.email && !!submits }
              isInvalid={ !!errors.email } />
            <Form.Control.Feedback type="invalid">{errors.email}</Form.Control.Feedback>
          </Form.Group>
          <Row style={{ marginTop: '10px' }}>
            <Form.Group as={Col} controlId='username'>
              <Form.Label>Username</Form.Label>
              <Form.Control
                type="text"
                placeholder="newUser"
                onChange={ e => setField('username', e.target.value) }
                isValid={ form.uesrname && !!!errors.username && !!submits }
                isInvalid={ !!errors.username } />
              <Form.Text>3-30 characters</Form.Text>
              <Form.Control.Feedback type="invalid">{errors.username}</Form.Control.Feedback>
            </Form.Group>
            <Form.Group as={Col}>
              <Form.Label>Password</Form.Label>
              <Form.Control
                type="text"
                placeholder="secretpw"
                onChange={ e => setField('password', e.target.value) }
                isValid={ form.password && !!!errors.password && !!submits }
                isInvalid={ !!errors.password } />
              <Form.Text>7-50 characters</Form.Text>
              <Form.Control.Feedback type="invalid">{errors.password}</Form.Control.Feedback>
            </Form.Group>
          </Row>
          <Row style={{ marginTop: '10px' }}>
            <Form.Group as={Col}>
              <Form.Label>First Name</Form.Label>
              <Form.Control
                type="text"
                placeholder="John"
                onChange={ e => setField('firstName', e.target.value) }
                isValid={ form.firstName && !!!errors.firstName && !!submits }
                isInvalid={ !!errors.firstName } />
              <Form.Text>No &gt;50 characters</Form.Text>
              <Form.Control.Feedback type="invalid">{errors.firstName}</Form.Control.Feedback>
            </Form.Group>
            <Form.Group as={Col}>
              <Form.Label>Last Name</Form.Label>
              <Form.Control
                type="text"
                placeholder="Smith"
                onChange={ e => setField('lastName', e.target.value) }
                isValid={ form.lastName && !!!errors.lastName && !!submits }
                isInvalid={ !!errors.lastName } />
              <Form.Text>No &gt;50 characters</Form.Text>
              <Form.Control.Feedback type="invalid">{errors.lastName}</Form.Control.Feedback>
            </Form.Group>
          </Row>
        </Form>
      </Modal.Body>
      <Modal.Footer>
        <Button type="submit" onClick={handleSubmit}>
          Submit
        </Button>
      </Modal.Footer>
    </Modal>
  );

  return(
    <>
      <Button onClick={handleShow} style={{ marginTop: '10px' }}>
        Create New User
      </Button>
      {renderUserForm}
    </>
  );

}

export default AddUserForm;