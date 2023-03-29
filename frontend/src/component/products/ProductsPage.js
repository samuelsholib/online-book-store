import {useState, useEffect} from "react";
import{useNavigate} from 'react-router-dom';
import { DropdownButton, Dropdown } from "react-bootstrap";
import { AiOutlineSearch } from 'react-icons/ai';
import { IoIosCloseCircleOutline } from 'react-icons/io';
import { useDispatch } from "react-redux";
import { addToCart } from "../../slices/cart/CartSlice";
import Books from "../Books";
import Search from "./Search";
import axios from 'axios';
import {sort, flatten} from '../utility/HelperMethods';

function ProductsPage() {

  const [search, setSearch] = useState(false);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const [sortedList, setSortedList] = useState([]);

  //retrieve products from database
  useEffect(()=>{
    axios.get('http://localhost:8080/allBooks').then((res)=>{

      const books = flatten(res.data);

      //set product list default sorted by most recent
      setSortedList(books.sort((a, b) => b.publishYear - a.publishYear));
    })
  },[])

  //retrieves search results from database
  function handleSearch(){

    const type = document.getElementById("searchtype").value;
    const request = document.getElementById("searchvalue").value;

    navigate(`/results/${type}/${request}`);
  }

  return(
    <>
      {search?
        <>
          <h2 className="navoffset center">Search
            <button type="button" className="iconbtn" onClick={() => setSearch(false)}><IoIosCloseCircleOutline /></button>
          </h2>
          <Search handleSearch={handleSearch} />
        </>
        :
          <h2 className="center navoffset">Current Selection 
            <button type="button" className="iconbtn" onClick={()=>setSearch(true)}><AiOutlineSearch /></button>
          </h2>
      }
      <div className="productssortfilter">
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
      </div>
      <div className="gallery">
        {sortedList.map((book)=>{
          return <Books key={book.bookId} book={book} addToCart={() => dispatch(addToCart(book))} />
        })}
      </div>
    </>
  );
}

export default ProductsPage;
