import { ActionReducerMap } from "@ngrx/store";
import * as fromCatalog from "./catalog";
import * as fromUser from "./user";

export interface State {
  catalog: fromCatalog.CatalogState;
  user: fromUser.UserState
}

export const reducers: ActionReducerMap<State> = {
  catalog: fromCatalog.reducer,
  user: fromUser.reducer
};

export const effects = [fromCatalog.CatalogEffects, fromUser.UserEffects];
