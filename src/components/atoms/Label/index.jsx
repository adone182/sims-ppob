export const Label = ({ children, htmlFor }) => {
  return (
    <label htmlFor={htmlFor} className="block text-sm text-gray-700 mb-2">
      {children}
    </label>
  );
};
