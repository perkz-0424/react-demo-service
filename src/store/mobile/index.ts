import {StoreState} from "perkz";
export const namespace = "mobile";

export type State = {
  username: string,
  password: string,
  movies: { name: string, url: string, id: string }[],
  name: string,
  url: string,
}

const store = {
  namespace,
  state: {
    username: "",
    password: "",
    movies: [],
    name: "",
    url: "",
  },
  reducers: {
    init(state: StoreState) {
      return {...state};
    }
  }
};


export default store;
