import { MutationTree } from "vuex";
import { FavoriteState } from "./interface";

export const mutations: MutationTree<FavoriteState> = {
  ADD_TO_FAVORITES: (state, payload) => {
    state.favorites = payload;
  },
};
