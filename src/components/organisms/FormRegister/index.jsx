import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

import InputForm from "../../molecules/FormInput";
import { AtSign, LockKeyhole, User } from "lucide-react";
import Button from "../../atoms/Button";

const FormRegister = () => {
  const [formData, setFormData] = useState({
    email: "",
    first_name: "",
    last_name: "",
    password: "",
    confirm_password: "",
  });
  const [errorMessage, setErrorMessage] = useState(null);
  const [isLoading, setIsLoading] = useState(false);

  const navigate = useNavigate();

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setErrorMessage(null);

    if (formData.password !== formData.confirm_password) {
      setErrorMessage("Konfirmasi password tidak cocok");
      return;
    }

    try {
      setIsLoading(true);
      const baseUrl = import.meta.env.VITE_API_BASE_URL;
      const { confirm_password, ...rest } = { ...formData };

      const response = await fetch(`${baseUrl}/registration`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(rest),
      });

      const data = await response.json();

      if (data.status === 0) {
        toast.success("Registrasi berhasil, silakan login");
        setTimeout(() => navigate("/login"), 3000);
      } else {
        setErrorMessage(data.message || "Terjadi kesalahan");
        toast.error(data.message || "Terjadi kesalahan");
      }
    } catch (error) {
      setErrorMessage("Gagal terhubung ke server");
      toast.error("Gagal terhubung ke server");
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <InputForm
        name="email"
        type="email"
        placeholder="Masukkan email Anda"
        icon={<AtSign size={20} />}
        onChange={handleChange}
        value={formData.email}
      />
      <InputForm
        name="first_name"
        type="text"
        placeholder="Nama depan"
        icon={<User size={20} />}
        onChange={handleChange}
        value={formData.first_name}
      />
      <InputForm
        name="last_name"
        type="text"
        placeholder="Nama belakang"
        icon={<User size={20} />}
        onChange={handleChange}
        value={formData.last_name}
      />
      <InputForm
        name="password"
        type="password"
        placeholder="Buat password"
        icon={<LockKeyhole size={20} />}
        onChange={handleChange}
        value={formData.password}
      />
      <InputForm
        name="confirm_password"
        type="password"
        placeholder="Konfirmasi password"
        icon={<LockKeyhole size={20} />}
        onChange={handleChange}
        value={formData.confirm_password}
      />

      {errorMessage && <p style={{ color: "red" }}>{errorMessage}</p>}

      <Button
        type="submit"
        disabled={isLoading}
        classname="bg-red-600 w-full text-white p-1 rounded-sm mt-3"
      >
        {isLoading ? "Loading..." : "Register"}
      </Button>
    </form>
  );
};

export default FormRegister;
