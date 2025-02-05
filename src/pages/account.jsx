import { useState, useEffect } from "react";
import NavbarBrand from "../components/molecules/NavbarBrand";
import { AtSign, LogOut, Pencil, User } from "lucide-react";

const Account = () => {
  const [profile, setProfile] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchProfile = async () => {
      const token = localStorage.getItem("token");
      if (!token) {
        setError("Token tidak ditemukan!");
        setLoading(false);
        return;
      }

      try {
        const response = await fetch(
          "https://take-home-test-api.nutech-integrasi.com/profile",
          {
            method: "GET",
            headers: {
              Accept: "application/json",
              Authorization: `Bearer ${token}`,
            },
          }
        );

        const data = await response.json();
        console.log(data);
        if (!response.ok)
          throw new Error(data.message || "Gagal mengambil data");

        setProfile(data.data);
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };

    fetchProfile();
  }, []);

  return (
    <main>
      <header className="bg-white shadow-sm border-b-1 border-gray-300 fixed top-0 left-0 w-full h-16 z-50">
        <nav className="px-20 pt-6 pb-3 flex items-center justify-between">
          <NavbarBrand imageSrc="/src/assets/logo.png" altImg="Logo" />
          <ul className="flex space-x-14">
            <li>Top Up</li>
            <li>Transaction</li>
            <li>Akun</li>
          </ul>
        </nav>
      </header>

      <section className="px-20 pt-14">
        <div className="flex flex-col items-center justify-center min-h-screen bg-white px-4">
          {/* Profile Picture */}
          <div className="relative">
            <img
              src="/src/assets/pp.png"
              alt="Profile"
              className="w-20 h-20 rounded-full border border-gray-300"
            />
            <button className="absolute bg-white border border-gray-400 bottom-0 right-[-5px] p-1 rounded-full shadow-md">
              <Pencil size={12} className="text-gray-600" />
            </button>
          </div>

          {/* Profile Name */}
          <h2 className="text-xl font-semibold mt-3">
            {profile?.first_name} {profile?.last_name}
          </h2>

          {/* Form */}
          <div className="w-full max-w-md mt-5">
            <div className="mb-3">
              <label className="text-sm text-gray-500">Email</label>
              <div className="flex items-center border border-gray-300 rounded-md p-2">
                <AtSign size={16} className="text-gray-400 mr-2" />
                <input
                  type="email"
                  value={profile?.email}
                  className="w-full outline-none bg-transparent"
                  disabled
                />
              </div>
            </div>

            <div className="mb-3">
              <label className="text-sm text-gray-500">Nama Depan</label>
              <div className="flex items-center border border-gray-300 rounded-md p-2">
                <User size={16} className="text-gray-400 mr-2" />
                <input
                  type="text"
                  value={profile?.first_name}
                  className="w-full outline-none bg-transparent"
                  disabled
                />
              </div>
            </div>

            <div className="mb-3">
              <label className="text-sm text-gray-500">Nama Belakang</label>
              <div className="flex items-center border border-gray-300 rounded-md p-2">
                <User size={16} className="text-gray-400 mr-2" />
                <input
                  type="text"
                  value={profile?.last_name}
                  className="w-full outline-none bg-transparent"
                  disabled
                />
              </div>
            </div>

            {/* Buttons */}
            <button className="w-full border border-red-500 text-red-500 py-2 rounded-md mt-4">
              Edit Profile
            </button>
            <button className="w-full bg-red-500 text-white py-2 rounded-md mt-3 flex items-center justify-center gap-2">
              <LogOut size={18} /> Logout
            </button>
          </div>
        </div>
      </section>
    </main>
  );
};

export default Account;
