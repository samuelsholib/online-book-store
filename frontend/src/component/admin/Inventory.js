import React, { useEffect, useState } from "react";
import { Button, Card, ListGroup, Table } from "react-bootstrap";
import axios from "axios";
import AddBookForm from "./AddBookForm";

function Inventory() {

  const [books, setBooks] = useState([]);
  
  useEffect(() => {
    axios.get('http://localhost:8080/allBooks').then(res => setBooks(res.data))
  },[])

  const handleDelete = (event) => {
    event.preventDefault();

    let temp = books.filter(function (value, _index, _arr) {
      return value.bookId !== Number(event.target.value);
    });

    axios.delete(`http://localhost:8080/deleteBook/${Number(event.target.value)}`);

    setBooks(temp);
  };

  const renderAuthors = (authors) => (
    authors.length === 1 ? authors[0].name : (
      <ListGroup>
        {authors.map(author => (
          <ListGroup.Item key={author.authorId}>
            {author.name}
          </ListGroup.Item>
        ))}
      </ListGroup>
    )
  );

  const renderGenres = (genres) => (
    genres.length === 1 ? genres[0].name : (
      <ListGroup>
        {genres.map(genre => (
          <ListGroup.Item key={genre.genreId}>
            {genre.name}
          </ListGroup.Item>
        ))}
      </ListGroup>
    )
  );

  const renderBooks = books.map(book => (
    <tr key={book.bookId}>
      <td>{book.isbn13}</td>
      <td>{book.title}</td>
      <td>{renderAuthors(book.authors)}</td>
      <td>{book.pages}</td>
      <td>{renderGenres(book.genres)}</td>
      <td>{book.publisher}</td>
      <td>{book.publishYear}</td>
      <td>
        <Button value={book.bookId} onClick={handleDelete}>Delete</Button>
      </td>
    </tr>
  ));

  return (
    <>
      <AddBookForm books={books}/>
      <Card style={{ marginTop: '10px' }}>
        <Card.Header>Total Books: {books.length}</Card.Header>
        <Card.Body>
          <Card.Title>All Books</Card.Title>
          <Table striped bordered hover responsive >
            <thead>
              <tr>
                <th>ISBN13</th>
                <th>Title</th>
                <th>Author(s)</th>
                <th>Pages</th>
                <th>Genre(s)</th>
                <th>Publisher</th>
                <th>Publication Year</th>
                <th>Delete Book</th>
              </tr>
            </thead>
            <tbody>
              {renderBooks}
            </tbody>
          </Table>
        </Card.Body>
      </Card>
    </>
  );

}

export default Inventory;
