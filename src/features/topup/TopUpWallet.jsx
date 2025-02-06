import { useState } from "react";
import { Banknote } from "lucide-react";
import { useDispatch, useSelector } from "react-redux";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { InputForm } from "../../components/molecules/FormInput";
import { Button } from "../../components/atoms/Button";
import { getToken } from "../auth/authSlice";
import { setError, setLoading } from "./topUpSlice";

export const TopUpWallet = () => {
  const [amount, setAmount] = useState("");
  const { loading, saldo, error, nominalTopUp } = useSelector(
    (state) => state.topup
  );
  const dispatch = useDispatch();
  const token = useSelector(getToken);

  const handlePresetAmount = (value) => {
    setAmount(value);
  };
  const handleTopUp = async (e) => {
    e.preventDefault();

    if (!amount) return;

    dispatch(setLoading(true));
    try {
      const baseUrl = import.meta.env.VITE_API_BASE_URL;
      const response = await fetch(`${baseUrl}/topup`, {
        method: "POST",
        body: JSON.stringify({ top_up_amount: parseInt(amount) }),
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`,
        },
      });

      const data = await response.json();
      if (data.status === 0) {
        toast.success(data.message);
        dispatch(topUpSaldo(saldo + parseInt(amount)));
      } else {
        dispatch(setError(data.message));
        toast.error(data.message);
      }

      setAmount("");
    } catch (error) {
      dispatch(setError(error.message));
    } finally {
      dispatch(setLoading(false));
    }
  };

  return (
    <div className="px-20 my-10 bg-white">
      <h2 className="text-md font-normal">Silahkan masukkan</h2>
      <h1 className="text-2xl font-bold mb-10">Nominal Top Up</h1>

      <form
        onSubmit={handleTopUp}
        className="grid grid-cols-1 md:grid-cols-5 gap-4"
      >
        <div className="col-span-1 md:col-span-3">
          <InputForm
            type="text"
            name="top_up_amount"
            value={amount.toLocaleString("id-ID")}
            onChange={(e) => setAmount(e.target.value)}
            icon={<Banknote size={20} />}
            placeholder="masukkan nominal Top Up"
            className="w-full p-2 border rounded-[4px] mb-4 focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
          <span className="text-red-500">{error}</span>

          <Button
            type="submit"
            classname={`w-full p-2 text-white rounded-[4px] ${
              loading || !amount
                ? "cursor-not-allowed bg-gray-300"
                : "bg-red-500 hover:bg-red-600"
            }`}
            disabled={loading || !amount}
          >
            {loading ? "Proses..." : "Top Up"}
          </Button>
        </div>

        <div className="col-span-1 md:col-span-2">
          <div className="grid grid-cols-2 md:grid-cols-3 gap-2 mb-4">
            {nominalTopUp.map((value) => (
              <Button
                name="nominal"
                key={value}
                classname="p-2 border rounded-[4px] hover:bg-gray-200"
                onClick={() => handlePresetAmount(value)}
              >
                Rp{value.toLocaleString("id-ID")}
              </Button>
            ))}
          </div>
        </div>
      </form>
    </div>
  );
};
