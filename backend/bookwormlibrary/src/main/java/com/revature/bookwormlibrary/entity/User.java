package com.revature.bookwormlibrary.entity;

import java.time.LocalDate;
import java.time.LocalDateTime;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.Table;
/**
 * User class defines user
 */
@Entity
@Table(name="users")
public class User {
	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	@Column(name="user_id",columnDefinition="serial")
    private Integer userid;
	@Column(name="username", length=30)
    private String username;
	@Column(name="password", length=50)
    private String password;
	@Column(name="email", length=255)
    private String email;
	@Column(name="first_name", length=50)
    private String firstName;
	@Column(name="last_name", length=50)
    private String lastName;
	@Column(name="role_type", length=5)
    private String roleType = "user";
	@Column(name="registration_date")
    private LocalDate registrationDate;
	@Column(name="last_login", columnDefinition="TIMESTAMPTZ(2)")
    private LocalDateTime lastLogin;

    //constructors
    public User(){}
    
    public User(Integer userid, String username, String password, String email, String firstName, String lastName,
            String roleType, LocalDate registrationDate, LocalDateTime lastLogin) {
        this.userid = userid;
        this.username = username;
        this.password = password;
        this.email = email;
        this.firstName = firstName;
        this.lastName = lastName;
        this.roleType = roleType;
        this.registrationDate = registrationDate;
        this.lastLogin = lastLogin;
    }

    //getters and setters
    public Integer getUserid() {
        return userid;
    }

    public void setUserid(Integer userid) {
        this.userid = userid;
    }

    public String getUsername() {
        return username;
    }

    public void setUsername(String username) {
        this.username = username;
    }

    public String getPassword() {
        return password;
    }

    public void setPassword(String password) {
        this.password = password;
    }

    public String getEmail() {
        return email;
    }

    public void setEmail(String email) {
        this.email = email;
    }

    public String getFirstName() {
        return firstName;
    }

    public void setFirstName(String firstName) {
        this.firstName = firstName;
    }

    public String getLastName() {
        return lastName;
    }

    public void setLastName(String lastName) {
        this.lastName = lastName;
    }

    public String getRoleType() {
        return roleType;
    }

    public void setRoleType(String roleType) {
        this.roleType = roleType;
    }

    public LocalDate getRegistrationDate() {
        return registrationDate;
    }

    public void setRegistrationDate(LocalDate registrationDate) {
        this.registrationDate = registrationDate;
    }

    public LocalDateTime getLastLogin() {
        return lastLogin;
    }

    public void setLastLogin(LocalDateTime lastLogin) {
        this.lastLogin = lastLogin;
    }

    //toString
    @Override
    public String toString() {
        return "User [email=" + email + ", first_name=" + firstName + ", last_login=" + lastLogin + ", last_name="
                + lastName + ", password=" + password + ", registration_date=" 
                + registrationDate + ", role_type=" + roleType + ", user_id=" + userid + ", username=" + username + "]";
    }

    //hashCode and equals
    @Override
    public int hashCode() {
        final int prime = 31;
        int result = 1;
        result = prime * result + userid;
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
        User other = (User) obj;
        if (userid != other.userid)
            return false;
        return true;
    }
}

