import "./App.css";
import { Routes, Route } from "react-router-dom";
import Body from "./components/Body";
import Header from "./components/Header";
import About from "./components/About";
import Cart from "./components/Cart";
import Contact from "./components/Contact";

function App() {
  return (
    <div className="">
      <Header />
      <Routes>
        <Route path="/" element={<Body />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/cart" element={<Cart />} />
      </Routes>
    </div>
  );
}

export default App;
