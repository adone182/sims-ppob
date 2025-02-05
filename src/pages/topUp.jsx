import CardSaldo from "../components/molecules/CardSaldo";
import NavbarBrand from "../components/molecules/NavbarBrand";
import { CardProfile } from "../components/organisms/CardProfile";
import CardTopUp from "../components/organisms/CardTopUp";

const TopUp = () => {
  return (
    <main>
      <header className="bg-white shadow-sm border-b-1 border-gray-300 fixed top-0 left-0 w-full h-16">
        <nav className="px-20 pt-6 pb-3 flex items-center justify-between">
          <NavbarBrand imageSrc="/src/assets/logo.png" altImg="Logo" />
          <ul className="flex space-x-14">
            <li>Top Up</li>
            <li>Transaction</li>
            <li>Akun</li>
          </ul>
        </nav>
      </header>

      <section className="px-20 pt-24">
        <div className="grid grid-cols-2 gap-2">
          <CardProfile />
          <CardSaldo />
        </div>
      </section>

      <section className="px-20 my-10">
        <CardTopUp />
      </section>
    </main>
  );
};

export default TopUp;
