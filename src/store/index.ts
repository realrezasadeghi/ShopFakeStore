import { createStore } from "vuex";
import user from "./modules/user";
import favorites from "./modules/favorites";
import cart from "./modules/cart";

export default createStore({
  modules: { user, favorites, cart },
});
