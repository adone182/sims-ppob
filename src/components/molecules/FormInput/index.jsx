// import { useState } from "react";
// import { Eye, EyeOff } from "lucide-react";

// const InputForm = ({ name, type, placeholder, required, icon }) => {
//   const [showPassword, setShowPassword] = useState(false);

//   return (
//     <div className="mb-4 relative">
//       {icon && (
//         <span className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-300 pointer-events-none">
//           {icon}
//         </span>
//       )}

//       <input
//         type={type === "password" && showPassword ? "text" : type}
//         placeholder={placeholder}
//         name={name}
//         required={required}
//         className={`w-full py-2 border rounded-[3px] focus:ring-2 focus:outline-none focus:ring-blue-500
//           placeholder-gray-300 bg-white
//           ${icon ? "pl-12" : "pl-3"} ${type === "password" ? "pr-12" : "pr-3"}`}
//       />

//       {type === "password" && (
//         <button
//           type="button"
//           className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-300"
//           onClick={() => setShowPassword(!showPassword)}
//         >
//           {showPassword ? <EyeOff size={20} /> : <Eye size={20} />}
//         </button>
//       )}
//     </div>
//   );
// };

// export default InputForm;

import { useState } from "react";
import { Eye, EyeOff } from "lucide-react";

const InputForm = ({
  name,
  type,
  placeholder,
  icon,
  error,
  onChange = () => {},
  value = "",
}) => {
  const [showPassword, setShowPassword] = useState(false);

  return (
    <div className="mb-4 relative">
      {icon && (
        <span className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-300 pointer-events-none">
          {icon}
        </span>
      )}

      <input
        onChange={onChange}
        type={type === "password" && showPassword ? "text" : type}
        placeholder={placeholder}
        name={name}
        className={`w-full py-2 border rounded-[3px] focus:ring-2 focus:outline-none focus:ring-blue-500
          placeholder-gray-300 bg-white
          ${icon ? "pl-12" : "pl-3"} ${
          type === "password" ? "pr-12" : "pr-3"
        } ${error ? "border-red-500" : "border-gray-300"}`}
        value={value}
      />

      {type === "password" && (
        <button
          type="button"
          className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-300"
          onClick={() => setShowPassword(!showPassword)}
        >
          {showPassword ? <EyeOff size={20} /> : <Eye size={20} />}
        </button>
      )}

      {error && <span className="text-sm text-red-500">{error}</span>}
    </div>
  );
};

export default InputForm;
