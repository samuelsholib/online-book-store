import axios from "axios";
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import { useState, useEffect } from 'react';
import { useSelector } from 'react-redux';


function AccountForm({ setKey }) {
  const userid = useSelector((state) => state.login.value.userid);

  const [userData, setUserData] = useState({});
  const [form, setForm] = useState({});
  useEffect(() => {

    axios.get(`http://localhost:8080/userbyid/${userid}`).then((res) => {
      setUserData(res.data)
    });
  }, [userid])

  const setField = (field, value) => {
    setForm({ ...form, [field]: value })
  }
  const submitUpdatedInfo = (e) => {
    e.preventDefault();
    const { firstName, lastName, password, email } = form
    let updatedInfo = {
      userid: userData.userid,
      username: userData.username,
      password: (!!!password ? userData.password:password),
      email:(!!!email ? userData.email:email),
      firstName: (!!!firstName ? userData.firstName:firstName),
      lastName: (!!!lastName ? userData.lastName:lastName),
      roleType: userData.roleType,
      registrationDate: userData.registrationDate,
      lastLogin: userData.lastLogin

    }
    axios.put('http://localhost:8080/updateuser', updatedInfo);
    setKey('account');

  };

  return (

    <Form id="updateForm" className='updateAccount' onSubmit={submitUpdatedInfo}>
      <Form.Group className="mb-3" >
        <Form.Label>First Name</Form.Label>
        <Form.Control onChange={e => setField('firstName', e.target.value)} defaultValue={userData.firstName} type="text" placeholder="Enter First name" />
        <Form.Text className="text-muted">
        </Form.Text>
      </Form.Group>
      <Form.Group className="mb-3" >
        <Form.Label>Last Name</Form.Label>
        <Form.Control onChange={e => setField('lastName', e.target.value)} defaultValue={userData.lastName} type="text" placeholder="Enter last name" />
        <Form.Text className="text-muted">
        </Form.Text>
      </Form.Group>

      <Form.Group className="mb-3" >
        <Form.Label>Password</Form.Label>
        <Form.Control onChange={e => setField('password', e.target.value)} defaultValue={userData.password}  type="password" placeholder="Enter your password" />
        <Form.Text className="text-muted">
        </Form.Text>
      </Form.Group>

      <Form.Group className="mb-3" >
        <Form.Label>Email address</Form.Label>
        <Form.Control onChange={e => setField('email', e.target.value)} defaultValue={userData.email} type="email" placeholder="Enter email" />
        <Form.Text>
          We'll never share your email with anyone else.
        </Form.Text>
      </Form.Group>

      <Button className='submitBtn' variant="primary" type="submit" >
        Submit
      </Button>
    </Form>
  );
}
//}

export default AccountForm;