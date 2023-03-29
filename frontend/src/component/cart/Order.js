import React from "react";
import { Container, Row, Col } from "react-bootstrap";

function Order({item}) {

  function handleRemove(){
    // remove book from order
  }

  return(
    <>
      <Container className="cartitem">
        <Row className="mb-4">
          <Col xs="auto">
            <img className="cover" alt={`Cover for ${item.title}`} src={`./${item.cover}`} />
          </Col>
          <Col className="cartdetails">
            <h5>{item.title}</h5>
            <p>{item.author}</p>
            <button className="removebtn" onClick={handleRemove}>Remove</button>
          </Col>
        </Row>
      </Container>
    </>
  );
}

export default Order;
