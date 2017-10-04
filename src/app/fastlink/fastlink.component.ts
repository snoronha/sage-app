import { Component, Input, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, FormControl, Validators } from '@angular/forms';
import { ApiService } from '../api.service';
import { Observable } from 'rxjs/Observable';

@Component({
    selector: 'app-fastlink',
    templateUrl: './fastlink.component.html',
    styleUrls: ['./fastlink.component.css']
})
export class FastlinkComponent implements OnInit {

    fastlinkForm: FormGroup;
    constructor(private fb: FormBuilder, private api: ApiService) {
        this.createForm();
    }

    createForm() {
        this.fastlinkForm = this.fb.group({
            app:        new FormControl('10003600', [Validators.required]),
            rsession:   [''],
            token:      [''],
            requestReq: new FormControl('true', [Validators.required]),
        });
    }

    ngOnInit() { }

    onSubmit() {
        // console.log("app: ", this.fastlinkForm.value);
        // var observable = this.api.postFastlink(this.fastlinkForm.value);
        // observable.subscribe(response => console.log(response));
    }

    get app()        { return this.fastlinkForm.get('app'); }
    get requestReq() { return this.fastlinkForm.get('requestReq'); }
}
