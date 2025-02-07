import { store } from "../store/store";

const baseUrl = import.meta.env.VITE_API_BASE_URL;

const token = store.getState().auth.token;
export const fetchSaldo = async () => {
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

export const fetchTopUp = async (amountTopUp) => {
  try {
    const response = await fetch(`${baseUrl}/topup`, {
      method: "POST",
      body: JSON.stringify({ top_up_amount: amountTopUp }),
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`,
      },
    });

    const data = await response.json();

    if (data.status === 0) {
      return data;
    } else {
      throw new Error(data.message);
    }
  } catch (error) {
    throw new Error("Terjadi kesalahan saat melakukan top-up");
  }
};

export const fetchTransactions = async (offset, limit) => {
  try {
    const response = await fetch(
      `${baseUrl}/transaction/history?offset=${offset}&limit=${limit}`,
      {
        method: "GET",
        headers: {
          Accept: "application/json",
          Authorization: `Bearer ${token}`,
        },
      }
    );
    const result = await response.json();

    if (result.status === 0 && result.data?.records) {
      return result.data.records;
    } else {
      throw new Error("Failed to fetch transactions");
    }
  } catch (error) {
    throw new Error(error.message);
  }
};

export const fetchServices = async (token) => {
  try {
    const response = await fetch(`${baseUrl}/services`, {
      method: "GET",
      headers: {
        Accept: "application/json",
        Authorization: `Bearer ${token}`,
      },
    });

    const data = await response.json();

    if (data.status === 0) {
      return data;
    } else {
      throw new Error("Failed to fetch services");
    }
  } catch (error) {
    throw new Error(error.message);
  }
};

export const fetchTransaction = async (serviceCode) => {
  try {
    const response = await fetch(`${baseUrl}/transaction`, {
      method: "POST",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`,
      },
      body: JSON.stringify({ service_code: serviceCode }),
    });

    const data = await response.json();

    if (data.status === 0) {
      return data;
    } else {
      throw new Error(data.message);
    }
  } catch (error) {
    throw new Error("Gagal melakukan transaksi");
  }
};

export const fetchProfile = async () => {
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
      return data.data;
    } else {
      throw new Error(data.message);
    }
  } catch (error) {
    throw new Error("Gagal mengambil data profile");
  }
};

export const fetchBanners = async () => {
  const response = await fetch(`${baseUrl}/banner`, {
    method: "GET",
    headers: {
      Accept: "application/json",
      Authorization: `Bearer ${token}`,
    },
  });

  const data = await response.json();

  return data;
};

export const loginUser = async (credentials) => {
  const response = await fetch(`${baseUrl}/login`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(credentials),
  });

  const data = await response.json();
  return data;
};

export const registerUser = async (formData) => {
  try {
    const { confirm_password, ...rest } = formData;

    const response = await fetch(`${baseUrl}/registration`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(rest),
    });

    return await response.json();
  } catch (error) {
    throw new Error("Gagal terhubung ke server");
  }
};
