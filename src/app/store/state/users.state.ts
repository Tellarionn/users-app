import { IInfo, IUsers } from 'src/app/shared/interfaces/users.interface';

export interface IUsersState {
  users: IUsers[];
  info: IInfo;
}

export const initialUsersState: IUsersState = {
  users: [],
  info: {
    seed: '',
    results: 0,
    page: 0,
    version: '',
  },
};
