import { MainLayouts } from "../components/layouts/MainLayouts";
import { TopUpWallet } from "../features/topup/TopUpWallet";

export const TopUp = () => {
  return (
    <MainLayouts>
      <TopUpWallet />
    </MainLayouts>
  );
};
