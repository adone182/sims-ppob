const baseUrl = import.meta.env.ViTE_API_BASE_URL;

export const fetchData = async (endpoint) => {
  try {
    const response = await fetch(`${baseUrl}/${endpoint}`);
    const data = await response.json();
    return data;
  } catch (error) {
    console.error(error);
  }
};
