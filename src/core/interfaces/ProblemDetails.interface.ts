export interface ProblemDetailsInterface {
  [key: string]: any | any;

  type: string;
  title: string;
  status: number | null;
  detail: string;
  instance: string;
}
