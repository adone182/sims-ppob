import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";

const topUpSchema = z.object({
  top_up_amount: z
    .string()
    .min(5, "Minimal top up Rp10.000")
    .max(10, "Maksimal top up Rp10.000.000")
    .regex(/^\d+$/, "Hanya boleh angka"),
});

export const useTopUpForm = () => {
  const {
    register,
    handleSubmit,
    setValue,
    watch,
    formState: { errors },
  } = useForm({
    resolver: zodResolver(topUpSchema),
    defaultValues: { top_up_amount: "" },
  });

  const formatAmount = (e) => {
    const rawValue = e.target.value.replace(/\D/g, "");
    setValue("top_up_amount", rawValue);
  };

  return {
    register,
    handleSubmit,
    setValue,
    watch,
    errors,
    formatAmount,
  };
};
