import { Axios } from "axios";
import HttpClient from "../client/HttpClient";
import { UserInterfaceModel } from "../models/User.interface";
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
}

export default UserService;
