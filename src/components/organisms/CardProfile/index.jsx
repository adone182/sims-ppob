import { useSelector } from "react-redux";
import ImgProfile from "../../../assets/pp.png";
import { Image } from "../../atoms/Image";
import { useEffect, useState } from "react";

export const CardProfile = () => {
  const dataProfile = useSelector((state) => state.profile.profile);
  const [profile, setProfile] = useState(dataProfile);

  useEffect(() => {
    if (dataProfile) {
      setProfile(dataProfile);
    }
  }, [dataProfile]);

  return (
    <div className="flex flex-col items-start p-2 md:p-0">
      <Image
        imageSrc={profile?.profile_image || ImgProfile}
        altImg="Your Profile"
        className="rounded-full w-14 h-14 object-cover"
      />
      <span className="text-gray-700 font-regular mt-2">Selamat Datang,</span>
      {/* Gunakan profile data */}
      <h1 className="text-black text-xl font-semibold mt-1">
        {profile
          ? `${profile?.first_name} ${profile?.last_name}`
          : "Nama Tidak Tersedia"}
      </h1>
    </div>
  );
};
