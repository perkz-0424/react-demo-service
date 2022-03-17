import * as React from "react";
import * as ReactDOM from "react-dom";
import Create from "perkz";
import routers from "@/routers";
import store from "@/store";

const App = () => {
  return (
    <React.Fragment>
      <Create store={store} routers={routers}/>
    </React.Fragment>
  );
};

ReactDOM.render(<App/>, document.getElementById("root") as HTMLDivElement);
