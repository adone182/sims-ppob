import { User } from "lucide-react";
import { Navbar } from "../../organisms/Navbar";
import { UserInfo } from "../../organisms/UserInfo";

export const MainLayouts = ({ children }) => {
  return (
    <main>
      <Navbar />
      <UserInfo />
      {children}
    </main>
  );
};
