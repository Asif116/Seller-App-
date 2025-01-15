import React, { useState, useEffect } from "react";

function SellerList() {
  const [sellers, setSellers] = useState([]);
  const [search, setSearch] = useState("");

  const fetchSellers = async () => {
    try {
      const response = await fetch("http://localhost:8080/api/sellers");
      const data = await response.json();
      setSellers(data);
    } catch (error) {
      console.error("Failed to fetch sellers:", error);
    }
  };

  useEffect(() => {
    fetchSellers();
  }, []);

  const filteredSellers = sellers.filter((seller) =>
    seller.name.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div className="container mt-4">
      <h3 className="text-center">Seller List</h3>
      <input
        type="text"
        className="form-control mb-3"
        placeholder="Search sellers..."
        value={search}
        onChange={(e) => setSearch(e.target.value)}
      />
      <ul className="list-group">
  {(() => {
    if (filteredSellers.length > 0) {
      return filteredSellers.map((seller) => (
        <li key={seller.id} className="list-group-item">
          <strong>{seller.name}</strong> - {seller.rating}/5
          <p>{seller.review}</p>
        </li>
      ));
    } else {
      return (
        <li className="list-group-item text-center">No sellers found!</li>
      );
    }
  })()}
</ul>

    </div>
  );
}

export default SellerList;
