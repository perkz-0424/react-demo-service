import * as React from "react";
import {MapRoute} from "@/definitions/router";


export type Dispatch<P = any, C = (payload: P) => void> = (
  action: {
    type: string;
    payload?: P;
    callback?: C;
    [key: string]: any;
  }
) => any;

export interface IRC<T = { [key: string]: any }> {
  (props: MapRoute & T): React.ReactElement;
}
