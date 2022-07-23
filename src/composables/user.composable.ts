import { AxiosError, AxiosResponse } from "axios";
import { ref } from "vue";
import { UserInterfaceModel } from "@/api/models/User.interface";
import UserService from "@/api/service/User.service";
import ApiFactory from "@/core/factory/ApiFactory";

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
