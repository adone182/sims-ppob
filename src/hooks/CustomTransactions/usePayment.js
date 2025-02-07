import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { useDispatch, useSelector } from "react-redux";
import { fetchTransaction } from "../../api";
import {
  reduceSaldo,
  setError,
  setLoading,
} from "../../features/topup/topUpSlice";
import { useNavigate } from "react-router-dom";

export const usePayment = () => {
  const dispatch = useDispatch();
  const saldo = useSelector((state) => state.topup.saldo);
  const navigate = useNavigate();
  const handleTransaction = async (service) => {
    if (saldo < service.service_tariff) {
      toast.error("Saldo tidak cukup untuk transaksi ini.");
      return;
    }

    dispatch(setLoading(true));

    try {
      const response = await fetchTransaction(service.service_code);

      if (response.status === 0) {
        toast.success(response.message);
        dispatch(reduceSaldo(service.service_tariff));
        navigate("/");
      } else {
        dispatch(setError(response.message));
        toast.error(response.message);
      }
    } catch (error) {
      dispatch(setError(error.message));
      toast.error("Terjadi kesalahan saat transaksi.");
    } finally {
      dispatch(setLoading(false));
    }
  };

  return { handleTransaction };
};
