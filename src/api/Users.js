import axios from "axios";

export const getUsers = async (token) => {
  const res = await axios.get("/users", { headers: { "auth-token": token } });
  // console.log(res);

  return await res.data;
};
