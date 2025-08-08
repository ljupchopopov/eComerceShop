// ProductService.js
import axios from "axios";

class ProductService {
  static getAllProductsService = (limit) => {
    return axios.get(`/products?limit=${limit}&skip=70`); 
  };

  static getSingleProductService = (id) => {
    return axios.get(`/products/${id}`);
  };

  static getAllProductsByCategory = (category) => {
    return axios.get(`/products/category/${category}`);
  };

  static getSearchProducts = (search) => {
    return axios.get(`/products/search?q=${search}`);
  };
}

export default ProductService;
