package com.revature.bookwormlibrary.entity;

import java.time.LocalDate;
import java.util.List;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.ForeignKey;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.JoinColumn;
import javax.persistence.JoinTable;
import javax.persistence.ManyToMany;
import javax.persistence.ManyToOne;
import javax.persistence.Table;

@Entity
@Table(name="orders")
public class Order {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name="order_id",columnDefinition="serial")
    private Integer orderid;
    
    @ManyToOne
    @JoinColumn(
    	name="user_id",
    	foreignKey=@ForeignKey(
    		name="fk_user_id",
    		foreignKeyDefinition="FOREIGN KEY (user_id) REFERENCES users(user_id) ON UPDATE CASCADE ON DELETE CASCADE"
    	)
    )
    private User user;
    
    @Column(name="order_date")
    private LocalDate orderDate;

    @ManyToMany
    @JoinTable(
        name="selection", 
        joinColumns = @JoinColumn(
        	name="order_id",
        	foreignKey=@ForeignKey(
        		name="fk_order_id",
        		foreignKeyDefinition="FOREIGN KEY (order_id) REFERENCES orders(order_id) ON UPDATE CASCADE ON DELETE CASCADE"
        	)
        ),
        inverseJoinColumns = @JoinColumn(
    		name="book_id",
    		foreignKey=@ForeignKey(
    			name="fk_book_id",
    			foreignKeyDefinition="FOREIGN KEY (book_id) REFERENCES books(book_id) ON UPDATE CASCADE ON DELETE CASCADE"
        	)
    	)
    )
    private List<Book> books;

    //constructors
    public Order(){}

    public Order(Integer orderid, User user, LocalDate orderDate, List<Book> books) {
        this.orderid = orderid;
        this.user = user;
        this.orderDate = orderDate;
        this.books = books;
    }

    //getters and setters
    public Integer getOrderid() {
        return orderid;
    }

    public void setOrderid(Integer orderid) {
        this.orderid = orderid;
    }

    public User getUser() {
        return user;
    }

    public void setUser(User user) {
        this.user = user;
    }

    public LocalDate getOrderDate() {
        return orderDate;
    }

    public void setOrderDate(LocalDate orderDate) {
        this.orderDate = orderDate;
    }

    public List<Book> getBooks() {
        return books;
    }

    public void setBooks(List<Book> books) {
        this.books = books;
    }

    //toString
    @Override
    public String toString() {
        return "Order [books=" + books + ", order_date=" + orderDate + ", order_id=" + orderid
                + ", user=" + user + "]";
    }

    //hashCode and equals
    @Override
    public int hashCode() {
        final int prime = 31;
        int result = 1;
        result = prime * result + orderid;
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
        Order other = (Order) obj;
        if (orderid != other.orderid)
            return false;
        return true;
    }
}

