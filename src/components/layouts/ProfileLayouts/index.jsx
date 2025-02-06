import { Navbar } from "../../organisms/Navbar";

export const ProfileLayouts = ({ children }) => {
  return (
    <main>
      <Navbar />
      {children}
    </main>
  );
};
