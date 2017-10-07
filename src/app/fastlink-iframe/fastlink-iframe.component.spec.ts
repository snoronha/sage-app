import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { MockBackend } from '@angular/http/testing';
import { FormsModule, FormBuilder, ReactiveFormsModule } from '@angular/forms';
import { Http, BaseRequestOptions, XHRBackend } from '@angular/http';
import { ApiService } from '../api.service';
import {
    MdInputModule,
} from '@angular/material';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FastlinkIframeComponent } from './fastlink-iframe.component';

describe('FastlinkIframeComponent', () => {
    let component: FastlinkIframeComponent;
    let fixture: ComponentFixture<FastlinkIframeComponent>;

    beforeEach(async(() => {
        TestBed.configureTestingModule({
            imports: [
                BrowserAnimationsModule,
                MdInputModule,
                ReactiveFormsModule, FormsModule,
            ],
            declarations: [
                FastlinkIframeComponent,
            ],
            providers: [
                ApiService,
                MockBackend,
                BaseRequestOptions,
                {
                    provide: Http,
                    deps: [MockBackend, BaseRequestOptions],
                    useFactory:
                    (backend: XHRBackend, defaultOptions: BaseRequestOptions) => {
                        return new Http(backend, defaultOptions);
                    }
                }
            ],
        })
            .compileComponents();
    }));

    beforeEach(() => {
        fixture = TestBed.createComponent(FastlinkIframeComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });

    it('should create', () => {
        expect(component).toBeTruthy();
    });
});
