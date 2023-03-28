package com.revature.bookwormlibrary.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import com.revature.bookwormlibrary.entity.User;
import com.revature.bookwormlibrary.service.UserService;

@RestController
public class UserController {
	
	@Autowired
	UserService userService;

	//http://localhost:8080/newUser
	@PostMapping("/newUser")
	public User newUser(@RequestBody User user) {
		
		return userService.createUser(user);
	}
	
	//http://localhost:8080/userbyid/1
	@GetMapping("/userbyid/{id}")
	public User getUser(@PathVariable Integer id) {
		System.out.println(id);
		
		return userService.getUserById(id);
	}
	
	//http://localhost:8080/user?username=morth
	@GetMapping("/user")
	public boolean getUserByUsername(@RequestParam String username) {

		return userService.getUserByUsername(username);
	}
	
	//http://localhost:8080/allusers
	@GetMapping("/allusers")
	public List<User> getUsers() {

		return userService.getAllUsers();
	}
	
	//http://localhost:8080/updateuser
	@PutMapping("/updateuser")
	public void updateUser(@RequestBody User user) {
		
		userService.updateUser(user);
	}
	
	//http://localhost:8080/deleteuser
	@DeleteMapping("/deleteuser/{id}")
	public void deleteUser(@PathVariable int id) {
		
		userService.deleteUser(id);
	}
	
	//http://localhost:8080/login
	@PostMapping("/login")
	public User login(@RequestBody User user) {
		
		return userService.validateUser(user);
	}
}
