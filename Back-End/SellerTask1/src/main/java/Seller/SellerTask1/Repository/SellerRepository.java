package Seller.SellerTask1.Repository;

import Seller.SellerTask1.Model.Seller;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public interface SellerRepository extends JpaRepository<Seller, Long> {
    List<Seller> findByNameContainingIgnoreCase(String name);
}

