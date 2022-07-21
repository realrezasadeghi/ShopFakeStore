import jwtDecode from "jwt-decode";

export const decodeToken = (token: string) => {
  const result = jwtDecode(token);
  return result;
};
