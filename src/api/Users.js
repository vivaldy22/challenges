import axios from "axios";

export const getUsers = async () => {
  const res = await axios.get("/users");
  // console.log(res);

  return await res.data;
};
