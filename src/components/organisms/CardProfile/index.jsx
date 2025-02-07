import { useDispatch, useSelector } from "react-redux";
import ImgProfile from "../../../assets/pp.png";
import { Image } from "../../atoms/Image";
import { useEffect } from "react";
import {
  setError,
  setLoading,
  setProfile,
} from "../../../features/profile/profileSlice";
import { getToken } from "../../../features/auth/authSlice";

export const CardProfile = () => {
  const dispatch = useDispatch();
  const token = useSelector(getToken);
  const baseUrl = import.meta.env.VITE_API_BASE_URL;

  const profile = useSelector((state) => state.profile.profile);

  useEffect(() => {
    if (!token) {
      console.error("Token tidak tersedia");
      return;
    }

    const fetchProfile = async () => {
      dispatch(setLoading(true));

      try {
        const response = await fetch(`${baseUrl}/profile`, {
          method: "GET",
          headers: {
            Accept: "application/json",
            Authorization: `Bearer ${token}`,
          },
        });

        const data = await response.json();

        if (data.status === 0) {
          dispatch(setProfile(data.data));
        } else {
          dispatch(setError(data.message));
        }
      } catch (err) {
        dispatch(setError(err.message));
      } finally {
        dispatch(setLoading(false));
      }
    };

    fetchProfile();
  }, [dispatch, token]);

  return (
    <div className="flex flex-col items-start p-2 md:p-0">
      <Image
        imageSrc={profile?.profile_image || ImgProfile}
        altImg="Your Profile"
        className="rounded-full w-14 h-14 object-cover"
      />
      <span className="text-gray-700 font-regular mt-2">Selamat Datang,</span>
      <h1 className="text-black text-xl font-semibold mt-1">
        {profile
          ? `${profile?.first_name} ${profile?.last_name}`
          : "Nama Tidak Tersedia"}
      </h1>
    </div>
  );
};

// import ImgProfile from "../../../assets/pp.png";
// import { useProfile } from "../../../hooks/CustomProfile/useProfile";
// import { Image } from "../../atoms/Image";

// export const CardProfile = () => {
//   const { profile } = useProfile();

//   return (
//     <div className="flex flex-col items-start p-2 md:p-0">
//       <Image
//         imageSrc={profile?.profile_image || ImgProfile}
//         altImg="Your Profile"
//         className="rounded-full w-14 h-14 object-cover"
//       />
//       <span className="text-gray-700 font-regular mt-2">Selamat Datang,</span>
//       <h1 className="text-black text-xl font-semibold mt-1">
//         {profile
//           ? `${profile?.first_name} ${profile?.last_name}`
//           : "Nama Tidak Tersedia"}
//       </h1>
//     </div>
//   );
// };
