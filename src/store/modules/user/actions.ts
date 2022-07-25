import { ActionTree } from "vuex";
import { RootState, UserModel, UserState } from "./interface";

export const actions: ActionTree<UserState, RootState> = {
  addUser: ({ commit }, value: UserModel) => {
    commit("ADD_USER", value);
  },
  clearUser: ({ commit }) => {
    commit("CLEAR_USER");
  },
};
