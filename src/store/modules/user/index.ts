import { Module } from "vuex";
import { RootState, UserState } from "./interface";
import { actions } from "./actions";
import { getters } from "./getters";
import { mutations } from "./mutations";

const state: UserState = {
  user: undefined,
  isAuthenticated: false,
};

const user: Module<UserState, RootState> = {
  namespaced: true,
  state,
  getters,
  actions,
  mutations,
};

export default user;
