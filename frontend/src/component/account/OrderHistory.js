import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import { Card, ListGroup, Table } from "react-bootstrap";

function OrderHistory() {
    const userid = useSelector((state) => state.login.value.userid);

    const [orders, setOrders] =  useState([]);
    useEffect(() => {
    axios.get(`http://localhost:8080/orders/user/${userid}`).then(res=> {
        setOrders(res.data);
    }) 
    }, [userid])

    const dateToString = (date) => {
      if(!!date) {
          date = date.map(dt => dt>10 ? dt:`0${dt}`);
          const [year,month,day] =  date;
          return `${month}/${day}/${year}`;
      }
    }
  
    const renderAuthors = (authors) => (
        authors.length === 1 ? ( authors[0].name ) : (
          <ListGroup>
            {authors.map(author => (
              <ListGroup.Item key={author.authorId}>
                {author.name}
              </ListGroup.Item>
            ))}
          </ListGroup>
        )
      );
      
      const renderBooks = (books) => (
        books.map(book => (
          <tr key={book.bookId}>
            <td>{book.isbn13}</td>
            <td>{book.title}</td>
            <td>{renderAuthors(book.authors)}</td>
            <td>{book.pages}</td>
            <td>{book.publisher}</td>
            <td>{book.publishYear}</td>
          </tr>
        ))
      );
    const renderOrders = orders.map(order => (
        <Card key={order.orderid} style={{ marginTop: '10px' }}>
             <Card.Header>{dateToString(order.orderDate)}</Card.Header>
          <Card.Body>
            <Card.Title>Order #{order.orderid}</Card.Title>
            <Table striped bordered hover responsive style={{ marginTop: '10px' }}>
              <thead>
                <tr>
                  <th>ISBN13</th>
                  <th>Title</th>
                  <th>Author(s)</th>
                  <th>Pages</th>
                  <th>Publisher</th>
                  <th>Publish Year</th>
                </tr>
              </thead>
              <tbody>
                {renderBooks(order.books)}
              </tbody>
            </Table>
          </Card.Body>
        </Card>
      ));
     return (
         <>
         {orders.length > 0? renderOrders: <div> You don't have any past orders.</div>}
         </>
     ) 
}

export default OrderHistory;