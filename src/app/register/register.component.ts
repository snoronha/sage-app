import { Component, Input, OnInit, OnChanges } from '@angular/core';
import { FormBuilder, FormGroup, FormControl, Validators } from '@angular/forms';
import { Router, ActivatedRoute } from '@angular/router';
import { ApiService } from '../api.service';
import { Observable } from 'rxjs/Observable';
import { User } from '../data-model';

@Component({
    selector: 'app-register',
    templateUrl: './register.component.html',
    styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit, OnChanges {

    registerForm: FormGroup; // <--- registerForm is of type FormGroup
    @Input() user: User;

    constructor(private fb: FormBuilder, private api: ApiService, private router: Router) { // inject FormBuilder, ApiService
        this.createForm();
        this.router = router;
    }

    ngOnInit() {
        // var observable = this.api.getAllUsers();
        // observable.subscribe(value => console.log("ALL USERS: ", value));
    }

    createForm() {
        this.registerForm = this.fb.group({
            email_address:   new FormControl('', [Validators.required, Validators.email]),
            first_name:      [''],
            last_name:       [''],
            password:        new FormControl('', [Validators.required, Validators.minLength(6)]),
            repeat_password: new FormControl('', [Validators.required, Validators.minLength(6)]),
        });
    }

    onSubmit() {
        this.user = this.prepareSaveUser();
        const observable = this.api.createUser(this.user);
        observable.subscribe(response => this.handleSubmitResponse(response));
        // this.ngOnChanges();
    }

    handleSubmitResponse(response: any) {
        if (response.status >= 200 && response.status < 300) {
            this.router.navigate(['/app/editor'], {});
        } else {
            this.router.navigate(['/app/editor'], {});
        }
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

    // No idea why 'any' is needed. Example says `FormControl' should work
    get email_address()   { return this.registerForm.get('email_address'); }
    get first_name()      { return this.registerForm.get('first_name'); }
    get last_name()       { return this.registerForm.get('last_name'); }
    get password()        { return this.registerForm.get('password'); }
    get repeat_password() { return this.registerForm.get('repeat_password'); }
}
