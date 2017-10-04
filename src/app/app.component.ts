import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { Router } from '@angular/router';
import { UserDataService } from './user-data.service';
import { User } from './user';
import * as go from 'gojs';

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.css'],
    providers: [UserDataService]
})
export class AppComponent implements OnInit {

    users: User[] = [];

    constructor(private userDataService: UserDataService, private  _router : Router) {

    }

    public ngOnInit() {
        /*
        this.userDataService
            .getAllUsers()
            .subscribe(
                (users) => {
                    this.users = users;
                }
            );
        */
    }

    /*
    onAddUser(user) {
        this.userDataService
            .addUser(user)
            .subscribe(
                (newUser) => {
                    this.users = this.users.concat(newUser);
                }
            );
    }
    */

    onToggleUserComplete(user) {
        this.userDataService
            .toggleUserComplete(user)
            .subscribe(
                (updatedUser) => {
                    user = updatedUser;
                }
            );
    }

    onRemoveUser(user) {
        this.userDataService
            .deleteUserById(user.id)
            .subscribe(
                (_) => {
                    this.users = this.users.filter((t) => t.id !== user.id);
                }
            );
    }
}
