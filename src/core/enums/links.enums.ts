import { LinkInterface } from "../interfaces/Link.interface";

export const links: LinkInterface[] = [
  { text: "Home", to: "/", icon: null, key: "HomeLink" },
  { text: "Products", to: "/products", icon: null, key: "ProductsLink" },
  { text: "Login", to: "/login", icon: null, key: "LoginLink" },
  { text: null, to: "/cart", icon: "mdi-cart", key: "CartLink" },
  { text: null, to: "/favorites", icon: "mdi-heart", key: "FavoritesLink" },
];
