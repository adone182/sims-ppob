import { Link } from "react-router-dom";
export const Links = ({ to = "/", children = "", className = "" }) => {
  return (
    <Link to={to} className={`text-gray-700 hover:text-blue-500 ${className}`}>
      {children}
    </Link>
  );
};
