const Label = ({ title, htmlFor }) => {
  return (
    <label
      htmlFor={htmlFor}
      className="block text-slate-700 text-sm font-bold mb-3"
    >
      {title}
    </label>
  );
};

export default Label;
