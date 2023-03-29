import React, { useState } from "react";
import { Container, Tab, Tabs } from "react-bootstrap";
import Inventory from "./Inventory";
import ViewAuthors from "./ViewAuthors";
import ViewOrders from "./ViewOrders";
import ViewGenres from "./ViewGenres";
import ViewUsers from "./ViewUsers";

function AdminPage() {

  const [key, setKey] = useState('users');
  
  return (
    <>
      <Container style={{ marginTop: '50px' }}>
        <Tabs activeKey={key} onSelect={(k) => setKey(k)}>
          <Tab eventKey='users' title='Users' tabClassName="tabs">
            <ViewUsers />
          </Tab>
          <Tab eventKey='inventory' title='Inventory' tabClassName="tabs">
            <Inventory />
          </Tab>
          <Tab eventKey='orders' title='Order History' tabClassName="tabs">
            <ViewOrders />
          </Tab>
          <Tab eventKey='authors' title='Authors' tabClassName="tabs">
            <ViewAuthors />
          </Tab>
          <Tab eventKey='genres' title='Genres' tabClassName="tabs">
            <ViewGenres />
          </Tab>
        </Tabs>
      </Container>
    </>
  );

}

export default AdminPage;
