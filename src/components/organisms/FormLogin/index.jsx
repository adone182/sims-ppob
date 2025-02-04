import Button from "../../atoms/Button";
import InputForm from "../../molecules/FormInput";

const FormLogin = () => {
  return (
    <form onSubmit={handleSignIn}>
      <InputForm
        type="email"
        name="email"
        placehoder="example@gmail.com"
        title="Email"
        required={true}
      />
      <InputForm
        type="password"
        name="password"
        placehoder="********"
        title="Password"
        required={true}
      />

      <Button classname="bg-blue-700 w-full" children="Masuk" type="submit" />
    </form>
  );
};

export default FormLogin;
