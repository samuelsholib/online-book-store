package com.revature.bookwormlibrary.entity;

import java.util.List;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.ManyToMany;
import javax.persistence.Table;

/**
 * Genre class defines the unique identifier and name of each genre
 */
@Entity
@Table(name="genres")
public class Genre {
	
	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	@Column(name="genre_id",columnDefinition="serial")
    private int genreId;
    private String name;
    
    @ManyToMany(mappedBy="genres")
    private List<Book> books;

    //constructors
    public Genre(){
    	
    }

    public Genre(int genreId, String name) {
        this.genreId = genreId;
        this.name = name;
    }

    //getters and setters
    public int getGenreId() {
        return genreId;
    }

    public void setGenreId(int genreId) {
        this.genreId = genreId;
    }

    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }

    //toString
    @Override
    public String toString() {
        return "Genre [genreId=" + genreId + ", name=" + name + "]";
    }

    // hashCode and equals
    @Override
    public int hashCode() {
        final int prime = 31;
        int result = 1;
        result = prime * result + genreId;
        return result;
    }

    @Override
    public boolean equals(Object obj) {
        if (this == obj)
            return true;
        if (obj == null)
            return false;
        if (getClass() != obj.getClass())
            return false;
        Genre other = (Genre) obj;
        if (genreId != other.genreId)
            return false;
        return true;
    }
    
}

