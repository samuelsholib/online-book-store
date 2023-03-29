import axios from "axios";
import React, { useState } from "react";
import { Button, Col, Form, InputGroup, Modal, Row } from "react-bootstrap";

function AddBookForm(props) {
  
  const [ show, setShow ] = useState(false);
  const [ form, setForm ] = useState({});
  const [ errors, setErrors ] = useState({});
  const [ submits, setSubmits ] = useState(0);

  const handleShow = () => {show ? setShow(false) : setShow(true)};

  const setField = (field, value) => {
    setForm({ ...form, [field]: value })
  }

  const isNumber = (char) => {
    return /^\d$/.test(char);
  }

  const findFormErrors = () => {
    const {isbn13, title, pages, publisher, publishYear, authors, genres, description} = form;
    const errorsFound = {};

    // ISBN13 Errors
    if(!!!isbn13) errorsFound.isbn13 = 'Required'
    else if(!isbn13.startsWith('978')) errorsFound.isbn13 = 'Must start with "978"'
    else if(isbn13.length !== 13) errorsFound.isbn13 = 'Must be 13 characters long'
    else {
      for(const char of isbn13) {
        if(!isNumber(char)) errorsFound.isbn13 = 'Numeric characters only'
      }
      for(const book of props.books) {
        if(isbn13 === book.isbn13) errorsFound.isbn13 = 'ISBN13 already in database'
      } 
    }
    // Title Errors
    if(!!!title) errorsFound.title = 'Required'
    else if(title.length > 100) errorsFound.title = 'No more than 100 characters'
    // Pages Errors
    if(!!!pages) errorsFound.pages = 'Required'
    // Publisher Errors
    if(!!!publisher) errorsFound.publisher = 'Required'
    else if(publisher.length > 100) errorsFound.publisher = 'No more than 100 characters'
    // PublishYear Errors
    if(!!!publishYear) errorsFound.publishYear = 'Required'
    else if(publishYear < 1970 || publishYear > 2022) errorsFound.publishYear = 'Invalid year'
    // Authors Errors
    if(!!!authors) errorsFound.authors = 'Required'
    // Genres Errors
    if(!!!genres) errorsFound.genres = 'Required'
    // Description Errors
    if(!!!description) errorsFound.description = "Required"

    return errorsFound;
  }

  const handleSubmit = (event) => {
    event.preventDefault();
    setSubmits(submits+1);
    setErrors({});

    const formErrors = findFormErrors();
    if(Object.keys(formErrors).length > 0) setErrors(formErrors)
    else {
      const { title, isbn13, pages, publisher, publishYear, authors, genres, description } = form;
      let newBook = {
        title: title,
        isbn13: isbn13,
        pages: pages,
        publisher: publisher,
        publishYear: publishYear,
        description: description,
        authors: [],
        genres:  []
      }
      for(let author of authors.split(',')) newBook.authors.push({name:author})
      for(let genre of genres.split(',')) newBook.genres.push({name:genre})
      
      axios.post('http://localhost:8080/addBook',newBook);
      alert('New book submitted!');
      window.location.reload(false);
    }
  }

  const renderBookForm = (
    <Modal show={show} onHide={handleShow}>
      <Modal.Header closeButton>
        <Modal.Title>Add New Book</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <Form noValidate>
          <Form.Group>
            <Form.Label>ISBN13</Form.Label>
            <Form.Control 
              type="text"
              placeholder='978XXXXXXXXXX'
              onChange={ e => setField('isbn13', e.target.value) }
              isValid={ form.isbn13 && !!!errors.isbn13 && !!submits }
              isInvalid={ !!errors.isbn13 } />
            <Form.Text>Must 13 characters long beginning with "978", numbers only</Form.Text>
            <Form.Control.Feedback type="invalid">{errors.isbn13}</Form.Control.Feedback>
          </Form.Group>
          <Row style={{ marginTop: '10px' }}>
            <Form.Group as={Col} xs={9}>
              <Form.Label>Title</Form.Label>
              <Form.Control
                type="text"
                onChange={ e => setField('title', e.target.value) }
                isValid={ form.title && !!!errors.title && !!submits }
                isInvalid={ !!errors.title } />
              <Form.Control.Feedback type="invalid">{errors.title}</Form.Control.Feedback>
            </Form.Group>
            <Form.Group as={Col}>
              <Form.Label>Pages</Form.Label>
              <Form.Control
                type="number"
                onChange={ e => setField('pages', e.target.value) }
                isValid={ form.pages && !!!errors.pages && !!submits }
                isInvalid={ !!errors.pages } />
              <Form.Control.Feedback type="invalid">{errors.pages}</Form.Control.Feedback>
            </Form.Group>
          </Row>
          <Row style={{ marginTop: '10px' }}>
            <Form.Group as={Col} xs={9}>
              <Form.Label>Publisher</Form.Label>
              <Form.Control 
                type="text"
                onChange={ e => setField('publisher', e.target.value) }
                isValid={ form.publisher && !!!errors.publisher && !!submits }
                isInvalid={ !!errors.publisher } />
                <Form.Control.Feedback type="invalid">{errors.publisher}</Form.Control.Feedback>
            </Form.Group>
            <Form.Group as={Col}>
              <Form.Label>Publication</Form.Label>
              <Form.Control 
                type="number"
                placeholder="XXXX"
                onChange={ e => setField('publishYear', e.target.value) }
                isValid={ form.publishYear && !!!errors.publishYear && !!submits }
                isInvalid={ !!errors.publishYear }/>
              <Form.Text>1970-2022</Form.Text>
              <Form.Control.Feedback type="invalid">{errors.publishYear}</Form.Control.Feedback>
            </Form.Group>
          </Row>
          <Form.Group style={{ marginTop: '10px' }}>
            <Form.Label>Author&#40;s&#41;</Form.Label>
            <Form.Control
              type="text"
              onChange={ e => setField('authors', e.target.value) }
              isValid={ form.authors && !!!errors.authors && !!submits }
              isInvalid={ !!errors.authors } />
            <Form.Text>Separate multiple authors by commas ","</Form.Text>
            <Form.Control.Feedback type="invalid">{errors.authors}</Form.Control.Feedback>
          </Form.Group>
          <Form.Group style={{ marginTop: '10px' }}>
            <Form.Label>Genre&#40;s&#41;</Form.Label>
            <Form.Control
              type="text"
              onChange={ e => setField('genres', e.target.value) }
              isValid={ form.genres && !!!errors.genres && !!submits }
              isInvalid={ !!errors.genres } />
            <Form.Text>Separate multiple genres by commas ","</Form.Text>
            <Form.Control.Feedback type="invalid">{errors.genres}</Form.Control.Feedback>
          </Form.Group>
          <InputGroup style={{ marginTop: '15px' }}>
            <InputGroup.Text>Description</InputGroup.Text>
            <Form.Control
              as="textarea"
              onChange={ e => setField('description', e.target.value) }
              isValid={ form.description && !!!errors.description && !!submits }
              isInvalid={ !!errors.description } />
            <Form.Control.Feedback type="invalid">{errors.description}</Form.Control.Feedback>
          </InputGroup>
        </Form>
      </Modal.Body>
      <Modal.Footer onClick={handleSubmit}>
        <Button type="submit">
          Submit
        </Button>
      </Modal.Footer>
    </Modal>
  );

  return (
    <>
      <Button onClick={handleShow} style={{ marginTop: '10px' }}>
        Add New Book
      </Button>
      {renderBookForm}
    </>
  );

}

export default AddBookForm;