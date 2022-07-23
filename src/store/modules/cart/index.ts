import { Module } from "vuex";
import { CartState, RootState } from "./interface";
import { actions } from "./actions";
import { getters } from "./getters";
import { mutations } from "./mutations";
const state: CartState = {
  cart: [],
  checkoutStatus: null,
};
const cart: Module<CartState, RootState> = {
  namespaced: true,
  state,
  getters,
  mutations,
  actions,
};
export default cart;
