import { ActionTree } from "vuex";
import { CartModel, CartState, RootState } from "./interface";

export const actions: ActionTree<CartState, RootState> = {
  addToCart: ({ commit, state }, product: CartModel) => {
    commit("SET_CHECKOUT_STATUS", null);
    const cartItem = state.cart.find((item) => item.id === product.id);
    if (!cartItem) commit("ADD_TO_CART", product);
    else commit("INCREAMENT_ITEM_QUANTITY", cartItem);
  },
  deleteItemCart: ({ commit, state }, product: CartModel) => {
    let cart = [...state.cart];
    cart = cart.filter((item) => item.id !== product.id);
    commit("DELETE_ITEM_CART", cart);
  },
  checkout: ({ commit }) => {
    commit("SET_CHECKOUT_STATUS", "success");
    commit("SET_CART", []);
  },
};
