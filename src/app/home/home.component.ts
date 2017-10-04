import { Component, Input, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, FormControl, Validators } from '@angular/forms';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
    selector: 'app-home',
    templateUrl: './home.component.html',
    styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

    homeForm: FormGroup; // <--- registerForm is of type FormGroup

    constructor(private fb: FormBuilder, private router: Router) { // inject FormBuilder, ApiService
        this.createForm();
        this.router = router;
    }

    ngOnInit() {
        // init stuff here
    }

    createForm() {
        this.homeForm = this.fb.group({
            url:   new FormControl('', [Validators.required]),
        });
    }

    onSubmit() {
        const formModel = this.homeForm.value; // formModel.url
        console.log('URL: ', formModel.url);
    }

    get url() { return this.homeForm.value.url as string; }
}
