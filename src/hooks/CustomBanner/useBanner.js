import { useEffect, useState } from "react";
import { fetchBanners } from "../../api";
import { useSelector } from "react-redux";
import { getToken } from "../../features/auth/authSlice";

export const useBanner = () => {
  const token = useSelector(getToken);
  const [bannerData, setBannerData] = useState([]);
  const [error, setError] = useState(null);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    const getBanners = async () => {
      if (!token) {
        setError("Token tidak tersedia");
        return;
      }

      setIsLoading(true);
      setError(null);

      try {
        const data = await fetchBanners();
        if (data.status === 0) {
          setBannerData(data.data);
        } else {
          setError(
            data.message || "Terjadi kesalahan saat mengambil data banner"
          );
        }
      } catch (err) {
        setError(err.message || "Terjadi kesalahan pada server");
      } finally {
        setIsLoading(false);
      }
    };

    getBanners();
  }, [token]);

  return { bannerData, error, isLoading };
};
