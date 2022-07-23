import { Axios } from "axios";
import {
  UserLoginInterfaceModel,
  UserLoginInterfaceResult,
} from "../models/User.interface";
import { Response } from "../types/Response.type";
import HttpClient from "../client/HttpClient";

class AuthService {
  private readonly http: Axios;
  private baseUrl = "/auth";

  constructor() {
    this.http = HttpClient.getInstance();
  }

  login(body: UserLoginInterfaceModel): Response<UserLoginInterfaceResult> {
    return this.http.post(`${this.baseUrl}/login`, body);
  }
}

export default AuthService;
