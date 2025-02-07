import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
} from "react-router-dom";
import { Home } from "./pages/home";
import { Login } from "./pages/login";
import { Register } from "./pages/register";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { Account } from "./pages/account";
import { TopUp } from "./pages/topUp";
import { Transaction } from "./pages/transaction";
import { Service } from "./pages/service";
import { useSelector } from "react-redux";
import { getIsAuthenticated } from "./features/auth/authSlice";
import { NotFound } from "./pages/notFound";

function App() {
  const isAunthenticated = useSelector(getIsAuthenticated);
  return (
    <Router>
      <ToastContainer position="top-right" autoClose={2000} />
      <Routes>
        <Route
          path="/"
          element={isAunthenticated ? <Home /> : <Navigate to="/login" />}
        />
        <Route
          path="/login"
          element={!isAunthenticated ? <Login /> : <Home />}
        />
        <Route
          path="/register"
          element={!isAunthenticated ? <Register /> : <Home />}
        />
        <Route
          path="/topup"
          element={isAunthenticated ? <TopUp /> : <Navigate to="/login" />}
        />
        <Route
          path="/service/:serviceCode"
          element={isAunthenticated ? <Service /> : <Navigate to="/login" />}
        />
        <Route
          path="/transaction"
          element={
            isAunthenticated ? <Transaction /> : <Navigate to="/login" />
          }
        />
        <Route
          path="/account"
          element={isAunthenticated ? <Account /> : <Navigate to="/login" />}
        />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </Router>
  );
}

export default App;
