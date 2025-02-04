import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/home";
import Login from "./pages/login";
import Register from "./pages/register";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/topup" element={<h1>Top Up</h1>} />
        <Route path="/trancation" element={<h1>Transaction</h1>} />
        <Route path="/account" element={<h1>Akun</h1>} />
      </Routes>
    </Router>
  );
}

export default App;
