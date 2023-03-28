package com.revature.bookwormlibrary.controller;

import java.util.List;
import java.util.Optional;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

import com.revature.bookwormlibrary.entity.Book;
import com.revature.bookwormlibrary.service.BookService;

@RestController
public class BookController {
	
	@Autowired
	BookService service;
	
	// http://localhost:8080/book/
	@GetMapping("/book/{isbn13}")
	public Book getBookByIsbn13(@PathVariable String isbn13) {
		Optional<Book> bookFound = service.getBookByIsbn13(isbn13);
		if(bookFound.isEmpty()) return null;
		return bookFound.get();
	}
	
	// http://localhost:8080/books/author/
	@GetMapping("/books/author/{author}")
	public List<Book> getBooksByAuthor(@PathVariable String author) {
		return service.filterBooksByAuthorName(getAllBooks(), author);
	}
	
	// http://localhost:8080/books/genre/
	@GetMapping("/books/genre/{genre}")
	public List<Book> getBooksByGenre(@PathVariable String genre) {
		return service.filterBooksByGenreName(getAllBooks(), genre);
	}
	
	// http://localhost:8080/books/title/
	@GetMapping("/books/title/{title}")
	public List<Book> getBooksByTitle(@PathVariable String title) {
		return service.filterBooksByTitle(getAllBooks(), title);
	}
	
	// http://localhost:8080/allBooks
	@GetMapping("/allBooks")
	public List<Book> getAllBooks() {
		return service.getAllBooks();
	}
	
	// http://localhost:8080/addBook
	@PostMapping("/addBook")
	public Book addBook(@RequestBody Book book) {
		return service.createBook(book);
	}
	
	// http://localhost:8080/deleteBook/
	@DeleteMapping("/deleteBook/{id}")
	public void deleteBook(@PathVariable int id) {
		service.deleteBook(id);
	}
	
}
