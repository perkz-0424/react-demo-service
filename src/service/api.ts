import {fail} from "@/common/assect/util";
import {Service} from "perkz";
import {IReturnData} from "@/definitions/type";
import {getCookie} from "perkz-tool";

function ajax<T>(
  url: string,
  data: { [key: string]: any },
  method: "get" | "post" | "put" | "delete",
  headers: HeadersInit = {
    "Content-Type": "application/json;charset=utf-8",
    "Authorization": getCookie("token"),
  }
) {
  return new Promise<T>((resolve: (params?: any) => any) => {
    const netError = {code: 0, data: {msg: "网络错误"}};
    const service = new Service<IReturnData>(headers);
    service[`${method}`](url, data).then(resolve).catch(() => resolve(netError));
  }).then((res: IReturnData) => {
    if (res.code === 0) {
      fail(res.message || res.msg || "未定义的错误!");
    } else if (res.code === 401) {
      fail("请重新登录!");
      setTimeout(() => {
        window.location.href = `/login?f=${encodeURIComponent(window.location.href)}`;
      }, 1000);
    }
    return res;
  });
}

export function testGetApi<T>(url = "", data = {}) {
  return ajax<T>(`/testApi${url}`, data, "get");
}

export function testPostApi<T>(url = "", data = {}) {
  return ajax<T>(`/testApi${url}`, data, "post");
}

const apis = {
  testPostApi,
  testGetApi,
};
export default apis;
