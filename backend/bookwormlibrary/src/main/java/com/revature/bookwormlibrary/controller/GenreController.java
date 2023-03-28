package com.revature.bookwormlibrary.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RestController;

import com.revature.bookwormlibrary.entity.Genre;
import com.revature.bookwormlibrary.service.GenreService;

@RestController
public class GenreController {
	
	@Autowired
	GenreService genreService;
	
	// http://localhost:8080/allGenres
	@GetMapping("/allGenres")
	public List<Genre> getAllGenres() {
		List<Genre> genres = genreService.getAllGenres();
		return genreService.sortGenresByName(genres);
	}
	
	// http://localhost:8080/addGenre
	@PostMapping("/addGenre")
	public void addGenre(Genre genre) {
		genreService.createGenre(genre);
	}

}
