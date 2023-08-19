import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { ListUsersComponent } from './list-users/list-users.component';
import { HttpClientModule } from '@angular/common/http';
import { UpdateUsersComponent } from './update-users/update-users.component';
import { FormsModule } from '@angular/forms';
import { DeleteUserComponent } from './delete-user/delete-user.component';
import { CreateUserComponent } from './create-user/create-user.component';
import { FindUserComponent } from './find-user/find-user.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    ListUsersComponent,
    UpdateUsersComponent,
    DeleteUserComponent,
    CreateUserComponent,
    FindUserComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
