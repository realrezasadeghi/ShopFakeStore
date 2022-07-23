import { GetterTree } from "vuex";
import { CartState, RootState } from "./interface";

export const getters: GetterTree<CartState, RootState> = {
  getCart: (state) => state.cart,
  getCartTotalPrice: (state) => {
    return state.cart.reduce((total, product) => {
      return total + +product.price * product.quantity;
    }, 0);
  },
  getCartLenght: (state) => state.cart.length,
};
