import ProductService from "@/api/service/Product.service";
import CategoryService from "@/api/service/Category.service";
import AuthService from "@/api/service/Auth.service";
import UserService from "@/api/service/User.service";

class ApiFactory {
  static get(name: string) {
    switch (name) {
      case "ProductService":
        return new ProductService();
      case "CategoryService":
        return new CategoryService();
      case "AuthService":
        return new AuthService();
      case "UserService":
        return new UserService();
    }
  }
}

export default ApiFactory;
