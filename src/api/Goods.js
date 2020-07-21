import axios from "axios";

const baseURL = "/good";

export const getGoods = async () => {
  const res = await axios.get("/goods");
  console.log(res);

  return await res.data.result;
};

export const createGoods = async (good) => {
  const res = await axios.post(baseURL, good);
  console.log(res);

  return await res;
};

export const getGoodByID = async (id) => {
  const res = await axios.get(baseURL + `/${id}`);
  console.log(res);

  return await res.data.result;
};

export const updateGoods = async (id, good) => {
  const res = await axios.put(baseURL + `/${id}`, good);
  console.log(res);

  return await res;
};

export const deleteGoods = async (id) => {
  const res = await axios.delete(baseURL + `/${id}`);
  console.log(res);

  return await res;
};
