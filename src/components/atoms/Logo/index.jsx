const Logo = ({
  imageSrc = "../../assets/logo.png",
  altImg = "Logo",
  className = "",
}) => {
  return <img src={imageSrc} alt={altImg} className={`h-8 ${className}`} />;
};

export default Logo;
