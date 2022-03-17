import {testGetApi, testPostApi} from "@/service/api";
import {auth, movieAdd, movieDelete, movieSelect, movieUpdate} from "@/service";
import {IReturn} from "@/definitions/type";


export function authApi(params: { password: string, username: string }) {
  return testPostApi(auth, params);
}

export function selectMovies(): IReturn<{ movies: { name: string, url: string, id: string }[] }> {
  return testGetApi(movieSelect);
}

export function addMovies(params: { values: { name: string, url: string }[] }) {
  return testPostApi(movieAdd, params);
}

export function updateMovies(params: { name?: string, url?: string, id: string }) {
  return testPostApi(movieUpdate, params);
}

export function deleteMovies(params: { id: string }) {
  return testPostApi(movieDelete, params);
}
