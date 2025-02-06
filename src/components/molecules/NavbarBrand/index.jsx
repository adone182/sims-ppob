import { Link } from "react-router-dom";
import { Image } from "../../atoms/Image";

export const NavbarBrand = ({ to = "/", imageSrc, altImg }) => {
  return (
    <Link to={to} className="flex items-center space-x-2">
      <Image imageSrc={imageSrc} altImg={altImg} />
      <span className="text-gray-600 text-xl font-semibold">SIMS PPOB</span>
    </Link>
  );
};
