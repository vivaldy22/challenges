import axios from "axios";

const baseURL = "/good";

export const getProducts = async () => {
  const res = await axios.get("/products");
  // console.log(res);

  return await res.data;
};

export const createProducts = async (product) => {
  const res = await axios.post(baseURL, product);
  // console.log(res);

  return await res;
};

// export const getProductByID = async (id) => {
//   const res = await axios.get(baseURL + `/${id}`);
//   console.log(res);
//
//   return await res.data;
// };
//
// export const updateProducts = async (id, product) => {
//   const res = await axios.put(baseURL + `/${id}`, product);
//   console.log(res);
//
//   return await res;
// };
//
// export const deleteProducts = async (id) => {
//   const res = await axios.delete(baseURL + `/${id}`);
//   console.log(res);
//
//   return await res;
// };
