package com.revature.bookwormlibrary.dao;

import java.util.Optional;

import org.springframework.data.repository.CrudRepository;
import org.springframework.stereotype.Repository;

import com.revature.bookwormlibrary.entity.Author;

@Repository
public interface AuthorRepository extends CrudRepository<Author, Integer> {
	Optional<Author> findByNameIgnoreCase(String name);
}
