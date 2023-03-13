import { createAction, props } from '@ngrx/store';
import { IInfo, IUsers } from 'src/app/shared/interfaces/users.interface';

export const getUsers = createAction(
  '[Users] Get Users',
  props<{
    limit: number;
    gender?: string;
    nationalities?: string;
  }>()
);

export const getUsersSuccess = createAction(
  '[Users] Get Users Success',
  props<{ users: IUsers[]; info: IInfo }>()
);

export const getUsersFailer = createAction(
  '[Users] Get Users Failer',
  props<{ error: unknown }>()
);
