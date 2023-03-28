package com.revature.bookwormlibrary.controller;

import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import com.revature.bookwormlibrary.entity.Order;
import com.revature.bookwormlibrary.service.OrderService;

@RestController
public class OrderController {
    
    @Autowired
    OrderService orderService;

    //http:localhost:8080/newOrder
    @PostMapping("/newOrder")
    public void newOrder(@RequestBody Order order) {

    	orderService.createOrder(order);
    }
    
    //http:localhost:8080/getorder?id=1
    @GetMapping("/getorder")
    public Order getOrderById(@RequestParam Integer id) {
    	
    	Optional<Order> order = orderService.getOrderById(id);
    	
    	if(order.isEmpty()) { 		
    		return null;
    		
    	} else {
    		return order.get();
    	}	
    }
    
    //http:localhost:8080/orders/user/1
    @GetMapping("/orders/user/{id}")
    public List<Order> getOrderByUserid(@PathVariable Integer id) {
    	
    	return orderService.getOrderByUserid(id);
    	
    }
    
    @GetMapping("/orders")
    public List<Order> getOrders(){
        return orderService.getAllOrders();
    }
}