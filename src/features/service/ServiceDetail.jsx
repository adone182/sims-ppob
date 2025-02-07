import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { Banknote } from "lucide-react";
import { InputForm } from "../../components/molecules/FormInput";
import { Button } from "../../components/atoms/Button";
import { usePayment } from "../../hooks/CustomTransactions/usePayment";

const schema = z.object({
  service_code: z.string().min(1, "Kode layanan wajib diisi"),
  service_tariff: z.number().positive("Tarif layanan harus lebih dari 0"),
});

export const ServiceDetail = ({ serviceData }) => {
  const { handleTransaction } = usePayment();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: zodResolver(schema),
    defaultValues: {
      service_code: serviceData?.service_code || "",
      service_tariff: serviceData?.service_tariff || 0,
    },
  });

  if (!serviceData) {
    return <div>Detail layanan tidak ditemukan!</div>;
  }

  return (
    <section className="px-20 my-10">
      <span className="text-md font-regular">Pembayaran</span>
      <div className="flex flex-row items-center justify-start gap-4 mt-2 mb-10">
        <img
          src={serviceData.service_icon}
          alt={serviceData.service_code}
          className="w-8 h-8 rounded-sm"
        />
        <span className="text-md font-medium">{serviceData.service_code}</span>
      </div>

      <form onSubmit={handleSubmit(() => handleTransaction(serviceData))}>
        <InputForm
          type="text"
          {...register("service_tariff")}
          value={serviceData.service_tariff.toLocaleString("id-ID")}
          icon={<Banknote size={20} />}
          placeholder="Nominal layanan"
          className="w-full p-2 border rounded-[4px] mb-4 focus:outline-none focus:ring-2 focus:ring-blue-500"
          disabled
        />
        {errors.service_tariff && (
          <span className="text-red-500 text-sm">
            {errors.service_tariff.message}
          </span>
        )}

        <Button
          type="submit"
          classname="w-full p-2 bg-red-500 text-white rounded-[4px]"
        >
          Bayar
        </Button>
      </form>
    </section>
  );
};
