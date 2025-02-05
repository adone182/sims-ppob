import { Eye, EyeOff } from "lucide-react";
import { useState } from "react";

const CardSaldo = () => {
  const [showBalance, setShowBalance] = useState(false);
  return (
    <div
      className="relative w-full rounded-xl text-white py-4 px-5 flex flex-col justify-center shadow-md"
      style={{
        backgroundImage: "url('/src/assets/bg-saldo.png')",
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
        minHeight: "100px",
      }}
    >
      <span className="text-gray-300 text-sm">Saldo anda</span>
      <h2 className="text-xl md:text-2xl font-semibold my-2 tracking-widest">
        {showBalance ? "Rp 0" : "Rp ••••••"}
      </h2>
      <div className="flex items-center gap-[5px]">
        <span className="text-gray-300 text-[11px]">Lihat Saldo</span>
        <button
          type="button"
          className="text-white flex items-center mt-1"
          onClick={() => setShowBalance(!showBalance)}
        >
          {showBalance ? <EyeOff size={12} /> : <Eye size={12} />}
        </button>
      </div>
    </div>
  );
};

export default CardSaldo;
