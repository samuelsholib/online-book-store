package com.revature.bookwormlibrary.dao;

import org.springframework.data.repository.CrudRepository;
import org.springframework.stereotype.Repository;

import com.revature.bookwormlibrary.entity.User;

@Repository
public interface UserRepository extends CrudRepository<User, Integer> {

	User findUserByUsernameIgnoreCase(String username);
}
