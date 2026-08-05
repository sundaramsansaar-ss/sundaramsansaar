import { products } from "../data/products";

export function getPopularProducts() {
  return products;
}

export function getProductsByTag(tag) {
  return products.filter((product) => product.tags.includes(tag));
}

export function getProductById(id) {
  return products.find((product) => product.id === id);
}
