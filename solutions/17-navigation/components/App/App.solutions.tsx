import { Routes, Route, Navigate } from "react-router-dom";
import Search from "../Search/Search";
import Product from "../Product/Product";
import ShoppingCart from "../ShoppingCart/ShoppingCart";
import ThankYou from "../ThankYou/ThankYou";

function App() {
  return (
    <>
      <Routes>
        <Route path="/search" element={<Search />} />
        <Route path="/product/:productId/:productName" element={<Product />} />
        <Route path="/product/:productId" element={<Product />} />
        <Route path="/checkout" element={<ShoppingCart />} />
        <Route path="/thank-you" element={<ThankYou />} />
        {/* Redirect to the search page if no matches */}
        <Route path="/" element={<Navigate to="/search" replace />} />
      </Routes>
    </>
  );
}

export default App;
