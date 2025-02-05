// import MainLayouts from "../components/layouts/MainLayouts";
// import Navbar from "../components/organisms/Navbar";

import { useState } from "react";
import NavbarBrand from "../components/molecules/NavbarBrand";
import { CardProfile } from "../components/organisms/CardProfile";
import CardSaldo from "../components/molecules/CardSaldo";

const Home = () => {
  const [dataProfile, setDataProfile] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);

  return (
    <main>
      <header className="bg-white shadow-sm border-b-1 border-gray-300 fixed top-0 left-0 w-full h-16">
        <nav className="px-20 pt-6 pb-3 flex items-center justify-between">
          <NavbarBrand imageSrc="/src/assets/logo.png" altImg="Logo" />
          <ul className="flex space-x-14">
            <li>Top Up</li>
            <li>Transaction</li>
            <li>Akun</li>
          </ul>
        </nav>
      </header>

      <section className="px-20 pt-24">
        <div className="grid grid-cols-2 gap-2">
          <CardProfile />
          {/* <div
            style={{
              backgroundImage: "url('/src/assets/bg-saldo.png')",
              backgroundSize: "contain",
              backgroundPosition: "right bottom",
              backgroundRepeat: "no-repeat",
              borderRadius: "10px",
              padding: "10px 15px",
              color: "white",
            }}
          >
            <span className="block text-gray-300 text-[14px] my-3">
              Saldo anda
            </span>
            <h2 className="text-2xl my-[13px] font-semibold">Rp .....</h2>
            <div className="flex items-center gap-[7px] my-2 py-[1px]">
              <span className="text-gray-300 text-[12px]">Lihat Saldo</span>
              <button type="button" className="text-white flex items-center">
                <Eye size={12} />
              </button>
            </div>
          </div> */}
          <CardSaldo />
        </div>
      </section>
    </main>
  );
};

export default Home;
