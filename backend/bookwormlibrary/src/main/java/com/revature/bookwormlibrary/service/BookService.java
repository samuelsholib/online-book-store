package com.revature.bookwormlibrary.service;

import java.util.List;
import java.util.Optional;

import com.revature.bookwormlibrary.entity.Book;

public interface BookService {
    /**
     * Creates new book in database
     * @param book contains information about book
     */
    public Book createBook(Book book);
    
    public Optional<Book> getBookByIsbn13(String isbn13);
    
    /**
     * Retrieves all books from database
     * @return list of all books
     */
    public List<Book> getAllBooks();

    /**
     * Updates book information in database
     * @param book Complete updated information for book
     */
    public void updateBook(Book book);

    /**
     * Deletes book record from database
     * @param id Unique identifier for book to be deleted
     */
    public void deleteBook(int id);
    
    public List<Book> filterBooksByAuthorName(List<Book> books, String authorName);

    public List<Book> filterBooksByGenreName(List<Book> books, String genreName);

    public List<Book> filterBooksByTitle(List<Book> books, String title);

}
