import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';
import { NavBarComponent } from './webPage/nav-bar/nav-bar.component';
import { HomeComponent } from './webPage/home/home.component';
import { AppRoutingModule } from './/app-routing.module';
import { ProfilComponent } from './webPage/profil/profil.component';
import { SearchBarComponent } from './webPage/search-bar/search-bar.component';
import { ResultComponent } from './webPage/result/result.component';


@NgModule({
  declarations: [
    AppComponent,
    NavBarComponent,
    HomeComponent,
    ProfilComponent,
    SearchBarComponent,
    ResultComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
