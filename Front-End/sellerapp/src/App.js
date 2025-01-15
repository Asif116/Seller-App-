import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom"; // Use Routes instead of Switch
import Header from "./Header";
import SellerList from "./SellerList";
import LoginPage from "./LoginForm"; // Import the LoginPage component
import Footer from "./Footer";
import './App.css';

function App() {
  return (
    <Router>
      <Header />
      <Routes>
        <Route path="/" element={<SellerList />} /> {/* Home page route */}
        <Route path="/login" element={<LoginPage />} /> {/* Login page route */}
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;
