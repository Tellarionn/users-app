import { Action, ActionReducerMap } from '@ngrx/store';

import { IAppState } from '../state/app.state';
import { usersReducer } from './users.reducer';

export const AppReducer: ActionReducerMap<IAppState, Action> = {
  users: usersReducer,
};
