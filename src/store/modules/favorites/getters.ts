import { ProductInterface } from "@/core/interfaces/Product.interface";
import { GetterTree } from "vuex";
import { FavoriteState, RootState } from "./interface";

export const getters: GetterTree<FavoriteState, RootState> = {
  getFavorites: (state) => state.favorites,
  getFavoriteById: (state) => (id: number) =>
    state.favorites?.find((item) => item.id === id),
  checkIsFavorite: (state) => (favorite: ProductInterface) =>
    state.favorites?.includes(favorite),
};
