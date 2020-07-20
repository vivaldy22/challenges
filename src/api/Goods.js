import axios from "axios";

export const getGoods = async () => {
  const res = await axios.get("/goods");
  console.log(res);

  return await res.data.result;
};

export const createGoods = async (good) => {
  const res = await axios.post("/good", good);
  console.log(res);

  return await res;
};

export const getGoodByID = async (id) => {
  const res = await axios.get(`/goods/${id}`);
  console.log(res);

  return await res.data.result;
};

export const updateGoods = async (id, good) => {
  const res = await axios.put(`/good/${id}`, good);
  console.log(res);

  return await res;
};

export const deleteGoods = async (id) => {
  const res = await axios.delete(`/good/${id}`);
  console.log(res);

  return await res;
};
