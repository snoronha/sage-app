import { Component, Input, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, FormControl, Validators } from '@angular/forms';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
    selector: 'app-fastlink',
    templateUrl: './fastlink.component.html',
    styleUrls: ['./fastlink.component.css']
})
export class FastlinkComponent implements OnInit {

    constructor(private fb: FormBuilder, private router: Router) { // inject FormBuilder, ApiService
        this.router = router;
    }

    ngOnInit() {
        // init stuff here
    }
}
