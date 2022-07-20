import axios, { Axios } from "axios";

class HttpClient {
  private static http: Axios;

  static getInstance(): Axios {
    if (!HttpClient.http) {
      HttpClient.http = axios.create({
        baseURL: process.env.VUE_APP_API_URL,
      });
    }
    return HttpClient.http;
  }
}

export default HttpClient;
