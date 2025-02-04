import AuthLayouts from "../components/layouts/AuthLayouts";
import FormRegister from "../components/organisms/FormRegister";

const Register = () => {
  return (
    <AuthLayouts title="Lengkapi data untuk membuat akun" type="register">
      <FormRegister />
    </AuthLayouts>
  );
};

export default Register;
