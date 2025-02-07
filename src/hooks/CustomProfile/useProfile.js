import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchProfile } from "../../api";
import {
  setError,
  setLoading,
  setProfile,
} from "../../features/profile/profileSlice";
import { getToken } from "../../features/auth/authSlice";

const token = useSelector(getToken);
export const useProfile = () => {
  const dispatch = useDispatch();
  const profile = useSelector((state) => state.profile.profile);

  useEffect(() => {
    const getProfile = async () => {
      dispatch(setLoading(true));

      try {
        const data = await fetchProfile();
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

    getProfile();
  }, [dispatch, token]);

  return { profile };
};
