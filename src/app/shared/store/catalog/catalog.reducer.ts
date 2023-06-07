import * as fromActions from "./catalog.actions";
import { Catalog } from "@app/shared/store/catalog/catalog.models";

export interface CatalogState {
  entities: Catalog;
  isLoading: boolean;
  error: string;
}

const initialState: CatalogState = {
  entities: null,
  isLoading: null,
  error: null,
};

export function reducer(
  state = initialState,
  action: fromActions.All
): CatalogState {
  switch (action.type) {
    case fromActions.Types.READ: {
      return { ...state, isLoading: true, error: null };
    }
    case fromActions.Types.READ_SUCCESS: {
      return { ...state, entities: action.catalog, isLoading: false };
    }
    case fromActions.Types.READ_FAIL: {
      return { ...state, error: action.error, isLoading: false };
    }

    default: {
      return { ...state };
    }
  }
}
