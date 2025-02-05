import Logo from "../../atoms/Logo";

const NavbarBrand = ({ imageSrc, altImg }) => {
  return (
    <div className="flex items-center space-x-2">
      <Logo imageSrc={imageSrc} altImg={altImg} />
      <span className="text-gray-700 text-xl font-semibold">SIMS PPOB</span>
    </div>
  );
};

export default NavbarBrand;
