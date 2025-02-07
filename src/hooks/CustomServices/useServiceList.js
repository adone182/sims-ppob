import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchServices } from "../../api";
import {
  addDataServices,
  setError,
  setLoading,
} from "../../features/service/serviceSlice";

export const useServiceList = (token) => {
  const dispatch = useDispatch();
  const { services, loading } = useSelector((state) => state.service);

  useEffect(() => {
    const getServices = async () => {
      if (!token) return;

      dispatch(setLoading(true));
      try {
        const result = await fetchServices(token);
        if (result.status === 0) {
          dispatch(addDataServices(result.data));
        } else {
          throw new Error("Failed to fetch services");
        }
      } catch (error) {
        dispatch(setError(error.message));
      } finally {
        dispatch(setLoading(false));
      }
    };

    getServices();
  }, [dispatch, token]);

  return { services, loading };
};
