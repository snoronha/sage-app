import { Component, Input, Output, EventEmitter } from '@angular/core';
import { User } from '../user';

@Component({
  selector: 'app-user-list-item',
  templateUrl: './user-list-item.component.html',
  styleUrls: ['./user-list-item.component.css']
})
export class UserListItemComponent {

  @Input() user: User;

  @Output()
  remove: EventEmitter<User> = new EventEmitter();

  @Output()
  toggleComplete: EventEmitter<User> = new EventEmitter();

  constructor() {
  }

  toggleUserComplete(user: User) {
    this.toggleComplete.emit(user);
  }

  removeUser(user: User) {
    this.remove.emit(user);
  }

}
