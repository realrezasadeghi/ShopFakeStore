import { Axios } from "axios";
import {
  UserLoginInterfaceModel,
  UserLoginInterfaceRestul,
} from "../models/User.interface";
import { Response } from "../types/Response.type";
import HttpClient from "../client/HttpClient";

class UserService {
  private readonly http: Axios;
  private baseUrl = "/auth";

  constructor() {
    this.http = HttpClient.getInstance();
  }

  login(body: UserLoginInterfaceModel): Response<UserLoginInterfaceRestul> {
    return this.http.post(`${this.baseUrl}/login`, body);
  }
}

export default UserService;
