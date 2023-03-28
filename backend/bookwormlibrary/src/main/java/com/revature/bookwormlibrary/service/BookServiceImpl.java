package com.revature.bookwormlibrary.service;

import java.util.List;
import java.util.Optional;
import java.util.function.Predicate;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.revature.bookwormlibrary.dao.BookRepository;
import com.revature.bookwormlibrary.entity.Author;
import com.revature.bookwormlibrary.entity.Book;
import com.revature.bookwormlibrary.entity.Genre;

@Service
public class BookServiceImpl implements BookService {
	
	@Autowired
	BookRepository bookRepo;
	@Autowired
	AuthorService authorService;
	@Autowired
	GenreService genreService;
	
	@Override
	public Book createBook(Book book) {
//		Optional<Book> bookFound = bookRepo.findByIsbn13(book.getISBN13());
//		if(bookFound.isEmpty()) {
			List<Author> authors = book.getAuthors();
			for(int i=0;i<authors.size();i++) {
				authors.set(i, authorService.createAuthor(authors.get(i)));
			}
			List<Genre> genres = book.getGenres();
			for(int i=0;i<genres.size();i++) {
				genres.set(i, genreService.createGenre(genres.get(i)));
			}
			return bookRepo.save(book);
//		}
//		return bookFound.get();
	}
	
	@Override
	public Optional<Book> getBookByIsbn13(String isbn13) {
		return bookRepo.findByIsbn13(isbn13);
	}

	@Override
	public List<Book> getAllBooks() {
		return (List<Book>) bookRepo.findAll();
	}

	@Override
	public void updateBook(Book book) {
		bookRepo.save(book);
	}

	@Override
	public void deleteBook(int id) {
		if(bookRepo.existsById(id)) bookRepo.delete(bookRepo.findById(id).get());
	}

	@Override
	public List<Book> filterBooksByAuthorName(List<Book> books, String authorName) {
		Author author;
		Optional<Author> authorFound = authorService.getAuthorByName(authorName);
		if(authorFound.isPresent()) {
			author = authorFound.get();
			Predicate<Book> hasAuthor = book -> (book.getAuthors().contains(author));
			return books.stream().filter(hasAuthor).toList();
		}
		return null;
	}

	@Override
	public List<Book> filterBooksByGenreName(List<Book> books, String genreName) {
		Genre genre;
		Optional<Genre> genreFound = genreService.getGenreByName(genreName);
		if(genreFound.isPresent()) {
			genre = genreFound.get();
			Predicate<Book> hasGenre = book -> (book.getGenres().contains(genre));
			return books.stream().filter(hasGenre).toList();
		}
		return null;
	}

	@Override
	public List<Book> filterBooksByTitle(List<Book> books, String title) {
		Predicate<Book> hasTitle = book -> (book.getTitle().equalsIgnoreCase(title));
		return books.stream().filter(hasTitle).toList();
	}

}
