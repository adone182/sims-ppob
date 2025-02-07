import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  getSaldo,
  setError,
  setLoading,
  topUpSaldo,
} from "../../features/topup/topUpSlice";
import { fetchSaldo } from "../../api";

export const useSaldo = () => {
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

  const toggleBalance = () => setShowBalance(!showBalance);

  return { balance, showBalance, toggleBalance };
};
