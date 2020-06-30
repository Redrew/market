import { store_url } from "./config";

const getProducts = async () => {
  const docs = await fetch(`${store_url}/products`, {
    method: "GET",
  }).then((res) => res.json());
  console.log(docs);
  return docs;
};

const addProduct = async (product: any) => {
  const res = await fetch(`${store_url}/products`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(product),
  }).then((res) => res.status);
  return res;
};

const deleteProduct = async (_id: string) => {
  const res = await fetch(`${store_url}/products`, {
    method: "DELETE",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ _id }),
  }).then((res) => res.status);

  return res;
};
export { getProducts, addProduct, deleteProduct };
