import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import { registerUser } from "../../api";

export const useRegister = () => {
  const [formData, setFormData] = useState({
    email: "",
    first_name: "",
    last_name: "",
    password: "",
    confirm_password: "",
  });

  const [errorMessage, setErrorMessage] = useState({
    email: null,
    first_name: null,
    last_name: null,
    password: null,
    confirm_password: null,
  });
  const [isLoading, setIsLoading] = useState(false);
  const navigate = useNavigate();

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

    if (!formData.first_name.trim()) {
      errors.first_name = "Nama depan tidak boleh kosong";
      isValid = false;
    }

    if (!formData.last_name.trim()) {
      errors.last_name = "Nama belakang tidak boleh kosong";
      isValid = false;
    }

    if (!formData.password.trim()) {
      errors.password = "Password tidak boleh kosong";
      isValid = false;
    } else if (formData.password.length < 8) {
      errors.password = "Password minimal 8 karakter";
      isValid = false;
    }

    if (!formData.confirm_password.trim()) {
      errors.confirm_password = "Konfirmasi password tidak boleh kosong";
      isValid = false;
    } else if (formData.password !== formData.confirm_password) {
      errors.confirm_password = "Konfirmasi password tidak cocok";
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
      const data = await registerUser(formData);

      if (data.status === 0) {
        toast.success(data.message);
        navigate("/login");
      } else {
        setErrorMessage({ global: data.message || "Terjadi kesalahan" });
        toast.error(data.message || "Terjadi kesalahan");
      }
    } catch (error) {
      setErrorMessage({ global: error.message });
      toast.error(error.message);
    } finally {
      setIsLoading(false);
    }
  };

  return { formData, errorMessage, isLoading, handleChange, handleSubmit };
};
