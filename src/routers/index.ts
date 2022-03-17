import config from "@/config";
import Auth from "@/auth";

const routes = [
  {
    path: "/",
    Component: require("@/pages").default,
    redirect: config.environment,
    name: "首页",
    auth: Auth,
    children: [
      {
        path: "/pc",
        Component: require("@/pages/Pc").default,
        name: "pc端",
        auth: Auth,
      },
      {
        path: "/mobile",
        Component: require("@/pages/Mobile").default,
        name: "h5端",
        auth: Auth,
      },
    ],
  },
];
export default routes;
