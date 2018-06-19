import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { HttpModule } from '@angular/http';

//simulation of a service to test our fonctions (to be deleted when the connexion with the back is done)
import { HttpClientInMemoryWebApiModule } from 'angular-in-memory-web-api';
import { InMemoryDataService }  from './in-memory-data.service';

import { AppComponent } from './app.component';
import { NavBarComponent } from './functionality/nav-bar/nav-bar-users/nav-bar.component';
import { HomeComponent } from './webPage/home/home.component';
import { AppRoutingModule } from './/app-routing.module';
import { FormsModule } from '@angular/forms';

import { ProfilComponent } from './webPage/profil/profil.component';
import { SearchBarComponent } from './functionality/search-bar/search-bar.component';
import { ResultComponent } from './webPage/result/result.component';
import { UsersComponent } from './functionality/users/users.component';
import { FilesComponent } from './functionality/files/files.component';
import { UserService } from './functionality/users/user.service';
import { ConditionGeneraleComponent } from './webPage/condition-generale/condition-generale.component';
import { ParametreComponent } from './webPage/parametre/parametre.component';
import { NavBarConnectComponent } from './functionality/nav-bar/nav-bar-connect/nav-bar-connect.component';
import { ConnectbackendService } from './connectbackend.service';



@NgModule({
  declarations: [
    AppComponent,
    NavBarComponent,
    HomeComponent,
    ProfilComponent,
    SearchBarComponent,
    ResultComponent,
    UsersComponent,
    FilesComponent,
    ConditionGeneraleComponent,
    ParametreComponent,
    NavBarConnectComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    HttpModule,
    //delete when connexion backend/DataBase is done
    /*HttpClientInMemoryWebApiModule.forRoot(
      InMemoryDataService, {dataEncapsulation: false}
    ),*/
  ],
  providers: [UserService, ConnectbackendService],
  bootstrap: [AppComponent]
})
export class AppModule { }
