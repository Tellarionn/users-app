import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MainPageRoutingModule } from './main-page-routing.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HeaderComponent } from './components/header/header.component';
import { MapComponent } from './components/map/map.component';
import { MapIconComponent } from './components/map-icon/map-icon.component';
import { UserProfileCardComponent } from './components/users-profile-card/user-profile-card.component';
import { UsersSearchComponent } from './components/users-search/users-search.component';
import { MainPageComponent } from './main-page.component';
import { SharedModule } from 'src/app/shared/shared.module';
import { MaterialModule } from '../material-module/material.module';

@NgModule({
  declarations: [
    MainPageComponent,
    HeaderComponent,
    UsersSearchComponent,
    UserProfileCardComponent,
    MapComponent,
    MapIconComponent,
  ],
  imports: [
    CommonModule,
    MainPageRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    SharedModule,
    MaterialModule,
  ],

})
export class MainPageModule {}
