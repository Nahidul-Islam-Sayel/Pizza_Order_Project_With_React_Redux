import { BrowserRouter, Route, Routes } from "react-router-dom";
import './App.css';
import Card from "./Component/Card/Card";
import Footer from "./Component/Footer/Footer";
import HomePage from './Component/HomePage/HomePage';
import Navbar from "./Component/Navbar/Navbar";
import OrderConfirm from "./Component/OrderConfirm/OrderConfirm";
import OrderFrom from "./Component/OrderFrom.jsx/OrderFrom";
function App() {
  return (
    <BrowserRouter>
    <div className="mb-96">
    <Navbar/>
    <Routes>
    <Route path="" element={<HomePage/>} />
    <Route path="/Card" element={<Card/>} />
    <Route path="/Order" element={<OrderFrom/>} />
    <Route path="/OrderConfirm" element={<OrderConfirm/>} />
    </Routes>
    </div>
    <Footer/>
</BrowserRouter>
  );
}

export default App;
