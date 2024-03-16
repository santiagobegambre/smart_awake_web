import { Component } from '@angular/core';
import { User } from './user.model'; 

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css']
})
export class UsersComponent {
  users: User[] = [
    { name: 'Dorlan Pabon', email: 'dorlan.pabon@gmail.com', date: 'Fecha de Ingreso' },
    { name: 'Jefferson Duque', email: 'j.duque@gmail.com', date: 'Fecha de Ingreso' },
    { name: 'Dayro Moreno', email: 'dayro.m@gmail.com', date: 'Fecha de Ingreso' },
    // ... otros usuarios
  ];

  deleteUser(userToDelete: User): void {
    this.users = this.users.filter(user => user !== userToDelete);
  }
}

