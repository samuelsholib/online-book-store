package com.revature.bookwormlibrary.service;
import java.util.List;
import java.util.Optional;

import com.revature.bookwormlibrary.entity.Order;


public interface OrderService {
    /**
     * Creates new order record in database
     * @param order Information about order
     */
    public void createOrder(Order order);

    /**
     * Retrieves specific order from database
     * @param id Unique order identifier
     * @return Order details
     */
    public Optional<Order> getOrderById(Integer id);

    /**
     * Retrieves orders for specific user from database
     * @param id User identifier
     * @return List of all orders for a user
     */
    public List<Order> getOrderByUserid(Integer id);

    /**
     * Retrieves all order records from database
     * @return List of all records
     */
    public List<Order> getAllOrders();

	void deleteOrder(Order order);
}