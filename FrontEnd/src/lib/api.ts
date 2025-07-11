import axios from "axios";

const URL = process.env.BASE_API_URL;
if (!URL) {
  throw new Error("BASE_API_URL is not defined in environment variables.");
}

export async function GetAllSummaries() {
  try {
    const { data } = await axios.get(`${URL}/summary`);
    if (!data) {
      throw new Error("No data received from the server.");
    }
    return data;
  } catch (error) {
    if (axios.isAxiosError(error)) {
      throw new Error("Request failed");
    } else {
      throw new Error("Unexpected error");
    }
  }
}

export async function GetOneSummary(url: string, user: string) {
  try {
    const postResponse = await axios.post(`${URL}/scrape/url/`, {
      url: url,
      user: user,
    });
    const req = postResponse.data;
    if (!req) {
      throw new Error("No data received from the server.");
    }

    const getResponse = await axios.get(`${URL}/summary/${req._id}`);
    const res = getResponse.data;
    if (!res) {
      throw new Error("No data received from the server.");
    }
    return res;
  } catch (error) {
    if (axios.isAxiosError(error)) {
      throw new Error(error.response?.data?.message || "Request failed");
    } else {
      throw new Error("Unexpected error");
    }
  }
}
