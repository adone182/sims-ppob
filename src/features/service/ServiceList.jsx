import { Suspense, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { getToken } from "../auth/authSlice";
import { addDataServices, setError, setLoading } from "./serviceSlice";
import { SkeletonService } from "../../components/atoms/Skeleton/SkeletonService";

export const ServiceList = () => {
  const dispatch = useDispatch();
  const token = useSelector(getToken);
  const { services } = useSelector((state) => state.service);

  useEffect(() => {
    const fetchServices = async () => {
      dispatch(setLoading(true));
      try {
        const baseUrl = import.meta.env.VITE_API_BASE_URL;
        const response = await fetch(`${baseUrl}/services`, {
          method: "GET",
          headers: {
            Accept: "application/json",
            Authorization: `Bearer ${token}`,
          },
        });
        const result = await response.json();
        if (result.status === 0) {
          dispatch(addDataServices(result.data));
        } else {
          throw new Error("Failed to fetch services");
        }
      } catch (error) {
        dispatch(setError(error.message));
      } finally {
        dispatch(setLoading(true));
      }
    };

    fetchServices();
  }, [dispatch, token]);

  return (
    <section className="px-20 py-10">
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-6 lg:grid-cols-12 gap-4">
        <Suspense fallback={<SkeletonService />}>
          {services.length > 0 ? (
            services.map((service) => (
              <Link
                to={`/service/${service.service_code}`}
                key={service.service_code}
              >
                <div className="flex flex-col items-center justify-start space-y-2 bg-white p-2 rounded-md shadow-sm">
                  <img
                    src={service.service_icon}
                    alt={service.service_name}
                    className="w-12 h-12"
                  />
                  <span className="text-center text-gray-600 text-xs font-normal">
                    {service.service_name}
                  </span>
                </div>
              </Link>
            ))
          ) : (
            <span className="text-center text-gray-600 text-xs font-normal">
              Tidak ada layanan yang tersedia
            </span>
          )}
        </Suspense>
      </div>
    </section>
  );
};
