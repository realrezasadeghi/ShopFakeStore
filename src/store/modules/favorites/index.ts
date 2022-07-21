import { Module } from "vuex";
import { FavoriteState, RootState } from "./interface";
import { actions } from "./actions";
import { mutations } from "./mutations";
import { getters } from "./getters";

const state: FavoriteState = { favorites: [] };

const favorites: Module<FavoriteState, RootState> = {
  namespaced: true,
  state,
  actions,
  mutations,
  getters,
};

export default favorites;
