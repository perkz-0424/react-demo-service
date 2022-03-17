export type IReturnData<T = any> = {
  code?: number,
  message?: string,
  msg?: string,
  data?: T
}

export interface IReturn<T> extends PromiseLike<IReturnData<T>> {
}
