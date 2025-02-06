import { Banknote } from "lucide-react";
import { InputForm } from "../../components/molecules/FormInput";
import { Button } from "../../components/atoms/Button";

export const ServiceDetail = ({ serviceData }) => {
  console.log(serviceData);
  if (!serviceData) {
    return <div>Detail layanan tidak ditemukan!</div>;
  }
  return (
    <section className="px-20 my-10">
      <span className="text-md font-regular">Pembayaran</span>
      <div className="flex flex-row items-center justify-start gap-4 mt-2 mb-10">
        <img src={serviceData.service_icon} alt="layanan" />
        <span> {serviceData.service_code}</span>
      </div>

      <InputForm
        type="text"
        name="layanan"
        value={serviceData.service_price.toLocaleString("id-ID")}
        icon={<Banknote size={20} />}
        placeholder="nominal layanan"
        className="w-full p-2 border rounded-[4px] mb-4 focus:outline-none focus:ring-2 focus:ring-blue-500"
        readOnly
      />

      <Button
        type="submit"
        classname="w-full p-2 bg-red-500 text-white rounded-[4px]"
      >
        Bayar
      </Button>
    </section>
  );
};
