package com.revature.bookwormlibrary.service;

import java.util.List;
import java.util.Optional;

import com.revature.bookwormlibrary.entity.Genre;

public interface GenreService {
    /**
     * Creates a new record in the database for the given Genre and returns it,
     * or returns an existing Genre with the same <b>name</b> field
     * @param genre a Genre object
     * @return a Genre object of a new/existing record in the database
     */
    public Genre createGenre(Genre genre);

    /**
     * Returns a Genre object of a record in the database with the given <b>id</b> field
     * @param id Unique identifier for genre
     * @return Information about the genre
     */
    public Optional<Genre> getGenreById(int id);
    
    public Optional<Genre> getGenreByName(String name);

    /**
     * Retrieves all genre records from database
     * @return List of all records
     */
    public List<Genre> getAllGenres();
    
    public void updateGenre(Genre genre);
    
    public List<Genre> sortGenresByName(List<Genre> genres);
}