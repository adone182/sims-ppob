import { ProfileLayouts } from "../components/layouts/ProfileLayouts";
import { ProfileAccount } from "../features/profile/ProfileAccount";

export const Account = () => {
  return (
    <ProfileLayouts>
      <ProfileAccount />
    </ProfileLayouts>
  );
};
