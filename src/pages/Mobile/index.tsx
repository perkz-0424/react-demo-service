import * as React from "react";
import styles from "./styles.less";
import {IReactHooksComponent} from "perkz"
import {changeEnvironment} from "@/common/assect/util";
import {ConfigProvider} from "antd-mobile";
import zhCN from "antd-mobile/es/locales/zh-CN";
import {Input, Button} from "antd-mobile";
import store, {IProps} from "@/store/mobile/action";

const Mobile: IReactHooksComponent<IProps> = (props) => {
  React.useEffect(() => changeEnvironment("mobile"), []);
  React.useEffect(() =>  props.init(), []);//eslint-disable-line react-hooks/exhaustive-deps
  return (
    <React.Fragment>
      <ConfigProvider locale={zhCN}>
        <div className={styles.mobile}>
          <Input placeholder="账号"
                 onChange={props.setUsername}
                 value={props.username}
                 autoComplete="off"
                 clearable={true}/>
          <br/>
          <Input placeholder="密码"
                 onChange={props.setPassword}
                 value={props.password}
                 type='password'
                 autoComplete="off"
                 clearable={true}/>
          <br/>
          <Button onClick={props.onLogin} className={styles.button} color='primary'>登录</Button>
          <br/>
          <br/>
          <Input placeholder="电影名"
                 onChange={(name) => props.setValue({name})}
                 value={props.name}
                 clearable={true}/>
          <br/>
          <Input placeholder="连接地址"
                 onChange={(url) => props.setValue({url})}
                 value={props.url}
                 clearable={true}/>
          <br/>
          <Button onClick={() => props.addMovies()} className={styles.button} color='primary'>添加</Button>
          <br/>
          <br/>
          <ul>
            {props.movies.map((item, index) => {
              return <li key={index}
                         className={styles.movie}>
                <p className={styles.title}
                   onClick={() => window.open(item.url)}>
                  {item.name}
                </p>
                <span onClick={() => props.deleteMovies(item.id)}>删除</span>
              </li>
            })}
          </ul>
        </div>
      </ConfigProvider>
    </React.Fragment>
  );
};

export default store(Mobile);
