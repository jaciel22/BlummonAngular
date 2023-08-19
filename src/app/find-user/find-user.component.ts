import { Component } from '@angular/core';
import { UsersService } from '../services/users.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-find-user',
  templateUrl: './find-user.component.html',
  styleUrls: ['./find-user.component.css']
})
export class FindUserComponent {
  userToUpdate: any = {};
  userId: number = 1;


  constructor(
    private usersService: UsersService,
    private router: Router
  ) {}

  ngOnInit(): void {
    // Puedes llamar aquí a la lógica para obtener o inicializar los datos del usuario a actualizar
  }

  findUser(): void {
    this.usersService.findUsers(this.userToUpdate).subscribe((updatedUser: any) => {
      console.log('Usuario actualizado:', updatedUser);
      this.userToUpdate = updatedUser.resultado.usuarios[0];
      // Puedes redirigir a otra página o mostrar un mensaje de éxito aquí
    });
  }
}
