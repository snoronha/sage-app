import { Injectable } from '@angular/core';
import { User } from './user';
import { ApiService } from './api.service';
import { Observable } from 'rxjs/Observable';

@Injectable()
export class UserDataService {

  constructor(
    private api: ApiService
  ) {
  }

  // Simulate POST /users
  addUser(user: User): Observable<User> {
    return this.api.createUser(user);
  }

  // Simulate DELETE /users/:id
  deleteUserById(userId: number): Observable<User> {
    return this.api.deleteUserById(userId);
  }

  // Simulate PUT /users/:id
  updateUser(user: User): Observable<User> {
    return this.api.updateUser(user);
  }

  // Simulate GET /users
  getAllUsers(): Observable<User[]> {
    return this.api.getAllUsers();
  }

  // Simulate GET /users/:id
  getUserById(userId: number): Observable<User> {
    return this.api.getUserById(userId);
  }

  // Toggle complete
  toggleUserComplete(user: User) {
    user.complete = !user.complete;
    return this.api.updateUser(user);
  }

}
