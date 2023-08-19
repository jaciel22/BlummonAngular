import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';


@Injectable({
  providedIn: 'root'
})
export class UsersService {
  urlGetUsers = 'http://localhost:8080/v1/users';
  urlUpdateUsers = 'http://localhost:8080/v1/users'
  urlLoginUser = 'http://localhost:8080/v1/users/login'
  router: any;
  constructor(private http: HttpClient) {
    console.log('Servicio usuarios');
   }

  getUsers() {
  

    // Manejar la situación donde no se pudo obtener el companyId
    return this.http.get(this.urlGetUsers);
  }

  updateUsers(user: any,userId: number) {
    // Realizar una solicitud PUT para actualizar usuarios
    const urlWithUserId = `${this.urlUpdateUsers}/${userId}`;
    return this.http.put(urlWithUserId, user); // 'user' es el objeto con los datos de usuario a actualizar
  }

  deleteUsers(userId: number) {
    // Realizar una solicitud PUT para actualizar usuarios
    const urlWithUserId = `${this.urlUpdateUsers}/${userId}`;
    return this.http.delete(urlWithUserId); // 'user' es el objeto con los datos de usuario a actualizar
  }

  createUsers(user: any) {
    // Realizar una solicitud PUT para actualizar usuarios
    const urlWithUserId = `${this.urlUpdateUsers}`;
    return this.http.post(urlWithUserId, user); // 'user' es el objeto con los datos de usuario a actualizar
  }

  findUsers(user: any) {
    // Realizar una solicitud PUT para actualizar usuarios
    const urlWithUserId = `${this.urlLoginUser}`;
    return this.http.post(urlWithUserId, user); // 'user' es el objeto con los datos de usuario a actualizar
  }
  
}






