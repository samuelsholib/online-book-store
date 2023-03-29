import axios from "axios";
import React, { useEffect, useState } from "react";
import { Card, Table } from "react-bootstrap";

function ViewAuthors() {

  const [authors,setAuthors] = useState([]);

  useEffect(() => {
    axios.get('http://localhost:8080/allAuthors').then(res => setAuthors(res.data))
  },[]);
  
  const renderAuthors = authors.map(author => (
    <tr key={author.authorId}>
      <td>{author.name}</td>
    </tr>
  ));
  
  return (
    <>
      <Card style={{ marginTop: '10px' }}>
        <Card.Header>Total Authors: {authors.length}</Card.Header>
        <Card.Body>
          <Card.Title>All Authors</Card.Title>
          <Table striped bordered hover responsive >
            <thead>
              <tr>
                <th>Author Name</th>
              </tr>
            </thead>
            <tbody>
              {renderAuthors}
            </tbody>
          </Table>
        </Card.Body>
      </Card>
    </>
  );

}

export default ViewAuthors;
