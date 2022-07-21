import { GetterTree } from "vuex";
import { FavoriteState, RootState } from "./interface";

export const getters: GetterTree<FavoriteState, RootState> = {
  getFavorites: (state) => state.favorites,
};
