import { ProductInterface } from "@/core/interfaces/Product.interface";

export interface RootState {
  version: string;
}
export interface CartModel extends ProductInterface {
  quantity: number;
}

export interface CartState {
  cart: CartModel[];
  checkoutStatus: string | null;
}
