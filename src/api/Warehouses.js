import axios from "axios";

const baseURL = "/warehouse";

export const getWarehouses = async () => {
  const res = await axios.get("/warehouses");
  // console.log(res);

  return await res.data.result;
};

export const createWarehouse = async (warehouse) => {
  const res = await axios.post(baseURL, warehouse);
  // console.log(res);

  return await res;
};

// export const getWarehouseByID = async (id) => {
//   const res = await axios.get(baseURL + `/${id}`);
//   console.log(res);
//
//   return await res.data;
// };

export const updateWarehouse = async (id, warehouse) => {
  const res = await axios.put(baseURL + `/${id}`, warehouse);
  console.log(res);

  return await res;
};

export const deleteWarehouse = async (id) => {
  const res = await axios.delete(baseURL + `/${id}`);
  console.log(res);

  return await res;
};
