import Input from "../../atoms/Input";
import Label from "../../atoms/Label";

const InputForm = ({ name, title, type, placehoder, required }) => {
  return (
    <div className="mb-6">
      <Label htmlFor={name} title={title} />
      <Input
        type={type}
        placeholder={placehoder}
        name={name}
        required={required}
      />
    </div>
  );
};

export default InputForm;
