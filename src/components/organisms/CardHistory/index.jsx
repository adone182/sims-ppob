import React from "react";
import { Plus, Minus } from "lucide-react";
import dayjs from "dayjs";
import "dayjs/locale/id";

export const CardHistory = ({ type, description, amount, createdOn }) => {
  const formattedDate = dayjs(createdOn).locale("id").format("DD MMMM YYYY");
  const formattedTime = dayjs(createdOn).locale("id").format("HH:mm WIB");

  return (
    <div className="w-full flex justify-between items-center gap-2 py-2 px-5 my-5 border border-gray-300 rounded-md">
      <div className="flex flex-col items-start justify-start">
        <div
          className={`flex flex-row gap-1 items-center justify-start ${
            type === "TOPUP" ? "text-teal-500" : "text-red-500"
          }`}
        >
          <span>
            {type === "TOPUP" ? <Plus size={14} /> : <Minus size={14} />}
          </span>
          <span>Rp. {amount.toLocaleString("id-ID")}</span>
        </div>
        <div className="flex justify-start gap-2 mt-1">
          <span className="text-xs text-gray-300 font-normal">
            {formattedDate}
          </span>
          <span className="text-xs text-gray-300 font-normal">
            {formattedTime}
          </span>
        </div>
      </div>

      <div className="p-2 rounded-md">
        <span className="text-sm text-gray-400 font-normal">{description}</span>
      </div>
    </div>
  );
};
