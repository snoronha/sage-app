import { Component, Input, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { User } from '../data-model';

@Component({
    selector: 'app-register',
    templateUrl: './register.component.html',
    styleUrls: ['./register.component.css']
})
export class RegisterComponent {

    registerForm: FormGroup; // <--- registerForm is of type FormGroup
    @Input() user: User;
    
    constructor(private fb: FormBuilder) { // inject FormBuilder
        this.createForm();
    }
    // ngOnInit() { }

    createForm() {
        this.registerForm = this.fb.group({
            email_address:   ['', Validators.required], // <--- FormControl called "email_address"
            password:        ['', Validators.required],
            repeat_password: ['', Validators.required],
        });
    }

    onSubmit() {
        this.user = this.prepareSaveUser();
        // this.heroService.updateHero(this.hero).subscribe(/* error handling */);
        this.ngOnChanges();
    }

    prepareSaveUser(): User {
        const formModel = this.registerForm.value;
        // return new `User` object containing a combination of original user value(s)
        const saveUser: User = {
            // id: this.user.id,
            id: 0,
            email_address: formModel.email_address as string,
            password: formModel.password as string,
        };
        console.log("saveUser: ", saveUser);
        return saveUser;
    }

    ngOnChanges() {
        const formModel = this.registerForm.value;
        this.registerForm.setValue({
            email_address: formModel.email_address as string,
            password: formModel.password as string,
            repeat_password: formModel.repeat_password as string,
        });
    }
}
