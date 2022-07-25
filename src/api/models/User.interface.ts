export interface UserLoginInterfaceModel {
  /**
   * username login
   */
  username: string;
  /**
   * password login
   */
  password: string;
}

export interface UserLoginInterfaceResult {
  /**
   * token user
   */
  token: string;
}

export interface UserInterfaceModel {
  /**
   * id user
   */
  id: number;
  /**
   * email user
   */
  email: string;
  /**
   * username user
   */
  username: string;
  /**
   * password user
   */
  password: string;
  /**
   * full name user
   */
  name: {
    /**
     * first name user
     */
    firstname: string;
    /**
     * last name user
     */
    lastname: string;
  };
  /**
   * full address user
   */
  address: {
    /**
     * city user
     */
    city: string;
    /**
     * street user
     */
    street: string;
    /**
     * number user
     */
    number: number;
    /**
     * zipcode user
     */
    zipcode: string;
    /**
     * get location user
     */
    geolocation: {
      /**
       * lat geo location user
       */
      lat: number | string;
      /**
       * long geo location user
       */
      long: number | string;
    };
  };
  /**
   * phone user
   */
  phone: number | string;
}

export interface UserRegisterInterfaceModel {
  /**
   * email user
   */
  email: string;
  /**
   * username user
   */
  username: string;
  /**
   * password user
   */
  password: string;
  /**
   * full name user
   */
  name: {
    /**
     * first name user
     */
    firstname: string;
    /**
     * last name user
     */
    lastname: string;
  };
  /**
   * full address user
   */
  address: {
    /**
     * city user
     */
    city: string;
    /**
     * street user
     */
    street: string;
    /**
     * number user
     */
    number: number;
    /**
     * zipcode user
     */
    zipcode: string;
    /**
     * get location user
     */
    geolocation: {
      /**
       * lat geo location user
       */
      lat: number | string;
      /**
       * long geo location user
       */
      long: number | string;
    };
  };
  /**
   * phone user
   */
  phone: number | string;
}
