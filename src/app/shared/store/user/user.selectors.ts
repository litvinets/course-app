import { createFeatureSelector, createSelector } from "@ngrx/store";
import { UserState } from "./user.reducer";

export const getUserState = createFeatureSelector<UserState>("user");
export const getUser = createSelector(getUserState, (state: UserState) => state.entity);
export const getLoading = createSelector(getUserState, (state: UserState) => state.isLoading);
export const getIsAuthorized = createSelector(getUserState, (state: UserState) => !!state.uid);
