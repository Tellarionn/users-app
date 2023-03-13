import { Action, createReducer, on } from '@ngrx/store';
import { initialUsersState, IUsersState } from '../state/users.state';
import * as usersActions from '../actions/users.action';

const reducer = createReducer(
  initialUsersState,
  on(usersActions.getUsersSuccess, (state, { users, info }) => {
    return {
      ...state,
      users,
      info,
    };
  })
);

export function usersReducer(
  state: IUsersState | undefined,
  action: Action
): IUsersState {
  return reducer(state, action);
}
