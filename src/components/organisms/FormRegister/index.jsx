import Button from "../../atoms/Button";
import InputForm from "../../molecules/FormInput";

const FormRegister = () => {
  return (
    <form>
      <InputForm
        title="FullName"
        name="fullname"
        type="text"
        placehoder="Please insert your fullname"
        required={true}
      />
      <InputForm
        title="Email"
        name="email"
        type="email"
        placehoder="example@gmail.com"
        required={true}
      />
      <InputForm
        title="Password"
        name="password"
        type="password"
        placehoder="********"
        required={true}
      />
      <InputForm
        title="Confirm Password"
        name="confirm_password"
        type="password"
        placehoder="********"
        required={true}
      />

      {errorMessage && <p className="text-red-500">{errorMessage}</p>}

      <Button
        classname="bg-blue-700 w-full"
        children="Register"
        type="submit"
      />
    </form>
  );
};

export default FormRegister;
