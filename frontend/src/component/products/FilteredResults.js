import {useState, useEffect} from "react";
import { useParams, useNavigate } from "react-router-dom";
import { DropdownButton, Dropdown } from "react-bootstrap";
import { useDispatch } from "react-redux";
import { addToCart } from "../../slices/cart/CartSlice";
import Books from "../Books";
import Search from "./Search";
import axios from 'axios';
import {sort, flatten} from '../utility/HelperMethods';

function FilteredResults() {

  const dispatch = useDispatch();
  const navigate = useNavigate();
  const {type, request} = useParams();

  const [sortedList, setSortedList] = useState([]);

  useEffect(()=>{
    axios.get(`http://localhost:8080/books/${type}/${request}`).then((res) => {

      if(res.data){
        const books = flatten(res.data);
        setSortedList(sort(books, "date"));
      } else {
        setSortedList([]);
      }
    })
  },[type, request])

  //retrieves search results from database
  function handleSearch(){

    const newtype = document.getElementById("searchtype").value;
    const newrequest = document.getElementById("searchvalue").value;

    console.log(newtype);
    console.log(newrequest);

    navigate(`/results/${newtype}/${newrequest}`);
  }

  return(
    <>
      <h2 className="navoffset center">Search</h2>
      <Search handleSearch={handleSearch} />
      <h3 className="resultheading">Results:</h3>
      <span className="sortfilter">
        {sortedList.length === 1 ? <p><b>1 result found</b></p>
        : <p><b>{sortedList.length} results found</b></p> }
        <DropdownButton
          key="sort"
          title="Sort By"
          bsPrefix="sortfilterbtn"
        >
          <Dropdown.Item as="button" type="button" onClick={() => setSortedList(sort(sortedList, "title"))}>Title A-Z</Dropdown.Item>
          <Dropdown.Item as="button" type="button" onClick={() => setSortedList(sort(sortedList, "titledesc"))}>Title Z-A</Dropdown.Item>
          <Dropdown.Item as="button" type="button" onClick={() => setSortedList(sort(sortedList, "author"))}>Author A-Z</Dropdown.Item>
          <Dropdown.Item as="button" type="button" onClick={() => setSortedList(sort(sortedList, "authordesc"))}>Author Z-A</Dropdown.Item>
          <Dropdown.Item as="button" type="button" onClick={() => setSortedList(sort(sortedList, "genre"))}>Genre A-Z</Dropdown.Item>
          <Dropdown.Item as="button" type="button" onClick={() => setSortedList(sort(sortedList, "genredesc"))}>Genre Z-A</Dropdown.Item>
          <Dropdown.Item as="button" type="button" onClick={() => setSortedList(sort(sortedList, "date"))}>Publish Date (newest)</Dropdown.Item>
          <Dropdown.Item as="button" type="button" onClick={() => setSortedList(sort(sortedList, "datedesc"))}>Publish Date (oldest)</Dropdown.Item>
        </DropdownButton>
      </span>
      <div className="gallery">
        {sortedList.map((book)=>{
          return <Books key={book.bookId} book={book} addToCart={() => dispatch(addToCart(book))} />
        })}
      </div>
    </>
  );
}

export default FilteredResults;
