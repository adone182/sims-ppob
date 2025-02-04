import AuthLayouts from "../components/layouts/AuthLayouts";
import FormRegister from "../components/organisms/FormRegister";

const Login = () => {
  return (
    <AuthLayouts title="Lengkapi data untuk membuat akun" type="register">
      <FormRegister />
    </AuthLayouts>
  );
};

export default Login;
