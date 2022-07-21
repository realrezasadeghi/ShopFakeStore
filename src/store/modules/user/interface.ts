export interface RootState {
  version: string;
}
export interface UserModel {
  user: string | null;
  iat: number | null;
}

export interface UserState {
  user?: UserModel;
  isAuthenticated: boolean;
}
