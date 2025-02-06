import { AuthLayouts } from "../components/layouts/AuthLayouts";
import { FormLogin } from "../components/organisms/FormLogin";

export const Login = () => {
  return (
    <AuthLayouts title="Masuk atau buat akun untuk memulai" type="login">
      <FormLogin />
    </AuthLayouts>
  );
};
