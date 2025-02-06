export const Input = ({
  name,
  type,
  placeholder,
  value,
  onChange = () => {},
  disabled = false,
  className = "",
}) => {
  return (
    <input
      name={name}
      id={name}
      type={type}
      value={value}
      placeholder={placeholder}
      onChange={onChange}
      disabled={disabled}
      className={`text-sm border rounded w-full py-2 px-3 text-slate-700 ${className}`}
    />
  );
};
