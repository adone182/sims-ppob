import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  setDataTransactionList,
  setError,
  setLoading,
} from "../../features/transaction/transactionSlice";
import { fetchTransactions } from "../../api";

export const useTransactions = (limit = 5) => {
  const [offset, setOffset] = useState(0);
  const dispatch = useDispatch();
  const { transactions, loading } = useSelector((state) => state.transaction);

  useEffect(() => {
    const loadTransactions = async () => {
      dispatch(setLoading(true));
      try {
        const newTransactions = await fetchTransactions(offset, limit);
        dispatch(setDataTransactionList([...transactions, ...newTransactions]));
      } catch (error) {
        dispatch(setError(error.message));
      } finally {
        dispatch(setLoading(false));
      }
    };
    loadTransactions();
  }, [dispatch, offset]);

  const handleShowMore = () => {
    setOffset((prev) => prev + limit);
  };

  return { transactions, loading, handleShowMore };
};
