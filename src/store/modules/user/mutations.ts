import { MutationTree } from "vuex";
import { UserState } from "./interface";

export const mutations: MutationTree<UserState> = {
  ADD_USER: (state, payload) => {
    state.user = payload;
    state.isAuthenticated = true;
  },
  CLEAR_USER: (state) => {
    state.isAuthenticated = false;
    state.user = { user: null, iat: null };
  },
};
