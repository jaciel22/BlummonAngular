import { Component } from '@angular/core';
import { UsersService } from '../services/users.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-delete-user',
  templateUrl: './delete-user.component.html',
  styleUrls: ['./delete-user.component.css']
})
export class DeleteUserComponent {
  userId: number = 1;


  constructor(
    private usersService: UsersService,
    private router: Router
  ) {}

  ngOnInit(): void {
    // Puedes llamar aquí a la lógica para obtener o inicializar los datos del usuario a actualizar
  }

  deleteUser(): void {
    this.usersService.deleteUsers(this.userId).subscribe((updatedUser: any) => {
      console.log('Usuario actualizado:', updatedUser);
      // Puedes redirigir a otra página o mostrar un mensaje de éxito aquí
    });
  }
}
