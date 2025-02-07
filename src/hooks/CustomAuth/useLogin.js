// import { useState } from "react";
// import { useDispatch } from "react-redux";
// import { useNavigate } from "react-router-dom";
// import { toast } from "react-toastify";
// import { loginUser } from "../../api";
// import { loginSuccess } from "../../features/auth/authSlice";

// export const useLogin = () => {
//   const [loading, setLoading] = useState(false);
//   const dispatch = useDispatch();
//   const navigate = useNavigate();

//   const login = async (email, password) => {
//     setLoading(true);
//     try {
//       const data = await loginUser(email, password);
//       if (data.status === 0) {
//         dispatch(loginSuccess({ token: data.data.token }));
//         toast.success(data.message);
//         navigate("/");
//       } else {
//         toast.error(data.message);
//       }
//     } catch (error) {
//       toast.error("Terjadi kesalahan saat login.");
//     } finally {
//       setLoading(false);
//     }
//   };

//   return { login, loading };
// };

import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { toast } from "react-toastify";
import { loginUser } from "../../api";
import { loginSuccess } from "../../features/auth/authSlice";

export const useLogin = () => {
  const [formData, setFormData] = useState({ email: "", password: "" });
  const [errorMessage, setErrorMessage] = useState({
    email: null,
    password: null,
  });
  const [isLoading, setIsLoading] = useState(false);

  const navigate = useNavigate();
  const dispatch = useDispatch();

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const validateForm = () => {
    let isValid = true;
    let errors = {};

    if (!formData.email.trim()) {
      errors.email = "Email tidak boleh kosong";
      isValid = false;
    } else if (
      !/^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/.test(formData.email)
    ) {
      errors.email = "Email tidak valid";
      isValid = false;
    }

    if (!formData.password.trim()) {
      errors.password = "Password tidak boleh kosong";
      isValid = false;
    } else if (formData.password.length < 8) {
      errors.password = "Password minimal 8 karakter";
      isValid = false;
    }

    setErrorMessage(errors);
    return isValid;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!validateForm()) return;

    try {
      setIsLoading(true);
      const data = await loginUser(formData);

      if (data.status === 0) {
        dispatch(loginSuccess({ token: data.data.token }));
        toast.success(data.message);
        navigate("/");
      } else {
        setErrorMessage({ global: data.message });
        toast.error(data.message);
      }
    } catch (error) {
      setErrorMessage({ global: error.message });
      toast.error(error.message);
    } finally {
      setIsLoading(false);
    }
  };

  return { formData, handleChange, handleSubmit, errorMessage, isLoading };
};
