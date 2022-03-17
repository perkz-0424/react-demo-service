import {namespace as main, State} from "@/store/main";
import {connect, MapRoute, Dispatch} from "perkz";

function mapState(state: { [main]: State }) {
  return {
    ...state[main],
  };
}

function mapDispatch(dispatch: Dispatch, params: MapRoute) {
  return {
    init() {
      dispatch({type: `${main}/init`});
    },
  };
}

export interface IProps extends ReturnType<typeof mapDispatch>,
  ReturnType<typeof mapState> {
  [key: string]: any;
}

export default connect(mapState, mapDispatch);
