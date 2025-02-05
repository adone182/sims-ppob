import { useState } from "react";

const CardTopUp = () => {
  const [amount, setAmount] = useState("");
  const presetAmounts = [10000, 20000, 50000, 100000, 250000, 500000];

  return (
    <div className="bg-white">
      <h2 className="text-lg font-semibold">Silahkan masukkan</h2>
      <h1 className="text-2xl font-bold mb-4">Nominal Top Up</h1>

      <div className="grid grid-cols-5 gap-4">
        <div className="col-span-3">
          <input
            type="text"
            value={amount}
            onChange={(e) => setAmount(e.target.value)}
            placeholder="masukkan nominal Top Up"
            className="w-full p-2 border rounded-[4px] mb-4 focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
          <button
            className="w-full p-2 bg-gray-400 text-white rounded-[4px] cursor-not-allowed"
            disabled
          >
            Top Up
          </button>
        </div>

        <div className="col-span-2">
          <div className="grid grid-cols-3 gap-2 mb-4">
            {presetAmounts.map((value) => (
              <button
                key={value}
                className="p-2 border rounded-[4px] hover:bg-gray-200"
                onClick={() => setAmount(value)}
              >
                Rp{value.toLocaleString("id-ID")}
              </button>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default CardTopUp;
