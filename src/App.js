import logo from "./logo.svg";
import { Products } from "./components/Products";
import { Routes } from "react-router";
import { Route, BrowserRouter as Router } from "react-router-dom";
import "./App.css";
import { ProductsCreate } from "./components/ProductsCreate";
import { Orders } from "./components/Orders";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Products />} />
        <Route path="/create" element={<ProductsCreate />} />
        <Route path="/orders" element={<Orders />} />
      </Routes>
    </Router>
  );
}

export default App;
