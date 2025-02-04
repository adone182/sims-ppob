import { Link } from "react-router-dom";
import Logo from "../../atoms/Logo";

const AuthLayouts = ({ type, title, children }) => {
  return (
    <div className="flex justify-center min-h-screen items-center">
      <div className="w-full max-w-xs">
        <Logo imageSrc="/public/vite.svg" altImg="Logo" />
        <h1 className="text-blue-700 text-3xl font-bold mb-2">{title}</h1>

        {children}

        <p className="text-sm text-center mt-5">
          {type === "login"
            ? "Belum punya akun? registrasi "
            : "Sudah punya akun? login"}

          {type === "login" ? (
            <Link to="/login" className="text-blue-600 font-semibold">
              {" "}
              di sini
            </Link>
          ) : (
            <Link to="/register" className="text-blue-600 font-semibold">
              {" "}
              di sini
            </Link>
          )}
        </p>
      </div>
    </div>
  );
};

export default AuthLayouts;
