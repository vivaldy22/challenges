import axios from "axios";

export const getLocations = async () => {
  const res = await axios.get("/locations");
  return await res.data.result;
};
