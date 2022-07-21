import { GetterTree } from "vuex";
import { RootState, UserState } from "./interface";

export const getters: GetterTree<UserState, RootState> = {
  getUser: (state) => state.user,
  getIsAuthenticated: (state) => state.isAuthenticated,
};
