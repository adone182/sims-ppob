import { MainLayouts } from "../components/layouts/MainLayouts";
import { TransactionList } from "../features/transaction/TransactionList";

export const Transaction = () => {
  return (
    <MainLayouts>
      <TransactionList />
    </MainLayouts>
  );
};
