import axios from "axios";

const baseURL = "/auth";

export const getAuth = async (auth) => {
  const res = await axios.post(baseURL, auth);
  // console.log(res);

  return await res;
};
