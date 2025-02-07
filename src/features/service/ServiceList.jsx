import { Suspense, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { getToken } from "../auth/authSlice";
import { addDataServices, setError, setLoading } from "./serviceSlice";
import { fetchServices } from "../../api";
import { SkeletonService } from "../../components/atoms/Skeleton/SkeletonService";

export const ServiceList = () => {
  const dispatch = useDispatch();
  const token = useSelector(getToken);
  const { services, error } = useSelector((state) => state.service);

  useEffect(() => {
    const getServices = async () => {
      dispatch(setLoading(true));

      try {
        const result = await fetchServices(token);
        if (result.status === 0) {
          dispatch(addDataServices(result.data));
        } else {
          throw new Error(result.message || "Failed to fetch services");
        }
      } catch (err) {
        dispatch(setError(err.message));
      } finally {
        dispatch(setLoading(false));
      }
    };

    getServices();
  }, [dispatch, token]);

  if (error) return <p className="text-red-500">{error}</p>;

  return (
    <section className="px-20 py-10">
      <Suspense fallback={<SkeletonService />}>
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-6 lg:grid-cols-12 gap-4">
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
        </div>
      </Suspense>
    </section>
  );
};

// import { Suspense } from "react";
// import { Link } from "react-router-dom";
// import { SkeletonService } from "../../components/atoms/Skeleton/SkeletonService";
// import useServiceList from "../../hooks/useServiceList";
// import { useSelector } from "react-redux";
// import { getToken } from "../auth/authSlice";

// export const ServiceList = () => {
//   const token = useSelector();
//   const { services } = useServiceList();

//   return (
//     <section className="px-20 py-10">
//       <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-6 lg:grid-cols-12 gap-4">
//         <Suspense fallback={<SkeletonService />}>
//           {services.length > 0 ? (
//             services.map((service) => (
//               <Link
//                 to={`/service/${service.service_code}`}
//                 key={service.service_code}
//               >
//                 <div className="flex flex-col items-center justify-start space-y-2 bg-white p-2 rounded-md shadow-sm">
//                   <img
//                     src={service.service_icon}
//                     alt={service.service_name}
//                     className="w-12 h-12"
//                   />
//                   <span className="text-center text-gray-600 text-xs font-normal">
//                     {service.service_name}
//                   </span>
//                 </div>
//               </Link>
//             ))
//           ) : (
//             <span className="text-center text-gray-600 text-xs font-normal">
//               Tidak ada layanan yang tersedia
//             </span>
//           )}
//         </Suspense>
//       </div>
//     </section>
//   );
// };
