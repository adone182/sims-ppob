const Button = ({
  type = "button",
  title = "",
  classname = "",
  children = "Button",
  arialLabel = "",
  onClick = () => {},
}) => {
  return (
    <button
      type={type}
      title={title}
      className={classname}
      onClick={onClick}
      arial-label={arialLabel}
    >
      {children}
    </button>
  );
};

export default Button;
