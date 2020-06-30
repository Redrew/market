import { fetchPayload } from "./fetchPayload";
import { store_url } from "./config";

interface Product {}

export const getProducts = async (storeId: string) => {
  const payload = await fetchPayload(
    `${store_url}/store/${storeId}/product_list`
  );
  payload.data = { products: payload.data, storeId: storeId };
  return payload;
};

export const addProduct = async (
  product: Product,
  storeId: string,
  token: string
) => {
  const payload = await fetchPayload(
    `${store_url}/store/${storeId}/product`,
    {
      method: "POST",
      body: JSON.stringify(product),
    },
    token
  );
  console.log(payload);
  return payload;
};

export const deleteProduct = async (
  productId: string,
  storeId: string,
  token: string
) => {
  const payload = await fetchPayload(
    `${store_url}/store/${storeId}/product`,
    {
      method: "DELETE",
      body: JSON.stringify({ productId }),
    },
    token
  );
  return payload;
};

export const verifyLogin = async (token: string) => {
  return await fetchPayload(`${store_url}/auth/user_details`, {method: "POST"})
};

export const login = async (username: string, password: string) => {
  return await fetchPayload(`${store_url}/auth/signin`, {
    method: "POST",
    body: JSON.stringify({ username, password }),
  });
};

export const register = async (
  email: string,
  username: string,
  password: string
) => {
  return await fetchPayload(`${store_url}/auth/signup`, {
    method: "POST",
    body: JSON.stringify({ email, username, password }),
  });
};
