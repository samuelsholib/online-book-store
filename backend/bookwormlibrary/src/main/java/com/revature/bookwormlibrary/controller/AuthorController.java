package com.revature.bookwormlibrary.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RestController;

import com.revature.bookwormlibrary.entity.Author;
import com.revature.bookwormlibrary.service.AuthorService;

@RestController
public class AuthorController {
	
	@Autowired
	AuthorService authorService;
	
	// http://localhost:8080/allAuthors
	@GetMapping("/allAuthors")
	public List<Author> getAllAuthors(){
		List<Author> authors = authorService.getAllAuthors();
		return authorService.sortAuthorsByName(authors);
	}
	
	// http://localhost:8080/addAuthor
	@PostMapping("/addAuthor")
	public void addAuthor(Author author) {
		authorService.createAuthor(author);
	}

}
