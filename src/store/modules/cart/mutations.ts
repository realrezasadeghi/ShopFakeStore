import { MutationTree } from "vuex";
import { CartState } from "./interface";

export const mutations: MutationTree<CartState> = {
  ADD_TO_CART: (state, payload) => {
    state.cart.push({ ...payload, quantity: 1 });
  },
  INCREAMENT_ITEM_QUANTITY: (state, payload) => {
    const cartItem = state.cart.find((item) => item.id === payload.id);
    if (cartItem) cartItem.quantity++;
  },
  SET_CART: (state, payload) => {
    state.cart = payload;
  },
  SET_CHECKOUT_STATUS: (state, payload) => {
    state.checkoutStatus = payload;
  },
};
