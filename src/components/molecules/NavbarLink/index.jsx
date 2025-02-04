import Link from "../../atoms/Link";

const NavbarLinks = () => {
  return (
    <div className="hidden md:flex space-x-6">
      {/* <Link to="/">Home</Link> */}
      <Link to="/topup">Top Up</Link>
      <Link to="/trancation">Transaction</Link>
      <Link to="/account">Akun</Link>
    </div>
  );
};

export default NavbarLinks;
