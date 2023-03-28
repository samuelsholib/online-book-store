package com.revature.bookwormlibrary.service;

import java.time.LocalDate;
import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.revature.bookwormlibrary.dao.OrderRepository;
import com.revature.bookwormlibrary.entity.Order;

@Service
public class OrderServiceImpl implements OrderService {

    @Autowired
    OrderRepository repository;

    @Override
    public void createOrder(Order order) {

    	order.setOrderDate(LocalDate.now());
        repository.save(order);
    }

    @Override
    public Optional<Order> getOrderById(Integer id) {
        return repository.findById(id);
    }

    @Override
    public List<Order> getOrderByUserid(Integer id) {
        return repository.getOrderByUserid(id);
    }

    @Override
    public List<Order> getAllOrders() {
        return (List<Order>)repository.findAll();
    }
    
    @Override
    public void deleteOrder(Order order) {
    	repository.delete(order);
    }
}
