import { Link } from "react-router-dom";
import Logo from "../../atoms/Logo";
import NavbarBrand from "../../molecules/NavbarBrand";

const AuthLayouts = ({ type, title, children }) => {
  return (
    <div className="flex flex-col md:flex-row min-h-screen">
      {/* Bagian Kiri (Form) */}
      <div className="w-full md:w-1/2 flex justify-center items-center p-0">
        <div className="w-full max-w-xs">
          <div className="flex flex-col items-center text-center">
            <NavbarBrand imageSrc="/src/assets/logo.png" altImg="Logo" />
            <h1 className="text-gray-700 text-xl px-8 font-semibold mb-8 mt-2">
              {title}
            </h1>
          </div>

          {children}

          <p className="text-sm text-center mt-3">
            {type === "login"
              ? "Belum punya akun? registrasi "
              : "Sudah punya akun? login"}

            {type === "login" ? (
              <Link to="/register" className="text-red-600 font-semibold">
                {" "}
                di sini
              </Link>
            ) : (
              <Link to="/login" className="text-red-600 font-semibold">
                {" "}
                di sini
              </Link>
            )}
          </p>
        </div>
      </div>

      {/* Bagian Kanan (Gambar Full Lebar & Tinggi) */}
      <div className="hidden md:block w-full md:w-1/2 h-screen">
        <img
          src="/src/assets/bg-login.png"
          alt="Auth Illustration"
          className="w-full h-full object-fill"
        />
      </div>
    </div>
  );
};

export default AuthLayouts;
