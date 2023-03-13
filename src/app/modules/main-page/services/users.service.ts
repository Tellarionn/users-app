import { HttpClient, HttpParams, HttpResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { IUsersResponse } from 'src/app/shared/interfaces/users.interface';

@Injectable({
  providedIn: 'root',
})
export class UsersService {
  constructor(private readonly httpClient: HttpClient) {}

  getUsers(
    limit: number,
    gender?: string,
    nationalities?: string
  ): Observable<IUsersResponse> {
    let params = new HttpParams().set('results', limit);
    // .set('seed', 'abc');
    if (gender) {
      params = params.set('gender', gender);
    }
    if (nationalities) {
      params = params.set('nat', nationalities);
    }
    return this.httpClient.get<IUsersResponse>('https://randomuser.me/api', {
      params,
    });
  }
}
