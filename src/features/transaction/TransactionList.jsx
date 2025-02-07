import { Suspense } from "react";
import { CardHistory } from "../../components/organisms/CardHistory";
import { Button } from "../../components/atoms/Button";
import { useTransactions } from "../../hooks/CustomTransactions/useTransactions";

export const TransactionList = () => {
  const { transactions, loading, handleShowMore } = useTransactions();

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
