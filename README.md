# Bookworm-Library

## Project Description

This application is an open-source online library platform where users can read books for free. Administrators oversee the operation of the website and manage the inventory of available items. 

## Technologies Used

* Spring MVC
* Hibernate
* React
* React Redux
* PostgreSQL
* Java
* JavaScript

## Features
**Users can:**
* Register 
* Login/Logout 
* Edit their account information 
* View current selection of books 
* Check out a book 
* View previously checked out books
* Search for a specific book

**Admin Users can:**
* View all inventory, authors, and genres
* Add books
* Remove books
* Add users (basic and admin roles)
* Remove users
* View library transactions 

**To-do list:**
Allow users to:
* Recover their password through email 
* Filter books by category
* Request a book be added to inventory
* View recommendations of books they might enjoy
* View “More by this author”

Allow Admin to:
* View usage statistics
* Send messages to users

## Getting Started
In PostgreSQL:
1. Paste the commands found in setup.sql

In your terminal:
1. Copy the repository to your local machine
   * `git clone https://github.com/meganorth14/Bookworm-Library.git`
2. Launch backend server
   * `cd backend`
   * `java -jar backend/bookwormlibrary/target/bookwormlibrary-0.0.1-SNAPSHOT.jar com.revature.bookwormlibrary.BookwormlibraryApplication`
   > Or use the Maven command
   * `mvn spring-boot:run`
4. Launch frontend server
   * `cd frontend`
   * `npm install`
   * `npm start`
   
In your browser:
1. Navigate to http://localhost:3000
2. Enjoy your library experience

## Usage

> After completing the above steps, you will have the ability to create an account (or log in as the default admin) to interact with the site. You can view the newest additions to the site, view the full catalog, add items to your cart, and checkout. You will also be able to view and edit your account as well as view your previous orders. If you logged on as an admin, you can view and manage the users and inventory of the site.
> This site is meant to function as an open source library that will be connected to an external data source that stores the digital books and will send download links to the users to be read on their personal devices.
> You can view how the site should look in resources/images

## Contributors

* Gino Townsend
* Madison Schweikert
* Megan Orth
* Samuel Sholib

## License

This project uses the following license: MIT(<https://opensource.org/licenses/MIT>).
