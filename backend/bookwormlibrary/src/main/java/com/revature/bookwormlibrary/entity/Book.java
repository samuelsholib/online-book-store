package com.revature.bookwormlibrary.entity;

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
import javax.persistence.Table;

/**
 * Book class contains all information about an individual book
 */
@Entity
@Table(name="books")
public class Book {
	
	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name="book_id",columnDefinition="serial")
    private int bookId;
    @Column(nullable=false)
    private String isbn13;
    private String title;
    private int pages;
    private String publisher;
    @Column(name="publish_year")
    private int publishYear;
    @Column(columnDefinition = "text")
    private String description;
    private String cover;
    
    @ManyToMany(mappedBy="books")
    private List<Order> orders;
    
    @ManyToMany
    @JoinTable(
    	name="credit",
		joinColumns = @JoinColumn(
			name="book_id",
			foreignKey=@ForeignKey(
				name="fk_book_id",
				foreignKeyDefinition="FOREIGN KEY (book_id) REFERENCES books(book_id) ON UPDATE CASCADE ON DELETE CASCADE"
    		)
	    ),
    	inverseJoinColumns = @JoinColumn(
    		name="author_id",
    		foreignKey=@ForeignKey(
				name="fk_author_id",
				foreignKeyDefinition="FOREIGN KEY (author_id) REFERENCES authors(author_id) ON UPDATE CASCADE ON DELETE CASCADE"
	    	)
    	)
    )
    private List<Author> authors;
    
    @ManyToMany
    @JoinTable(
    	name="category",
    	joinColumns = @JoinColumn(
			name="book_id",
			foreignKey=@ForeignKey(
				name="fk_book_id",
				foreignKeyDefinition="FOREIGN KEY (book_id) REFERENCES books(book_id) ON UPDATE CASCADE ON DELETE CASCADE"
    		)
    	),
    	inverseJoinColumns = @JoinColumn(
    		name="genre_id",
    		foreignKey=@ForeignKey(
				name="fk_genre_id",
				foreignKeyDefinition="FOREIGN KEY (genre_id) REFERENCES genres(genre_id) ON UPDATE CASCADE ON DELETE CASCADE"
    		)
    	)
    )
    private List<Genre> genres;

    //constructors
    public Book(){
    	
    }

    public Book(int bookId, String isbn13, String title, int pages, String publisher, int publishYear,
            String description, String cover, List<Author> authors, List<Genre> genres) {
        this.bookId = bookId;
        this.isbn13 = isbn13;
        this.title = title;
        this.pages = pages;
        this.publisher = publisher;
        this.publishYear = publishYear;
        this.description = description;
        this.cover = cover;
        this.authors = authors;
        this.genres = genres;
    }

    //getters and setters
    public int getBookId() {
        return bookId;
    }

    public void setBookId(int bookId) {
        this.bookId = bookId;
    }

    public String getISBN13() {
        return isbn13;
    }

    public void setISBN13(String isbn13) {
        this.isbn13 = isbn13;
    }

    public String getTitle() {
        return title;
    }

    public void setTitle(String title) {
        this.title = title;
    }

    public int getPages() {
        return pages;
    }

    public void setPages(int pages) {
        this.pages = pages;
    }

    public String getPublisher() {
        return publisher;
    }

    public void setPublisher(String publisher) {
        this.publisher = publisher;
    }

    public int getPublishYear() {
        return publishYear;
    }

    public void setPublishYear(int publishYear) {
        this.publishYear = publishYear;
    }

    public String getDescription() {
        return description;
    }

    public void setDescription(String description) {
        this.description = description;
    }

    public String getCover() {
        return cover;
    }

    public void setCover(String cover) {
        this.cover = cover;
    }

    public List<Author> getAuthors() {
        return authors;
    }

    public void setAuthors(List<Author> authors) {
        this.authors = authors;
    }

    public List<Genre> getGenres() {
        return genres;
    }

    public void setGenres(List<Genre> genres) {
        this.genres = genres;
    }
    
    //toString
    @Override
	public String toString() {
		return "Book [bookId=" + bookId + ", isbn13=" + isbn13 + ", title=" + title + ", pages=" + pages
				+ ", publisher=" + publisher + ", publishYear=" + publishYear + ", description=" + description
				+ ", cover=" + cover + ", orders=" + orders + ", authors=" + authors + ", genres=" + genres + "]";
	}

	//hashCode
    @Override
    public int hashCode() {
        final int prime = 31;
        int result = 1;
        result = prime * result + bookId;
        return result;
    }
    
    //equals
    @Override
    public boolean equals(Object obj) {
        if (this == obj)
            return true;
        if (obj == null)
            return false;
        if (getClass() != obj.getClass())
            return false;
        Book other = (Book) obj;
        if (bookId != other.bookId)
            return false;
        return true;
    }
    
}
