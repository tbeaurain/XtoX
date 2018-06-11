import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
<<<<<<< HEAD
import { HomeComponent } from './home/home.component';
import { ProfilComponent } from './profil/profil.component';
import { ResultComponent } from './result/result.component';
import { UsersComponent } from './users/users.component';
=======
import { HomeComponent } from './webPage/home/home.component';
import { ProfilComponent } from './webPage/profil/profil.component';
import { ResultComponent } from './webPage/result/result.component';
>>>>>>> 48e1bed95385b8a8523e074cf9508b72593e143f

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'home', component: HomeComponent },
  { path: 'profil', component: ProfilComponent },
  { path: 'result', component: ResultComponent },
  { path: 'user', component: UsersComponent },
];

@NgModule({
  imports: [ RouterModule.forRoot(routes) ],
  exports: [ RouterModule ]
})
export class AppRoutingModule {}
