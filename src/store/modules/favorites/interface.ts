import { ProductInterface } from "@/core/interfaces/Product.interface";

export interface FavoriteState {
  favorites?: ProductInterface[];
}
export interface RootState {
  version: string;
}
