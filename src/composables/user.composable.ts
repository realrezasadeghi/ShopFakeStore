import { AxiosError, AxiosResponse } from "axios";
import { ref } from "vue";
import {
  UserInterfaceModel,
  UserRegisterInterfaceModel,
} from "@/api/models/User.interface";
import UserService from "@/api/service/User.service";
import ApiFactory from "@/core/factory/ApiFactory";
import { ProblemDetailsInterface } from "@/core/interfaces/ProblemDetails.interface";

const userService = ApiFactory.get("UserService") as UserService;

export const useGetAllUser = () => {
  const data = ref<UserInterfaceModel[]>([]);
  const loading = ref<boolean>(false);
  const error = ref<AxiosError>();

  const fetch = async () => {
    loading.value = true;
    try {
      const { data: result } =
        (await userService.getAllUser()) as AxiosResponse<UserInterfaceModel[]>;
      data.value = result;
    } catch (err) {
      error.value = err as AxiosError;
    } finally {
      loading.value = false;
    }
  };

  return {
    data,
    loading,
    error,
    fetch,
  };
};

export const useAddUser = () => {
  const data = ref<UserRegisterInterfaceModel>();
  const loading = ref<boolean>();
  const error = ref<AxiosError>();

  const submitAddUser = (body: UserRegisterInterfaceModel) => {
    loading.value = true;
    return new Promise((resolve, reject) => {
      userService
        .addUser(body)
        .then(
          (
            response:
              | AxiosResponse<UserRegisterInterfaceModel>
              | AxiosError<ProblemDetailsInterface>
          ) => {
            if ("data" in response) {
              data.value = response.data;
              resolve(response.data);
            }
          }
        )
        .catch((err: AxiosError) => {
          error.value = err;
          reject(err);
        })
        .finally(() => (loading.value = false));
    });
  };

  return {
    data,
    loading,
    error,
    submitAddUser,
  };
};
