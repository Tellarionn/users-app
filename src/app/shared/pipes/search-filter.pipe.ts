import { Pipe, PipeTransform } from '@angular/core';
import { IUsers } from '../interfaces/users.interface';

@Pipe({
  name: 'search',
})
export class SearchFilterPipe implements PipeTransform {
  transform(users: IUsers[] | null, term: string | null): IUsers[] {
    if (!term) return users ?? [];

    return (users ?? []).filter(({ name }) =>
      name.first.toLowerCase().includes(term.toLowerCase())
    );
  }
}
