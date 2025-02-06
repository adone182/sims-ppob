import { CardProfile } from "../CardProfile";
import { CardSaldo } from "../CardSaldo";

export const UserInfo = () => {
  return (
    <section className="px-20 pt-24">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-2">
        <CardProfile />
        <CardSaldo />
      </div>
    </section>
  );
};
