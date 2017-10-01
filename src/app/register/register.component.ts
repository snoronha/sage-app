import { Component, Input, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ApiService } from '../api.service';
import { Observable } from 'rxjs/Observable';
import { User } from '../data-model';

@Component({
    selector: 'app-register',
    templateUrl: './register.component.html',
    styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

    registerForm: FormGroup; // <--- registerForm is of type FormGroup
    @Input() user: User;
    
    constructor(private fb: FormBuilder, private api: ApiService) { // inject FormBuilder, ApiService
        this.createForm();
    }

    ngOnInit() {
        // var observable = this.api.getAllUsers();
        // observable.subscribe(value => console.log("ALL USERS: ", value));
    }

    createForm() {
        this.registerForm = this.fb.group({
            email_address:   ['', Validators.required], // <--- FormControl called "email_address"
            first_name:      [''],
            last_name:       [''],
            password:        ['', Validators.required],
            repeat_password: ['', Validators.required],
        });
    }

    onSubmit() {
        this.user = this.prepareSaveUser();
        var observable = this.api.createUser(this.user);
        observable.subscribe(value => console.log("NEW USER: ", value));
        // this.ngOnChanges();
    }

    prepareSaveUser(): User {
        const formModel = this.registerForm.value;
        // return new `User` object containing a combination of original user value(s)
        const saveUser: User = {
            id:            0,
            email_address: formModel.email_address as string,
            first_name:    formModel.first_name as string,
            last_name:     formModel.last_name as string,
            password:      formModel.password as string,
        };
        return saveUser;
    }

    ngOnChanges() {
        const formModel = this.registerForm.value;
        this.registerForm.reset({
            email_address:   this.user.email_address as string,
            first_name:      this.user.first_name as string,
            last_name:       this.user.last_name as string,
            // password:        this.user.password as string,
            // repeat_password: formModel.repeat_password as string,
        });
    }
}
