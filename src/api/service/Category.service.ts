import { Axios } from "axios";
import { Response } from "../types/Response.type";
import HttpClient from "../client/HttpClient";

class CategoryService {
  private readonly http: Axios;
  baseUrl = "/products/categories";

  constructor() {
    this.http = HttpClient.getInstance();
  }

  getAllCategory(): Response<Array<string>> {
    return this.http.get(this.baseUrl);
  }
}

export default CategoryService;
