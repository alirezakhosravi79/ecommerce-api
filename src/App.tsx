import { Route, Routes } from "react-router-dom";
import HomePage from "./pages/Home/HomePage";
import Store from "./pages/store/Store";
import Navbar from "./components/navbar/Navbar";
import SearchBar from "./components/search/Searchbar";
import ProductDetail from "./pages/productdetail/ProductDetail";
import Cart from "./pages/Cart";
import ProtectedRoute from "./components/ProtectedRoute";
import Login from "./pages/Login";
import ContactPage from "./pages/contact/ContactUs";

function App() {
  return (
    <>
      <Navbar />
      {/* <SearchBar /> */}
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/store" element={<Store />} />
        <Route path="/login" element={<Login />} />
        <Route path="/contact" element={<ContactPage />} />
        <Route path="/cart" element={<ProtectedRoute><Cart /></ProtectedRoute>} />
        <Route path="/product/:id" element={<ProductDetail />} />
      </Routes>
    </>
  );
}

export default App;
