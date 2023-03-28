package com.revature.bookwormlibrary.service;

import java.util.Comparator;
import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.revature.bookwormlibrary.dao.GenreRepository;
import com.revature.bookwormlibrary.entity.Genre;

@Service
public class GenreServiceImpl implements GenreService {
	
	@Autowired
	GenreRepository genreRepo;
	
	@Override
	public Genre createGenre(Genre genre) {
		Optional<Genre> genreFound = genreRepo.findByNameIgnoreCase(genre.getName());
		if(genreFound.isEmpty()) {
			return genreRepo.save(genre);
		}
		return genreFound.get();
	}

	@Override
	public Optional<Genre> getGenreById(int id) {
		return genreRepo.findById(id);
	}
	
	@Override
	public Optional<Genre> getGenreByName(String name) {
		return genreRepo.findByNameIgnoreCase(name);
	}

	@Override
	public List<Genre> getAllGenres() {
		return (List<Genre>) genreRepo.findAll();
	}

	@Override
	public void updateGenre(Genre genre) {
		// TODO Auto-generated method stub
	}

	@Override
	public List<Genre> sortGenresByName(List<Genre> genres) {
		Comparator<Genre> byName = Comparator.comparing(Genre::getName);
		return genres.stream().sorted(byName).toList();
	}

}
