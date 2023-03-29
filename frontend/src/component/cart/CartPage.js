import React, {useState} from "react";
import {Table, Alert} from 'react-bootstrap';
import Book from './Book'
import {useSelector, useDispatch} from 'react-redux'
import {removeFromCart, emptyCart} from '../../slices/cart/CartSlice';
import axios from 'axios';

function CartPage() {

  const user = useSelector((state)=>state.login.value);
  const cart = useSelector((state)=>state.cart.value.items);
  const dispatch = useDispatch();

  const [checkedOut, setCheckedOut] = useState(false);
  const [success, setSuccess] = useState(false);

  //makes sure user is logged in then sends order to database
  function handleCheckout(){

    setCheckedOut(true);
    if(user.username){
      let books = format(cart);
      let order = { user: user, books: books };
      axios.post('http://localhost:8080/newOrder', order).then(()=>{
        dispatch(emptyCart());
        setSuccess(true);
      })
    }
  }

  //formats books so they can turn into Spring Beans
  function format(books){
    let formattedBooks = [];
    for(let book of books){
      let formattedBook = {...book};
      formattedBook.authors = toObject(book.authors);
      formattedBook.genres = toObject(book.genres);
      formattedBooks.push(formattedBook);
    }
    return formattedBooks;
  }
  function toObject(str){
    let splitArr = str.split(", ");
    let objArr = [];
    for (let a of splitArr) {
      objArr.push({ name: a });
    }
    return objArr;
  }

  return(
    <div className="container navoffset">
      {/* Pop up alerts for successful checkout or error message */}
      {user.username && checkedOut && success &&
        <Alert 
          key="success" 
          variant="success"
          className="center"
          onClose={() => { setCheckedOut(false); setSuccess(false) }} 
          dismissible >
          Checkout successful! You will receive an email with your download link soon.
        </Alert>
      }
      {cart.length > 0 ?
        <>
          {!user.username && checkedOut && !success &&
            <Alert 
              key="danger" 
              variant="danger" 
              className="center"
              onClose={() => { setCheckedOut(false); setSuccess(false) }} 
              dismissible >
              Cannot checkout. Please sign in.
            </Alert>
          }

          {/* Cart List */}
          <h2 className="center">Your Order</h2>
          <Table id="cartlist" responsive>
            <thead>
              <tr>
                <th>Cover</th>
                <th>Title</th>
                <th>Author</th>
                <th></th>
              </tr>
            </thead>
            <tbody>
              {cart.map((item) => { 
                return (
                  <Book key={item.bookId} item={item} removeItem={()=>dispatch(removeFromCart(item.bookId))}/>
                );
              })}
            </tbody>
          </Table>
          < button className="checkoutbtn loginbtn" onClick={handleCheckout}>Checkout</button>
          < button className="checkoutbtn resetbtn" onClick={()=>dispatch(emptyCart())}>Clear</button>
        </>
        : <>
          <h2 className="center">Your Order</h2>
          <p className="center">No items in cart.</p>
        </>
      }
    </div>
  );
}

export default CartPage;
