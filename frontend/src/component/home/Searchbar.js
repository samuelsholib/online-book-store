import React from "react";
import { Search } from "react-bootstrap-icons";
import { Form, Button, InputGroup } from "react-bootstrap";


function Searchbar() {
  return (
    <>
      <div className="search-bar">
        <Form>
          <InputGroup className="mb-3">
            <Form.Control type="text" placeholder="Search..." aria-label="Search..." aria-describedby="search-addon" />
            <Button variant="primary" type="submit" id="search-addon">
              <Search color="#fff" size={20} />
            </Button>
          </InputGroup>
        </Form>
      </div>
    </>
  );
}
export default Searchbar;