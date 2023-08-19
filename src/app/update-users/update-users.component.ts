import { Component, OnInit } from '@angular/core';
import { UsersService } from '../services/users.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-update-users',
  templateUrl: './update-users.component.html',
  styleUrls: ['./update-users.component.css']
})
export class UpdateUsersComponent implements OnInit {
  userToUpdate: any = {};
  userId: number = 1;


  constructor(
    private usersService: UsersService,
    private router: Router
  ) {}

  ngOnInit(): void {
    // Puedes llamar aquí a la lógica para obtener o inicializar los datos del usuario a actualizar
  }

  updateUser(): void {
    this.usersService.updateUsers(this.userToUpdate,this.userId).subscribe((updatedUser: any) => {
      console.log('Usuario actualizado:', updatedUser);
      // Puedes redirigir a otra página o mostrar un mensaje de éxito aquí
    });
  }
}


