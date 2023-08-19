import { Component } from '@angular/core';
import { UsersService } from '../services/users.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-create-user',
  templateUrl: './create-user.component.html',
  styleUrls: ['./create-user.component.css']
})
export class CreateUserComponent {
  userToUpdate: any = {};


  constructor(
    private usersService: UsersService,
    private router: Router
  ) {}

  ngOnInit(): void {
    // Puedes llamar aquí a la lógica para obtener o inicializar los datos del usuario a actualizar
  }

  createUser(): void {
    this.usersService.createUsers(this.userToUpdate).subscribe((updatedUser: any) => {
      console.log('Usuario actualizado:', updatedUser);
      // Puedes redirigir a otra página o mostrar un mensaje de éxito aquí
    });
  }
}
