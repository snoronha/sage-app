import { Component, EventEmitter, Input, Output } from '@angular/core';
import { User } from '../user';

@Component(
  {
    selector: 'app-user-list',
    templateUrl: './user-list.component.html',
    styleUrls: ['./user-list.component.css']
  }
)
export class UserListComponent {

  @Input()
  users: User[];

  @Output()
  remove: EventEmitter<User> = new EventEmitter();

  @Output()
  toggleComplete: EventEmitter<User> = new EventEmitter();

  constructor() {
  }

  onToggleUserComplete(user: User) {
    this.toggleComplete.emit(user);
  }

  onRemoveUser(user: User) {
    this.remove.emit(user);
  }

}
