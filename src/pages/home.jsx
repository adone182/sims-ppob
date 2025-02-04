// import MainLayouts from "../components/layouts/MainLayouts";
// import Navbar from "../components/organisms/Navbar";

import { useEffect, useState } from "react";
import { fetchData } from "../api/index";
import NavbarBrand from "../components/molecules/NavbarBrand";
import { Profile } from "../components/organisms/Profile";

const Home = () => {
  const [dataProfile, setDataProfile] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);

  useEffect(() => {
    const getData = async () => {
      setIsLoading(true);
      setError(null);

      try {
        const response = await fetchData("profile");
        setDataProfile(response);
      } catch (error) {
        setError(error);
      } finally {
        setIsLoading(false);
      }
    };

    getData();
  }, []);

  return (
    <main>
      <header className="bg-white shadow-sm border-b-0 border-gray-300">
        <nav className="px-60 pt-6 pb-3 flex items-center justify-between">
          <NavbarBrand imageSrc="/public/vite.svg" altImg="Logo" />
          <ul className="flex space-x-14">
            <li>Top Up</li>
            <li>Transaction</li>
            <li>Akun</li>
          </ul>
        </nav>
      </header>

      <section className="px-60" style={{ border: "1px solid red" }}>
        <div className="grid grid-cols-2 gap-2">
          <Profile />
          <Profile />
        </div>
      </section>
    </main>
  );
};

export default Home;
