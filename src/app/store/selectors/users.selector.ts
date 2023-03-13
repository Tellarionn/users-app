import { createSelector } from '@ngrx/store';
import { IAppState } from '../state/app.state';
import { IUsersState } from '../state/users.state';

export const usersSelector = (state: IAppState) => state.users;

export const selectUsers = createSelector(
  usersSelector,
  (state: IUsersState) => state.users
);
