import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientInMemoryWebApiModule } from 'angular-in-memory-web-api';


import { AppComponent } from './app.component';
import { NavBarComponent } from './functionality/nav-bar/nav-bar.component';
import { HomeComponent } from './webPage/home/home.component';
import { AppRoutingModule } from './/app-routing.module';

import { ProfilComponent } from './webPage/profil/profil.component';
import { SearchBarComponent } from './functionality/search-bar/search-bar.component';
import { ResultComponent } from './webPage/result/result.component';
import { UsersComponent } from './functionality/users/users.component';



@NgModule({
  declarations: [
    AppComponent,
    NavBarComponent,
    HomeComponent,
    ProfilComponent,
    SearchBarComponent,
    ResultComponent,
    UsersComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
