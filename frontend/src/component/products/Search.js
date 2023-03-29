import {InputGroup, FormSelect, FormControl} from 'react-bootstrap';

function Search({handleSearch}){

    return(
        <div id="search" className="container navoffset">
            <div className="d-flex">
                <InputGroup>
                    <FormSelect id="searchtype">
                        <option value="title">Title</option>
                        <option value="author">Author</option>
                        <option value="genre">Genre</option>
                    </FormSelect>
                    <FormControl
                        id="searchvalue"
                        placeholder="Search..."
                        aria-label="Search"
                        aria-describedby="basic-addon2"
                    />
                    <button id="searchbtn" type="button" onClick={handleSearch}>
                        Search
                    </button>
                </InputGroup>
            </div>
        </div>
    );
}

export default Search;