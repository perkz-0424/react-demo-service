import {message} from "antd";
import "antd/es/message/style/css";

import config from "@/config";

const status = {
  loading: false,
};
export const changeEnvironment = (id: string) => {
  if (config.environment !== id) {
    window.location.href = `${window.location.pathname.replace(id, config.environment)}${window.location.search}`;
    return;
  }
  const common = document.getElementById("common") as HTMLLinkElement;
  const examination = document.getElementById("mobile");
  const pc = document.getElementById("pc");
  examination && examination.remove();
  pc && pc.remove();
  const target = document.createElement("link");
  target.href = `${common.getAttribute("href")}`.replace("common", id);
  target.rel = "stylesheet";
  target.id = id;
  document.getElementsByTagName("head")[0].appendChild(target);
};

export const success = (m: string) => {
  if (!status.loading) {
    status.loading = true;
    message.success(m, 1).then(null);
    const t = setTimeout(() => {
      status.loading = false;
      clearTimeout(t);
    }, 500);
  }
};

export const fail = (m: string) => {
  if (!status.loading) {
    status.loading = true;
    message.error(m, 1).then(null);
    const t = setTimeout(() => {
      status.loading = false;
      clearTimeout(t);
    }, 500);
  }
};


export const sleep = (time: number) => new Promise((resolve) => {
  setTimeout(resolve, time);
});



