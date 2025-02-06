import { Links } from "../../atoms/Links";

export const NavbarLinks = ({ isActive }) => {
  return (
    <div className="hidden md:flex space-x-10">
      <Links
        to="/topup"
        className={`text-md font-regular hover:text-red-500 ${isActive(
          "/topup"
        )}`}
      >
        Top Up
      </Links>
      <Links
        to="/transaction"
        className={`text-md font-regular hover:text-red-500 ${isActive(
          "/transaction"
        )}`}
      >
        Transaction
      </Links>
      <Links
        to="/account"
        className={`text-md font-regular hover:text-red-500 ${isActive(
          "/account"
        )}`}
      >
        Akun
      </Links>
    </div>
  );
};
