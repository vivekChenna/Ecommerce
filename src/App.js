import "./App.css";
import { Routes, Route } from "react-router-dom";
import Body from "./components/Body";
import Header from "./components/Header"; 
import Cart from "./components/Cart";
import Contact from "./components/Contact";
import { useSelector } from "react-redux";
import ErrorPage from "./components/ErrorPage";
import SingleProduct from "./components/SingleProduct";
import AllProducts from "./components/AllProducts";
function App() {
  const darkMode = useSelector((store) => store.app.DarkMode);
  return (
    <div className={darkMode ? "bg-slate-900" : ""}>
      <Header />
      <Routes>
        <Route path="/" element={<Body />} />
        <Route path="/products" element={<AllProducts />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="*" element={<ErrorPage />} />
        <Route path="/products/:id" element={<SingleProduct />} />
        <Route path="/shop" element={<AllProducts />} />
      </Routes>
    </div>
  );
}

export default App;
