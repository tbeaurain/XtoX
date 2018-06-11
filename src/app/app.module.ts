import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientInMemoryWebApiModule } from 'angular-in-memory-web-api';


import { AppComponent } from './app.component';
import { NavBarComponent } from './functionality/nav-bar/nav-bar.component';
import { HomeComponent } from './webPage/home/home.component';
import { AppRoutingModule } from './/app-routing.module';
<<<<<<< HEAD
import { ProfilComponent } from './profil/profil.component';
import { SearchBarComponent } from './search-bar/search-bar.component';
import { ResultComponent } from './result/result.component';
import { UsersComponent } from './users/users.component';
=======
import { ProfilComponent } from './webPage/profil/profil.component';
import { SearchBarComponent } from './functionality/search-bar/search-bar.component';
import { ResultComponent } from './webPage/result/result.component';
>>>>>>> 48e1bed95385b8a8523e074cf9508b72593e143f


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
