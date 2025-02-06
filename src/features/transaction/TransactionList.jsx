import { Suspense, useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getToken } from "../auth/authSlice";
import { CardHistory } from "../../components/organisms/CardHistory";
import { Button } from "../../components/atoms/Button";
import {
  setDataTransactionList,
  setError,
  setLoading,
} from "./transactionSlice";

export const TransactionList = () => {
  const [offset, setOffset] = useState(0);
  const limit = 5;

  const dispatch = useDispatch();
  const token = useSelector(getToken);
  const { transactions, loading } = useSelector((state) => state.transaction);

  const handleShowMore = () => {
    setOffset((prevOffset) => prevOffset + limit);
  };

  useEffect(() => {
    const fetchTransactions = async () => {
      dispatch(setLoading(true));
      try {
        const baseUrl = import.meta.env.VITE_API_BASE_URL;
        const response = await fetch(
          `${baseUrl}/transaction/history?offset=${offset}&limit=${limit}`,
          {
            method: "GET",
            headers: {
              Accept: "application/json",
              Authorization: `Bearer ${token}`,
            },
          }
        );
        const result = await response.json();

        if (result.status === 0 && result.data?.records) {
          console.log("user transaction ===>", result.data.records);
          dispatch(
            setDataTransactionList([...transactions, ...result.data.records])
          );
        } else {
          throw new Error("Failed to fetch transactions");
        }
      } catch (error) {
        dispatch(setError(error.message));
      } finally {
        dispatch(setLoading(false));
      }
    };

    fetchTransactions();
  }, [dispatch, token, offset]);

  return (
    <div className="px-20 pt-10">
      <h2 className="font-medium text-md mb-5">Semua Transaksi</h2>
      <Suspense fallback={<p>Loading...</p>}>
        {transactions.length > 0 ? (
          transactions.map((tx) => (
            <CardHistory
              key={tx.invoice_number}
              type={tx.transaction_type}
              description={tx.description}
              amount={tx.total_amount}
              createdOn={tx.created_on}
            />
          ))
        ) : (
          <p className="text-gray-500">Belum ada transaksi.</p>
        )}

        {transactions.length > 0 && (
          <Button
            type="button"
            classname="w-full text-red-500 text-sm text-center font-reguler my-5"
            onClick={handleShowMore}
            disabled={loading}
          >
            {loading ? "Loading..." : "Show More"}
          </Button>
        )}
      </Suspense>
    </div>
  );
};
