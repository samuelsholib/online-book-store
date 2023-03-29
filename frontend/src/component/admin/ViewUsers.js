import axios from "axios";
import React, { useEffect, useState } from "react";
import { Button, Card, Table } from "react-bootstrap";
import AddUserForm from "./AddUserForm";

function ViewUsers() {

  const [users, setUsers] = useState([]);

  useEffect(() => {
    axios.get('http://localhost:8080/allusers').then(res => setUsers(res.data))
  },[]);

  const handleDelete = (event) => {
    event.preventDefault();

    let temp = users.filter(function (value, _index, _arr) {
      return value.userid !== Number(event.target.value);
    });

    axios.delete(`http://localhost:8080/deleteuser/${Number(event.target.value)}`);

    setUsers(temp);
  };

  const dateToString = (date) => {
    if(!!date) {
        date = date.map(dt => dt>10 ? dt:`0${dt}`);
        const [year,month,day] =  date;
        return `${month}/${day}/${year}`;
    }
  }

  const dateTimeToString = (dateTime) => {
    if(!!dateTime) {
        dateTime = dateTime.map(dt => dt>10 ? dt:`0${dt}`);
        let [year,month,day,hour,min,sec] = dateTime;
        return `${month}/${day}/${year} ${hour}:${min}:${sec}`;
    }
  }

  const renderUsers = users.map(user => (
    <tr key={user.userid}>
      <td>{user.username}</td>
      <td>{user.email}</td>
      <td>{user.firstName}</td>
      <td>{user.lastName}</td>
      <td>{user.roleType}</td>
      <td>{dateToString(user.registrationDate)}</td>
      <td>{dateTimeToString(user.lastLogin)}</td>
      <td>
        <Button value={user.userid} onClick={handleDelete}>Delete</Button>
      </td>
    </tr>
  ));

  return (
    <>
      <AddUserForm users={users}/>
      <Card style={{ marginTop: '10px' }}>
        <Card.Header>Total Users: {users.length}</Card.Header>
        <Card.Body>
          <Card.Title>All Users</Card.Title>
          <Table striped bordered hover responsive >
            <thead>
              <tr>
                <th>Username</th>
                <th>Email</th>
                <th>First Name</th>
                <th>Last Name</th>
                <th>Role</th>
                <th>Registration Date</th>
                <th>Last Login</th>
                <th>Delete User</th>
              </tr>
            </thead>
            <tbody>
              {renderUsers}
            </tbody>
          </Table>
        </Card.Body>
      </Card>
    </>
  );

}

export default ViewUsers;
