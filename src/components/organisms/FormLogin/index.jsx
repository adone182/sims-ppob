import { AtSign, LockKeyhole } from "lucide-react";
import Button from "../../atoms/Button";
import InputForm from "../../molecules/FormInput";
import { useState } from "react";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { loginSuccess } from "../../../features/auth/authSlice";

const FormLogin = () => {
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });

  const [errorMessage, setErrorMessage] = useState(null);
  const [isLoading, setIsLoading] = useState(false);

  const navigate = useNavigate();
  const dispatch = useDispatch();
  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setErrorMessage(null);

    try {
      setIsLoading(true);
      const baseUrl = import.meta.env.VITE_API_BASE_URL;
      const response = await fetch(`${baseUrl}/login`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });
      const data = await response.json();
      console.log(data);
      if (data.status === 0) {
        const { token } = data.data;
        dispatch(loginSuccess({ token }));
        toast.success(data.message);
        setTimeout(() => navigate("/"), 3000);
      } else {
        setErrorMessage(data.message);
        toast.error(data.message);
      }
    } catch (error) {
      console.log(error);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <InputForm
        type="email"
        name="email"
        placehoder="masukan email anda"
        icon={<AtSign size={20} />}
        onChange={handleChange}
        value={formData.email}
      />
      <InputForm
        type="password"
        name="password"
        placehoder="masukan password anda"
        icon={<LockKeyhole size={20} />}
        onChange={handleChange}
        value={formData.password}
      />

      {errorMessage && <p style={{ color: "red" }}>{errorMessage}</p>}

      <Button
        type="submit"
        disabled={isLoading}
        classname="bg-red-600 w-full text-white p-1 rounded-sm mt-3"
      >
        {isLoading ? "Loading..." : "Login"}
      </Button>
    </form>
  );
};

export default FormLogin;
