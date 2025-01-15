package Seller.SellerTask1.Service;

import Seller.SellerTask1.Model.Seller;
import Seller.SellerTask1.Repository.SellerRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class SellerService {

    @Autowired
    private SellerRepository sellerRepository;

    public List<Seller> getAllSellers() {
        return sellerRepository.findAll();
    }

    public List<Seller> searchSellers(String name) {
        return sellerRepository.findByNameContainingIgnoreCase(name);
    }
}