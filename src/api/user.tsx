import { store_url } from "./config";

const signIn = async ({
  username,
  password,
}: {
  username: string;
  password: string;
}) => {
  return await fetch(`${store_url}/auth/signin`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ username, password }),
  }).then((res) => res.json());
};

const signUp = async ({
  email,
  username,
  password,
}: {
  email: string;
  username: string;
  password: string;
}) => {
  return await fetch(`${store_url}/auth/signup`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ email, username, password }),
  }).then((res) => res.json());
};

const addProduct = async (product: any) => {
  const res = await fetch("http://192.168.0.20:8080/products", {
    method: "POST",
    mode: "cors",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(product),
  }).then((res) => res.status);
  return res;
};

const deleteProduct = async (_id: string) => {
  const res = await fetch("http://192.168.0.20:8080/products", {
    method: "DELETE",
    mode: "cors",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ _id }),
  }).then((res) => res.status);

  return res;
};
export { signIn, signUp, addProduct, deleteProduct };
