// import Navbar from "../../organisms/Navbar";

const MainLayouts = ({ children }) => {
  return (
    <main className="flex flex-col items-center justify-center h-screen bg-gray-100">
      {/* <Navbar /> */}

      {children}
    </main>
  );
};

export default MainLayouts;
