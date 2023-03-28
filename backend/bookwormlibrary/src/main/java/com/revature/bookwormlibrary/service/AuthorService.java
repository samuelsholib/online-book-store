package com.revature.bookwormlibrary.service;

import java.util.List;
import java.util.Optional;

import com.revature.bookwormlibrary.entity.Author;



public interface AuthorService {
    /**
     * Creates new author record in database
     * @param author Information about author
     */
    public Author createAuthor(Author author);

    /**
     * Retrieves specific author from database
     * @param id Specific author's unique identifier
     * @return Author information
     */
    public Optional<Author> getAuthorById(int id);
    
    public Optional<Author> getAuthorByName(String name);

    /**
     * Retrieves all author records from database
     * @return List of all records
     */
    public List<Author> getAllAuthors();

    /**
     * Updates specific author's information in database
     * @param author Completed updates author information
     */
    public void updateAuthor(Author author);

    /**
     * Deletes author record from database
     * @param id Author's unique id
     */
    public void deleteAuthor(int id);
    
    public List<Author> sortAuthorsByName(List<Author> authors);
}

