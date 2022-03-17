import {connect, Dispatch, MapRoute} from "perkz";
import {namespace as mobile, State} from "@/store/mobile";
import {authApi, addMovies, deleteMovies, selectMovies} from "@/service/mobile";
import {getObjValue, setCookie, removeCookie} from "perkz-tool";
import {encrypt} from "@/common/encrypt";

function mapState(state: { [mobile]: State }) {
  return {...state[mobile]};
}

function mapDispatch(dispatch: Dispatch, params: MapRoute) {
  return {
    init() {
      this.selectMovies().then();
    },

    setUsername(username: string) {
      dispatch({type: `${mobile}/set/username`, username});
    },

    setPassword(password: string) {
      dispatch({type: `${mobile}/set/password`, password});
    },

    setValue(state: { name?: string, url?: string }) {
      dispatch({type: `${mobile}/setState`, state});
    },

    addMovies() {
      const {name, url} = params.$store.mobile;
      name && url && addMovies({values: [{name, url}]}).then(this.selectMovies);
    },

    deleteMovies(id: string) {
      deleteMovies({id}).then(this.selectMovies);
    },

    async selectMovies() {
      const data = await selectMovies();
      if (data.code) {
        const movies = getObjValue(data, ".data.movies");
        dispatch({type: `${mobile}/set/movies`, movies: movies ? movies : []});
      }
    },

    async onLogin() {
      const {password, username} = params.$store.mobile;
      const data = await authApi({password: encrypt(password), username: encrypt(username)});
      const token = getObjValue(data, ".data.token");
      token ? setCookie("token", token) : removeCookie("token");
    },
  };
}

export interface IProps extends ReturnType<typeof mapDispatch>,
  ReturnType<typeof mapState> {
  [key: string]: any;
}

export default connect(mapState, mapDispatch);
