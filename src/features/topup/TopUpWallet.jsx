import { Button } from "../../components/atoms/Button";
import { InputForm } from "../../components/molecules/FormInput";
import { Banknote } from "lucide-react";
import { useTopUp } from "../../hooks/CustomTopUp/useTopUp";
import { useTopUpForm } from "../../hooks/CustomTopUp/useTopUpForm";

export const TopUpWallet = () => {
  const { handleTopUp, loading, nominalTopUp } = useTopUp();
  const { register, handleSubmit, setValue, watch, errors, formatAmount } =
    useTopUpForm();

  const handlePresetAmount = (value) => {
    setValue("top_up_amount", value.toString());
  };

  return (
    <div className="px-20 my-10 bg-white">
      <h2 className="text-md font-normal">Silahkan masukkan</h2>
      <h1 className="text-2xl font-bold mb-10">Nominal Top Up</h1>

      <form
        onSubmit={handleSubmit(async (data) => {
          await handleTopUp(data.top_up_amount);
          setValue("top_up_amount", "");
        })}
        className="grid grid-cols-1 md:grid-cols-5 gap-4"
      >
        <div className="col-span-1 md:col-span-3">
          <InputForm
            type="text"
            {...register("top_up_amount")}
            value={watch("top_up_amount").toLocaleString("id-ID") || ""}
            onChange={formatAmount}
            icon={<Banknote size={20} />}
            placeholder="Masukkan nominal Top Up"
            className="w-full p-2 border rounded-[4px] mb-4 focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
          <span className="block text-red-500 text-sm mt-[-17px]">
            {errors.top_up_amount?.message}
          </span>

          <Button
            type="submit"
            classname={`w-full mt-[0.9rem] p-2 text-white rounded-[4px] ${
              loading || !watch("top_up_amount")
                ? "cursor-not-allowed bg-gray-300"
                : "bg-red-500 hover:bg-red-600"
            }`}
            disabled={loading || !watch("top_up_amount")}
          >
            {loading ? "loading..." : "Top Up"}
          </Button>
        </div>

        <div className="col-span-1 md:col-span-2">
          <div className="grid grid-cols-2 md:grid-cols-3 gap-2 mb-4">
            {nominalTopUp.map((value) => (
              <Button
                key={value}
                classname="p-2 border rounded-[4px] hover:bg-gray-200"
                onClick={() => handlePresetAmount(value)}
              >
                Rp{value.toLocaleString("id-ID")}
              </Button>
            ))}
          </div>
        </div>
      </form>
    </div>
  );
};
