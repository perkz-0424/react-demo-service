import * as React from "react";
import config from "@/config";
import {IAuth} from "perkz"

// 权限
const Auth:IAuth = (Component) => {
  return (props) => <Component {...props} config={config}/>;
};
export default Auth;
