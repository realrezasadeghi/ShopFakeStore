import { Axios } from "axios";
import HttpClient from "../client/HttpClient";
import { ProductInterfaceModel } from "../models/Product.interface";
import { Response } from "../types/Response.type";

class ProductService {
  private readonly http: Axios;
  baseUrl = "/products";

  constructor() {
    this.http = HttpClient.getInstance();
  }

  getAllProduct(): Response<ProductInterfaceModel[]> {
    return this.http.get(this.baseUrl);
  }

  getProductByLimit(limit: number): Response<ProductInterfaceModel[]> {
    return this.http.get(`${this.baseUrl}?limit=${limit}`);
  }

  getProductById(id: number): Response<ProductInterfaceModel> {
    return this.http.get(`${this.baseUrl}/${id}`);
  }

  getProductByCategory(category: string): Response<ProductInterfaceModel[]> {
    return this.http.get(`${this.baseUrl}/category/${category}`);
  }
}

export default ProductService;
