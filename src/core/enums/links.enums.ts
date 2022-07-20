import { LinkInterface } from "../interfaces/Link.interface";

export const links: LinkInterface[] = [
  { text: "Home", to: "/", icon: "", key: "HomeLink" },
  { text: "Products", to: "/products", icon: "", key: "ProductsLink" },
  { text: "Login", to: "/login", icon: "", key: "LoginLink" },
  { text: "", to: "/cart", icon: "mdi-cart", key: "CartLink" },
  { text: "", to: "/favorites", icon: "mdi-heart", key: "FavoritesLink" },
];
