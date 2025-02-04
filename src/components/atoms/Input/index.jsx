const Input = ({ name, type, placeholder, required }) => {
  return (
    <input
      name={name}
      id={name}
      type={type}
      placeholder={placeholder}
      className="text-sm border rounded w-full py-2 px-3 text-slate-700"
      required={required}
    />
  );
};

export default Input;
