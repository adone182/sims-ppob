const Logo = ({
  imageSrc = "../../assets/logo.png",
  altImg = "Logo",
  className = "",
}) => {
  return <img src={imageSrc} alt={altImg} className={`${className}`} />;
};

export default Logo;
