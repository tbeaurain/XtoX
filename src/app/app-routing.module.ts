import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';

import { HomeComponent } from './webPage/home/home.component';
import { ProfilComponent } from './webPage/profil/profil.component';
import { ResultComponent } from './webPage/result/result.component';
import { FilesComponent } from './functionality/files/files.component';
import { UsersComponent } from './functionality/users/users.component';

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'home', component: HomeComponent },
  { path: 'profil', component: ProfilComponent },
  { path: 'result', component: ResultComponent },
  { path: 'files', component: FilesComponent },
  { path: 'user', component: UsersComponent}
];

@NgModule({
  imports: [ RouterModule.forRoot(routes) ],
  exports: [ RouterModule ]
})
export class AppRoutingModule {}
