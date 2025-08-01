import axios from "axios";

class ProductService {
  static getAllProductsService = () => {
    return axios.get("/products");
  };
}

export default ProductService;
