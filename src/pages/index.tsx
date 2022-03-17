import * as React from "react";
import store, {IProps} from "@/store/main/action";
import {IReactHooksComponent} from "perkz";

const Main: IReactHooksComponent<IProps> = (props) => {
  return <>{props.childrenRouter()}</>
};
export default store(Main);
