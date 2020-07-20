import axios from "axios";

export const getWarehouses = async () => {
  const res = await axios.get("/warehouses");
  console.log(res);

  return await res.data.result;
};

export const createWarehouses = async (warehouse) => {
  const res = await axios.post("/warehouse", warehouse);
  console.log(res);

  return await res;
};

export const getWarehouseByID = async (id) => {
  const res = await axios.get(`/warehouse/${id}`);
  console.log(res);

  return await res.data.result;
};

export const updateWarehouse = async (id, warehouse) => {
  const res = await axios.put(`/warehouse/${id}`, warehouse);
  console.log(res);

  return await res;
};

export const deleteWarehouse = async (id) => {
  const res = await axios.delete(`/warehouse/${id}`);
  console.log(res);

  return await res;
};
