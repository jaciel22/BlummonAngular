import { Component } from '@angular/core';
import { UsersService } from '../services/users.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-list-users',
  templateUrl: './list-users.component.html',
  styleUrls: ['./list-users.component.css']
})
export class ListUsersComponent {
  public users: any = {};

  constructor(
    private usersService : UsersService,
    private router: Router,
    // private loginService : LoginComponent,
    
  ){
    this.usersService.getUsers().subscribe((resp:any)=>{
      console.log(resp)
      this.users = resp
      
    })

  }
}
