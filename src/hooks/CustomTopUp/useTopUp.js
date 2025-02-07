import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { useDispatch, useSelector } from "react-redux";
import {
  setError,
  setLoading,
  topUpSaldo,
} from "../../features/topup/topUpSlice";
import { fetchTopUp } from "../../api";

export const useTopUp = () => {
  const dispatch = useDispatch();
  const { saldo, loading, nominalTopUp } = useSelector((state) => state.topup);

  const handleTopUp = async (amount) => {
    const amountTopUp = parseInt((amount || "0").replace(/\D/g, ""), 10);

    dispatch(setLoading(true));
    try {
      const response = await fetchTopUp(amountTopUp);
      if (response.status === 0) {
        toast.success(response.message);
        dispatch(topUpSaldo(saldo + amountTopUp));
      } else {
        dispatch(setError(response.message));
        toast.error(response.message);
      }
    } catch (err) {
      dispatch(setError(err.message));
      toast.error("Terjadi kesalahan");
    } finally {
      dispatch(setLoading(false));
    }
  };

  return {
    handleTopUp,
    loading,
    nominalTopUp,
  };
};
