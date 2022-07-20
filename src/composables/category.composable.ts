import { AxiosError, AxiosResponse } from "axios";
import { ref } from "vue";
import { ProblemDetailsInterface } from "@/core/interfaces/ProblemDetails.interface";
import ApiFactory from "@/core/factory/ApiFactory";
import CategoryService from "@/api/service/Category.service";

const categoryService = ApiFactory.get("CategoryService") as CategoryService;

export const useGetAllCategory = () => {
  const data = ref<string[]>([]);
  const error = ref<AxiosError<ProblemDetailsInterface>>();
  const loading = ref<boolean>(false);

  const fetch = async () => {
    loading.value = true;
    try {
      const { data: result } =
        (await categoryService.getAllCategory()) as AxiosResponse<string[]>;
      data.value = result;
    } catch (err) {
      error.value = err as AxiosError<ProblemDetailsInterface>;
      return Promise.reject(err);
    } finally {
      loading.value = false;
    }
  };

  return {
    fetch,
    data,
    error,
    loading,
  };
};
