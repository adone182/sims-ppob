export const CardProfile = () => {
  return (
    <div className="flex flex-col items-start p-2 md:p-0">
      <img
        src="/src/assets/pp.png"
        alt=""
        className="rounded-full w-14 h-14 object-cover"
      />
      <span className="text-gray-700 font-regular mt-2">Selamat Datang,</span>
      <h1 className="text-black text-xl font-semibold mt-1">
        Kristanto Wibowo
      </h1>
    </div>
  );
};
