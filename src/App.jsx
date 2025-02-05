import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/home";
import Login from "./pages/login";
import Register from "./pages/register";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Account from "./pages/account";
import TopUp from "./pages/topUp";

function App() {
  return (
    <Router>
      <ToastContainer position="top-right" autoClose={3000} />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/topup" element={<TopUp />} />
        <Route path="/trancation" element={<h1>Transaction</h1>} />
        <Route path="/account" element={<Account />} />
      </Routes>
    </Router>
  );
}

export default App;
