import axios from "axios";

class ProductService {
  static getAllProductsService = () => {
    return axios.get("/products?limit=30&skip=70");
  };

  static getSingleProductService = (id) => {
    return axios.get(`/products/${id}`)
  }
}

export default ProductService;
