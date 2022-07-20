import { AxiosError, AxiosResponse } from "axios";
import { ProblemDetailsInterface } from "@/core/interfaces/ProblemDetails.interface";

export type Response<T> = Promise<
  AxiosResponse<T> | AxiosError<ProblemDetailsInterface>
>;
