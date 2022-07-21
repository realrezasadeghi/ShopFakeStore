import { createStore } from "vuex";
import user from "./modules/user";
import favorites from "./modules/favorites";

export default createStore({
  modules: { user, favorites },
});
