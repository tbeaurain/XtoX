import { Component, OnInit } from '@angular/core';
import { User } from '../../class/user';
import { UserService } from './user.service';
import { Location } from '@angular/common';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css']
})
export class UsersComponent implements OnInit {
  
  users: User[];
  
  constructor(
    private userService: UserService,
    private location: Location
  ) { }

  getUsers(): void {
    this.userService.getUsers()
      .subscribe(users => this.users = users);
  }

  ngOnInit() {
    this.getUsers();
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
  }


}
