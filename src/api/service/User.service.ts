import { Axios } from "axios";
import HttpClient from "../client/HttpClient";
import {
  UserInterfaceModel,
  UserRegisterInterfaceModel,
} from "../models/User.interface";
import { Response } from "../types/Response.type";

class UserService {
  baseUrl = "/users";
  private readonly http: Axios;

  constructor() {
    this.http = HttpClient.getInstance();
  }

  getAllUser(): Response<UserInterfaceModel[]> {
    return this.http.get(this.baseUrl);
  }

  addUser(
    body: UserRegisterInterfaceModel
  ): Response<UserRegisterInterfaceModel> {
    return this.http.post(this.baseUrl, body);
  }
}

export default UserService;
