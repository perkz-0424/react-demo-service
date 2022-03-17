import {namespace as pc, State} from "@/store/pc";
import {connect, MapRoute, Dispatch} from "perkz";


function mapState(state: { [pc]: State }) {
  return {
    ...state[pc],
  };
}

function mapDispatch(dispatch: Dispatch, params: MapRoute) {
  return {
    init() {
      dispatch({type: `${pc}/init`});
    },
  };
}

export interface IProps extends ReturnType<typeof mapDispatch>,
  ReturnType<typeof mapState> {
  [key: string]: any;
}

export default connect(mapState, mapDispatch);
