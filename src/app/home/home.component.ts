import { Component, Input, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, FormControl, Validators } from '@angular/forms';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
    selector: 'app-home',
    templateUrl: './home.component.html',
    styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {


    constructor(private fb: FormBuilder, private router: Router) { // inject FormBuilder, ApiService
        this.router = router;
    }

    ngOnInit() {
        // init stuff here
    }
}
