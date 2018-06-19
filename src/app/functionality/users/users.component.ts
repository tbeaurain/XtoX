import { Component, OnInit } from '@angular/core';
import { User } from '../../class/user';
import { UserService } from './user.service';
import { Location } from '@angular/common';
import { ConnectbackendService} from '../../connectbackend.service';
import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
/*import { connect } from 'tls';*/


@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css'],
  providers: [ConnectbackendService],
})
export class UsersComponent implements OnInit {
  
  users: User[];
  error: any;
  register;
  
  constructor(
    private backendService: ConnectbackendService,
    //private location: Location
  ) { }

  /*getUsers() {
    this.backendService
        .getUsers()
        .then(users => this.users = this.users)
        .catch(error => this.error = error);
  }*/
  
  ngOnInit() {
    this.register = {
      firstname:'',
      lastname:'',
      email:'',
      phone:'',
      password:'',
    };
  }

  registerUser(){
    this.backendService.registerUser(this.register).subscribe(
      response => {
        alert('User '+ this.register.firstname +' has been created')
      },
      error => console.log('error', error)
    );
  }

  /*ngOnInit() {
    this.getUsers();
  }

 getUsers(): void {
    this.userService.getUsers()
      .subscribe(users => this.users = users);
  }

  selectedUser: User;

  onSelect(user: User): void {
    this.selectedUser = user;
  }
  
  goBack(): void {
    this.location.back();
  }

  add( firstname: string): void {
    firstname = firstname.trim();
    if (!name) { return; }
    this.userService.addHero({ firstname } as User)
      .subscribe(user => {
        this.users.push(user);
      });
  }

  delete(user: User): void {
    this.users = this.users.filter(h => h !== user);
    this.userService.deleteHero(user).subscribe();
  }

  save(): void {
    this.userService.updateUser(this.selectedUser)
      .subscribe(() => this.goBack());
  }*/


}
