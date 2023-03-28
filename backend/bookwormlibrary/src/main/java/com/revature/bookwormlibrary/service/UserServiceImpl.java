package com.revature.bookwormlibrary.service;

import java.time.LocalDate;
import java.time.LocalDateTime;
import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.revature.bookwormlibrary.dao.UserRepository;
import com.revature.bookwormlibrary.entity.Order;
import com.revature.bookwormlibrary.entity.User;

@Service
public class UserServiceImpl implements UserService {

	@Autowired
	UserRepository repository;
	@Autowired
	OrderService orderService;
	
	@Override
	public User createUser(User user) {
		
		user.setRegistrationDate(LocalDate.now());
		user.setLastLogin(LocalDateTime.now());
		return repository.save(user);
	}

	@Override
	public User getUserById(Integer id) {
		
		Optional<User> user = repository.findById(id);
		
		if(user.isEmpty()) {
			return null;
			
		} else {
			return user.get();
		}
	}

	@Override
	public boolean getUserByUsername(String username) {
		
		return repository.findUserByUsernameIgnoreCase(username) != null;
	}

	@Override
	public List<User> getAllUsers() {
		
		return (List<User>)repository.findAll();
	}

	@Override
	public void updateUser(User userUpdate) {
		Optional<User> userFound = repository.findById(userUpdate.getUserid());
		System.out.println(userFound);
		if ( userFound.isPresent() ) {
			User user = userFound.get();
			user.setPassword(userUpdate.getPassword());
			user.setEmail(userUpdate.getEmail());
			user.setFirstName(userUpdate.getFirstName());
			user.setLastName(userUpdate.getLastName());
			
			repository.save(user);
		}
		
	}

	@Override
	public void deleteUser(int id) {
		
		if(repository.existsById(id)) {
			User user = repository.findById(id).get();
			List<Order> orders = orderService.getOrderByUserid(id);
			for(Order order:orders) {
				orderService.deleteOrder(order);
			}
			repository.delete(user);
		}
	}

	@Override
	public User validateUser(User u) {
		User user = repository.findUserByUsernameIgnoreCase(u.getUsername());
		
		if(user == null) {
			return null;
		}
		
		if(user.getPassword() == null || !user.getPassword().equals(u.getPassword())) {
			
			return null;
		}
		
		user.setLastLogin(LocalDateTime.now());
		
		repository.save(user);
		
		return user;
	}

}
