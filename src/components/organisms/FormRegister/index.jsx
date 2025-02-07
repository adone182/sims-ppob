import { InputForm } from "../../molecules/FormInput";
import { AtSign, LockKeyhole, User } from "lucide-react";
import { Button } from "../../atoms/Button";
import { useRegister } from "../../../hooks/CustomAuth/useRegister";

export const FormRegister = () => {
  const { formData, errorMessage, isLoading, handleChange, handleSubmit } =
    useRegister();

  return (
    <form onSubmit={handleSubmit}>
      <InputForm
        name="email"
        type="email"
        placeholder="Masukkan email Anda"
        icon={<AtSign size={20} />}
        onChange={handleChange}
        value={formData.email}
        error={errorMessage.email}
      />
      {errorMessage.email && (
        <p className="text-red-500 text-end text-sm font-regular mt-[-12px] mb-2">
          {errorMessage.email}
        </p>
      )}

      <InputForm
        name="first_name"
        type="text"
        placeholder="Nama depan"
        icon={<User size={20} />}
        onChange={handleChange}
        value={formData.first_name}
        error={errorMessage.first_name}
      />
      {errorMessage.first_name && (
        <p className="text-red-500 text-end text-sm font-regular mt-[-12px] mb-2">
          {errorMessage.first_name}
        </p>
      )}

      <InputForm
        name="last_name"
        type="text"
        placeholder="Nama belakang"
        icon={<User size={20} />}
        onChange={handleChange}
        value={formData.last_name}
        error={errorMessage.last_name}
      />
      {errorMessage.last_name && (
        <p className="text-red-500 text-end text-sm font-regular mt-[-12px] mb-2">
          {errorMessage.last_name}
        </p>
      )}

      <InputForm
        name="password"
        type="password"
        placeholder="Buat password"
        icon={<LockKeyhole size={20} />}
        onChange={handleChange}
        value={formData.password}
        error={errorMessage.password}
      />
      {errorMessage.password && (
        <p className="text-red-500 text-end text-sm font-regular mt-[-12px] mb-2">
          {errorMessage.password}
        </p>
      )}

      <InputForm
        name="confirm_password"
        type="password"
        placeholder="Konfirmasi password"
        icon={<LockKeyhole size={20} />}
        onChange={handleChange}
        value={formData.confirm_password}
        error={errorMessage.confirm_password}
      />
      {errorMessage.confirm_password && (
        <p className="text-red-500 text-end text-sm font-regular mt-[-12px] mb-2">
          {errorMessage.confirm_password}
        </p>
      )}

      {errorMessage.general && (
        <p className="text-red-500 text-center text-sm font-regular mt-3">
          {errorMessage.general}
        </p>
      )}

      <Button
        type="submit"
        disabled={isLoading}
        classname={`bg-red-600 w-full text-white p-1 rounded-sm mt-3 ${
          isLoading ? "opacity-50 cursor-not-allowed" : ""
        }`}
      >
        {isLoading ? "Loading..." : "Register"}
      </Button>
    </form>
  );
};
