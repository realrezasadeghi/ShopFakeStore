import { AxiosError, AxiosResponse } from "axios";
import { ref } from "vue";
import { ProductInterfaceModel } from "@/api/models/Product.interface";
import { ProblemDetailsInterface } from "@/core/interfaces/ProblemDetails.interface";
import ApiFactory from "@/core/factory/ApiFactory";
import ProductService from "@/api/service/Product.service";

const productService = ApiFactory.get("ProductService") as ProductService;

export const useGetAllProduct = () => {
  const data = ref<ProductInterfaceModel[]>([]);
  const error = ref<AxiosError<ProblemDetailsInterface>>();
  const loading = ref<boolean>(false);

  const fetch = async () => {
    loading.value = true;
    try {
      const { data: result } =
        (await productService?.getAllProduct()) as AxiosResponse<
          ProductInterfaceModel[]
        >;
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

export const useGetProductByLimit = () => {
  const data = ref<ProductInterfaceModel[]>([]);
  const error = ref<AxiosError<ProblemDetailsInterface>>();
  const loading = ref<boolean>(false);

  const fetch = async (limit: number) => {
    loading.value = true;
    try {
      const { data: result } = (await productService?.getProductByLimit(
        limit
      )) as AxiosResponse<ProductInterfaceModel[]>;
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

export const useGetProductById = () => {
  const data = ref<ProductInterfaceModel>();
  const error = ref<AxiosError<ProblemDetailsInterface>>();
  const loading = ref<boolean>(false);

  const fetch = async (id: number) => {
    loading.value = true;
    try {
      const { data: result } = (await productService?.getProductById(
        id
      )) as AxiosResponse<ProductInterfaceModel>;
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

export const useGetProductByCategory = () => {
  const data = ref<ProductInterfaceModel[]>([]);
  const error = ref<AxiosError<ProblemDetailsInterface>>();
  const loading = ref<boolean>(false);

  const fetch = async (category: string) => {
    loading.value = true;
    try {
      const { data: result } = (await productService?.getProductByCategory(
        category
      )) as AxiosResponse<ProductInterfaceModel[]>;
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
