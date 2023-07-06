import { createFeatureSelector, createSelector } from '@ngrx/store';
import { OrdersState } from '@app/shared/store/orders/orders.reducer';

export const getOrderState = createFeatureSelector<OrdersState>('orders');
export const getOrder = createSelector(getOrderState, (state: OrdersState) => state.entity);
export const getOrders = createSelector(getOrderState, (state: OrdersState) => state.entities);
export const getLoading = createSelector(getOrderState, (state: OrdersState) => state.isLoading);
