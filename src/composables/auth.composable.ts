import {
  UserLoginInterfaceModel,
  UserLoginInterfaceResult,
} from "@/api/models/User.interface";
import AuthService from "@/api/service/Auth.service";
import ApiFactory from "@/core/factory/ApiFactory";
import { ProblemDetailsInterface } from "@/core/interfaces/ProblemDetails.interface";
import { AxiosError, AxiosResponse } from "axios";
import { ref } from "vue";

const authService = ApiFactory.get("AuthService") as AuthService;

export const useLogin = () => {
  const token = ref<string | null>(null);
  const loading = ref<boolean>(false);
  const error = ref<AxiosError | null>(null);

  const submitLogin = async (body: UserLoginInterfaceModel) => {
    loading.value = true;

    return new Promise((resolve, reject) => {
      authService
        .login(body)
        .then(
          (
            response:
              | AxiosResponse<UserLoginInterfaceResult>
              | AxiosError<ProblemDetailsInterface>
          ) => {
            if ("data" in response) {
              token.value = response.data.token;
              resolve(response.data);
            }
          }
        )
        .catch((err: AxiosError) => {
          error.value = err;
          reject(err);
        })
        .finally(() => {
          loading.value = false;
        });
    });
  };

  return {
    token,
    loading,
    error,
    submitLogin,
  };
};
