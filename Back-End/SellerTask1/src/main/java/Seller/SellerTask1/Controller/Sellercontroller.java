package Seller.SellerTask1.Controller;

import Seller.SellerTask1.Model.Seller;
import Seller.SellerTask1.Service.SellerService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/api")
@CrossOrigin(origins = "http://localhost:3000") // Allow frontend access
public class Sellercontroller {

    @Autowired
    private SellerService sellerService;


    @GetMapping("/sellers")
    public List<Seller> getAllSellers() {
        return sellerService.getAllSellers();
    }


    @GetMapping("/sellers/search")
    public List<Seller> searchSellers(@RequestParam String name) {
        return sellerService.searchSellers(name);
    }
}
