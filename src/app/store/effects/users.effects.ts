import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { catchError, map, of, pipe, switchMap } from 'rxjs';
import { UsersService } from 'src/app/modules/main-page/services/users.service';
import * as usersActions from '../actions/users.action';

@Injectable()
export class UsersEffects {
  readonly loadUsers$ = createEffect(() =>
    this.actions$.pipe(
      ofType(usersActions.getUsers),
      switchMap(({ limit, gender, nationalities }) =>
        this.usersService.getUsers(limit, gender, nationalities).pipe(
          map(({ results, info }) =>
            usersActions.getUsersSuccess({ users: results, info })
          ),
          catchError((error: unknown) =>
            of(usersActions.getUsersFailer({ error }))
          )
        )
      )
    )
  );

  constructor(private actions$: Actions, private usersService: UsersService) {}
}
