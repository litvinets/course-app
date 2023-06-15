import { createFeatureSelector, createSelector } from "@ngrx/store";
import { CatalogState } from "./catalog.reducer";

export const getCatalogState = createFeatureSelector<CatalogState>("catalog");
export const getCatalog = createSelector(
  getCatalogState,
  (state: CatalogState) => state.entities
);

export const getLoading = createSelector(
  getCatalogState,
  (state: CatalogState) => state.isLoading
);

export const getIsReady = createSelector(
  getCatalogState,
  (state: CatalogState) => state.entities && !state.isLoading
);
