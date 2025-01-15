package Seller.SellerTask1.Model;

import jakarta.persistence.*;

@Entity
@Table(name="sellers")
public class Seller {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;
    @Column(name="name")
    private String name;
    @Column(name="rating")
    private int rating;
    @Column(name="review")
    private String review;

    public Seller() {};

    public Seller(Long id, String name, int rating, String review) {
        this.id = id;
        this.name = name;
        this.rating = rating;
        this.review = review;
    }

    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }

    public int getRating() {
        return rating;
    }

    public void setRating(int rating) {
        this.rating = rating;
    }

    public String getReview() {
        return review;
    }

    public void setReview(String review) {
        this.review = review;
    }
}
