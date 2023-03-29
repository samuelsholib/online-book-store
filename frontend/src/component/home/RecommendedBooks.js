import React, {useEffect, useState} from "react";
import axios from 'axios';
import { CardGroup } from "react-bootstrap";
import Books from "../Books";
import { useDispatch } from "react-redux";
import { addToCart } from "../../slices/cart/CartSlice";
import {flatten} from '../utility/HelperMethods';

function RecommendedBooks() {

  const dispatch = useDispatch();
  const [bookrecs, setBookRecs] = useState([]);

  //retrieve products from database
  useEffect(() => {
    axios.get('http://localhost:8080/allBooks').then((res) => {

      if(res.data.length < 4) {
        setBookRecs(flatten(res.data));
      } else {
        setBookRecs(flatten(res.data.slice(-3)));
      }
      
    })
  }, [])

  return (
    <>
      <div className="recommendations">
          <div className="rec-title">
            <h3>Recently Added:</h3>
          </div>
          <div className="gallery">
            <CardGroup>
              {bookrecs.map((book) => {
                return <Books key={book.bookId} book={book} addToCart={() => dispatch(addToCart(book))} />
              })}
            </CardGroup>
          </div>
      </div>
    </>
  );
}
export default RecommendedBooks;