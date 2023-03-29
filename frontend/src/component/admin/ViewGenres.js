import axios from "axios";
import React, { useEffect, useState } from "react";
import { Card, Table } from "react-bootstrap";

function ViewGenres() {

  const [genres,setGenres] = useState([]);

  useEffect(() => {
    axios.get('http://localhost:8080/allGenres').then(res => setGenres(res.data))
  },[]);

  const renderGenres = genres.map(genre => (
    <tr key={genre.genreId}>
      <td>{genre.name}</td>
    </tr>
  ));
  
  return (
    <>
      <Card style={{ marginTop: '10px' }}>
        <Card.Header>Total Genres: {genres.length}</Card.Header>
        <Card.Body>
          <Card.Title>All Genres</Card.Title>
          <Table striped bordered hover responsive >
            <thead>
              <tr>
                <th>Genre Name</th>
              </tr>
            </thead>
            <tbody>
              {renderGenres}
            </tbody>
          </Table>
        </Card.Body>
      </Card>
    </>
  );

}

export default ViewGenres;
