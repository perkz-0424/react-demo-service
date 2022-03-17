import * as React from "react";
import styles from "./styles.less";
import {changeEnvironment} from "@/common/assect/util";
import store, {IProps} from "@/store/pc/action";
import "element-theme-default";
import zhCN from "antd/lib/locale/zh_CN";
import {ConfigProvider} from "antd";
import {IReactHooksComponent} from "perkz";
import {AliveNumber} from "perkz-component";

const Pc: IReactHooksComponent<IProps> = (props) => {
  React.useEffect(() => changeEnvironment("pc"), []);
  return <React.Fragment>
    <ConfigProvider locale={zhCN}>
      <div className={styles.pc}>
        <div className={styles.topContainer}>
          <div className={styles.top}>
            <AliveNumber number={1200}/>
          </div>
        </div>
        <div className={styles.body}>
          <div className={styles.componentContainer}>
            {props.childrenRouter()}
          </div>
        </div>
      </div>
    </ConfigProvider>
  </React.Fragment>;
};

export default store(Pc);
