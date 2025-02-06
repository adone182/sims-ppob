export const Image = ({ imageSrc, altImg = "Logo", className = "" }) => {
  return <img src={imageSrc} alt={altImg} className={`${className}`} />;
};
