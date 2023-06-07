import { ActionReducerMap } from "@ngrx/store";
import * as fromCatalog from "./catalog";

export interface State {
  catalog: fromCatalog.CatalogState;
}

export const reducers: ActionReducerMap<State> = {
  catalog: fromCatalog.reducer,
};

export const effects = [fromCatalog.CatalogEffects];
