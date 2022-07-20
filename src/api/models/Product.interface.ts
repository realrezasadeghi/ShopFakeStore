export interface ProductInterfaceModel {
  /**
   * id product
   */
  id: number;
  /**
   * title product
   */
  title: string;
  /**
   * price product
   */
  price: string;
  /**
   * category product
   */
  category: string;
  /**
   * description product
   */
  description: string;
  /**
   * image product
   */
  image: string;
  /**
   * rating product
   */
  rating: {
    /**
     * rating -> rate product
     */
    rate: number;
    /**
     * rating -> count product
     */
    count: number;
  };
}
