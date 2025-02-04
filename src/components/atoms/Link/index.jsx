const Link = ({ to = "/", children = "", className = "" }) => {
  return (
    <Link to={to} className={`text-gray-700 hover:text-blue-500 ${className}`}>
      {children}
    </Link>
  );
};

export default Link;
