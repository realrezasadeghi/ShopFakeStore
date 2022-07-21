import { ProductInterface } from "@/core/interfaces/Product.interface";
import { ActionTree } from "vuex";
import { FavoriteState, RootState } from "./interface";

export const actions: ActionTree<FavoriteState, RootState> = {
  addToFavorites: ({ commit, state }, favorite: ProductInterface) => {
    const favorites = state.favorites;

    const favoriteItem = state.favorites?.find(
      (item) => item.id === favorite.id
    );

    console.log(favorite);

    if (!favoriteItem) {
      favorites?.push(favorite);
      commit("ADD_TO_FAVORITES", favorites);
    } else {
      const newFavorites = favorites?.filter((item) => item.id !== favorite.id);
      commit("ADD_TO_FAVORITES", newFavorites);
    }
  },
};
