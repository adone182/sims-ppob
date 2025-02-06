import { store } from "../store/store";

const baseUrl = import.meta.env.VITE_API_BASE_URL;

export const fetchSaldo = async () => {
  const token = store.getState().auth.token;

  try {
    const response = await fetch(`${baseUrl}/balance`, {
      method: "GET",
      headers: {
        Accept: "application/json",
        Authorization: `Bearer ${token}`,
      },
    });

    const data = await response.json();

    if (data.status === 0) {
      return data.data.balance;
    } else {
      throw new Error(data.message);
    }
  } catch (error) {
    throw new Error("Terjadi kesalahan saat mengambil saldo");
  }
};
