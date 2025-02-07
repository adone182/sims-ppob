import { Eye, EyeOff } from "lucide-react";
import bgSaldo from "../../../assets/bg-saldo.png";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  getSaldo,
  setError,
  setLoading,
  topUpSaldo,
} from "../../../features/topup/topUpSlice";
import { fetchSaldo } from "../../../api/index";
import { Button } from "../../atoms/Button";

export const CardSaldo = () => {
  const [showBalance, setShowBalance] = useState(false);
  const balance = useSelector(getSaldo);
  const dispatch = useDispatch();

  useEffect(() => {
    const loadSaldo = async () => {
      dispatch(setLoading(true));

      try {
        const saldo = await fetchSaldo();
        dispatch(topUpSaldo(saldo));
      } catch (error) {
        dispatch(setError(error.message));
      } finally {
        dispatch(setLoading(false));
      }
    };

    loadSaldo();
  }, [dispatch]);

  return (
    <div
      className="relative w-full rounded-xl text-white py-4 px-5 flex flex-col justify-center shadow-md"
      style={{
        backgroundImage: `url(${bgSaldo})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
        minHeight: "100px",
      }}
    >
      <span className="text-gray-300 text-sm">Saldo anda</span>
      <h2 className="text-xl md:text-2xl font-semibold my-2 tracking-widest">
        {showBalance ? `Rp ${balance.toLocaleString("id-ID")}` : "Rp ••••••"}
      </h2>
      <div className="flex items-center gap-[4px]">
        <span className="text-gray-300 text-[11px]">Lihat Saldo</span>
        <Button
          type="button"
          className="text-white flex items-center"
          onClick={() => setShowBalance(!showBalance)}
        >
          {showBalance ? <EyeOff size={14} /> : <Eye size={14} />}
        </Button>
      </div>
    </div>
  );
};

// import { Eye, EyeOff } from "lucide-react";
// import bgSaldo from "../../../assets/bg-saldo.png";
// import { Button } from "../../atoms/Button";
// import { useSaldo } from "../../../hooks/CustomTopUp/useSaldo";

// export const CardSaldo = () => {
//   const { balance, showBalance, toggleBalance } = useSaldo();

//   return (
//     <div
//       className="relative w-full rounded-xl text-white py-4 px-5 flex flex-col justify-center shadow-md"
//       style={{
//         backgroundImage: `url(${bgSaldo})`,
//         backgroundSize: "cover",
//         backgroundPosition: "center",
//         backgroundRepeat: "no-repeat",
//         minHeight: "100px",
//       }}
//     >
//       <span className="text-gray-300 text-sm">Saldo anda</span>
//       <h2 className="text-xl md:text-2xl font-semibold my-2 tracking-widest">
//         {showBalance ? `Rp ${balance.toLocaleString("id-ID")}` : "Rp ••••••"}
//       </h2>
//       <div className="flex items-center gap-[4px]">
//         <span className="text-gray-300 text-[11px]">Lihat Saldo</span>
//         <Button
//           type="button"
//           className="text-white flex items-center"
//           onClick={toggleBalance}
//         >
//           {showBalance ? <EyeOff size={14} /> : <Eye size={14} />}
//         </Button>
//       </div>
//     </div>
//   );
// };
