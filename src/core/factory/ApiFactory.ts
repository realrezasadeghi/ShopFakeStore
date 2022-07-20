import ProductService from "@/api/service/Product.service";
import CategoryService from "@/api/service/Category.service";

class ApiFactory {
  static get(name: string) {
    switch (name) {
      case "ProductService":
        return new ProductService();
      case "CategoryService":
        return new CategoryService();
    }
  }
}

export default ApiFactory;
