import { Component, Input, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, FormControl, Validators } from '@angular/forms';
import { ApiService } from '../api.service';
import { Observable } from 'rxjs/Observable';

@Component({
    selector: 'app-fastlink-iframe',
    templateUrl: './fastlink-iframe.component.html',
    styleUrls: ['./fastlink-iframe.component.css']
})
export class FastlinkIframeComponent implements OnInit {
    loaded: boolean;
    fastlinkForm: FormGroup;
    constructor(private fb: FormBuilder, private api: ApiService) {
        this.createForm();
    }

    createForm() {
        this.fastlinkForm = this.fb.group({
            app:        new FormControl('10003600', [Validators.required]),
            rsession:   new FormControl('', [Validators.required]),
            token:      new FormControl('', [Validators.required]),
            requestReq: new FormControl('true', [Validators.required]),
        });
    }

    ngOnInit() {
        this.loaded = false;
        const observable = this.api.getFastlinkCredentials();
        observable.subscribe((response) => {
            if (response.status >= 200 && response.status < 300) {
                this.loaded = true;
                (<HTMLInputElement>document.getElementById('rsession')).value = response.message.user_session;
                (<HTMLInputElement>document.getElementById('token')).value = response.message.fastlink_token;
            }
        });
    }

    onSubmit() {
        // console.log("app: ", this.fastlinkForm.value);
        // var observable = this.api.postFastlink(this.fastlinkForm.value);
        // observable.subscribe(response => console.log(response));
    }

    get app()        { return this.fastlinkForm.get('app'); }
    get requestReq() { return this.fastlinkForm.get('requestReq'); }
}
