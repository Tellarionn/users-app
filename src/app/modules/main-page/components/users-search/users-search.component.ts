import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { select, Store } from '@ngrx/store';
import { Observable, of } from 'rxjs';
import { IUsers } from 'src/app/shared/interfaces/users.interface';
import { getUsers } from 'src/app/store/actions/users.action';
import { selectUsers } from 'src/app/store/selectors/users.selector';
import { IAppState } from 'src/app/store/state/app.state';
import { nationalities } from '../../../../shared/consts/nationalities';
import { usersQty } from '../../../../shared/consts/users-qty';

@Component({
  selector: 'app-users-search',
  templateUrl: './users-search.component.html',
  styleUrls: ['./users-search.component.scss'],
})
export class UsersSearchComponent implements OnInit {
  public searchFilterControl = new FormControl('');
  public users!: Observable<IUsers[]>;
  public usersQty: number[] = usersQty;
  public genders: string[] = ['Male', 'Female'];
  public nationalities: string[] = nationalities;
  public breakPoint: number = 5;
  public selectedUsersQty: number = 10;
  public selectedNationality: string = '';
  public selectedGender: string = '';
  public noneValue: any = '';
  public term: string | null = '';

  constructor(private readonly store: Store<IAppState>) {
    this.users = this.store.pipe(select(selectUsers));
  }

  ngOnInit(): void {
    this.store.dispatch(getUsers({ limit: this.selectedUsersQty }));
    this.searchFilterControl.valueChanges.subscribe(
      (value) => (this.term = value)
    );
  }

  public selectGender(gender: string): void {
    this.selectedGender = gender;
    if (gender) {
      this.getUsers();
    } else {
      this.store.dispatch(
        getUsers({
          limit: this.selectedUsersQty,
          nationalities: this.selectedNationality.toLowerCase(),
        })
      );
    }
  }

  public selectNationalities(nationality: string): void {
    this.selectedNationality = nationality;
    if (nationality) {
      this.getUsers();
    } else {
      this.store.dispatch(
        getUsers({
          limit: this.selectedUsersQty,
          gender: this.selectedGender.toLowerCase(),
        })
      );
    }
  }

  public selectUsersQty(limit: number): void {
    this.selectedUsersQty = limit;
    this.getUsers();
  }

  public getUsers(): void {
    this.store.dispatch(
      getUsers({
        limit: this.selectedUsersQty,
        nationalities: this.selectedNationality.toLowerCase(),
        gender: this.selectedGender.toLowerCase(),
      })
    );
  }

  public onResize(event: UIEvent) {
    const target = event.target as Window;
    this.breakPoint =
      target.innerWidth <= 850 ? 2 : target.innerWidth <= 1300 ? 3 : 5;
  }
}
