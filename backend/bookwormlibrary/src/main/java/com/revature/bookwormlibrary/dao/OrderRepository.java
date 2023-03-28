package com.revature.bookwormlibrary.dao;

import java.util.List;

import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.CrudRepository;
import org.springframework.stereotype.Repository;

import com.revature.bookwormlibrary.entity.Order;

@Repository
public interface OrderRepository extends CrudRepository<Order, Integer> {

    @Query("SELECT o FROM Order o WHERE o.user.userid = ?1")
    List<Order> getOrderByUserid(Integer id);
}