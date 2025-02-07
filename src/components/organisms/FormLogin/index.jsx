import { AtSign, LockKeyhole } from "lucide-react";
import { Button } from "../../atoms/Button";
import { InputForm } from "../../molecules/FormInput";
import { useLogin } from "../../../hooks/CustomAuth/useLogin";

export const FormLogin = () => {
  const { formData, handleChange, handleSubmit, errorMessage, isLoading } =
    useLogin();

  return (
    <form onSubmit={handleSubmit}>
      <InputForm
        name="email"
        type="email"
        placeholder="Masukkan email Anda"
        icon={<AtSign size={20} />}
        value={formData.email}
        onChange={handleChange}
        error={errorMessage.email}
      />
      {errorMessage.email && (
        <p className="text-red-500 text-end text-sm font-regular mt-[-12px] mb-2">
          {errorMessage.email}
        </p>
      )}
      <InputForm
        name="password"
        type="password"
        placeholder="Masukkan password Anda"
        icon={<LockKeyhole size={20} />}
        value={formData.password}
        onChange={handleChange}
        error={errorMessage.password}
      />
      {errorMessage.password && (
        <p className="text-red-500 text-end text-sm font-regular mt-[-12px] mb-2">
          {errorMessage.password}
        </p>
      )}
      {errorMessage.global && (
        <p className="text-red-500 text-sm font-regular">
          {errorMessage.global}
        </p>
      )}
      <Button
        type="submit"
        disabled={isLoading}
        classname={`bg-red-600 w-full text-white p-1 rounded-sm mt-3 ${
          isLoading ? "opacity-50 cursor-not-allowed" : ""
        }`}
      >
        {isLoading ? "Loading..." : "Login"}
      </Button>
    </form>
  );
};
