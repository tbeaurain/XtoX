import { Component, OnInit, Input } from '@angular/core';
import { UsersComponent }from '../../users/users.component';
import {ConnectbackendService} from '../../../connectbackend.service';

@Component({
  selector: 'app-nav-bar-connect',
  templateUrl: './nav-bar-connect.component.html',
  styleUrls: ['./nav-bar-connect.component.css']
})

export class NavBarConnectComponent implements OnInit {

  input;
 
  constructor(private backendService: ConnectbackendService,) { 
    
  }

  ngOnInit() {
    this.input = {
      firstname:'',
      lastname:'',
      email:'',
      phone:'',
      password:'',
    };
  }

  onRegister(){
    this.backendService.registerUser(this.input).subscribe(
      response => {
        alert('User '+ this.input.firstname +' has been created')
      },
      error => console.log('error', error)
    );
  }

  onlogin(){
    this.backendService.loginUser(this.input).subscribe(
      response => {
        alert('User '+ this.input.firstname +' has been created')
      },
      error => console.log('error', error)
    );
  }
}
