import { ActionTree } from "vuex";
import { CartModel, CartState, RootState } from "./interface";

export const actions: ActionTree<CartState, RootState> = {
  addToCart: ({ commit, state }, product: CartModel) => {
    commit("SET_CHECKOUT_STATUS", null);
    const cartItem = state.cart.find((item) => item.id === product.id);
    if (!cartItem) commit("ADD_TO_CART", product);
    else commit("INCREAMENT_ITEM_QUANTITY", cartItem);
  },
  checkout: ({ commit }) => {
    commit("SET_CHECKOUT_STATUS", "success");
    commit("SET_CART", []);
  },
};
