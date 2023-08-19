import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { ListUsersComponent } from './list-users/list-users.component';
import { UpdateUsersComponent } from './update-users/update-users.component';
import { DeleteUserComponent } from './delete-user/delete-user.component';
import { CreateUserComponent } from './create-user/create-user.component';
import { FindUserComponent } from './find-user/find-user.component';

const routes: Routes = [
  {
    path:"",
    component:HomeComponent
  },
  {
    path:"users",
    component:ListUsersComponent
  },
  {
    path:"update",
    component:UpdateUsersComponent
  },
  {
    path:"delete",
    component:DeleteUserComponent
  },
  {
    path:"create",
    component:CreateUserComponent
  },
  {
    path:"login",
    component:FindUserComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
