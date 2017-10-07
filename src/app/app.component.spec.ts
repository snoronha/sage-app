import { TestBed, async } from '@angular/core/testing';

import { FormsModule } from '@angular/forms';
import { RouterTestingModule } from '@angular/router/testing';
import { AppComponent } from './app.component';
import { NO_ERRORS_SCHEMA } from '@angular/core';
import { UserDataService } from './user-data.service';
import { ApiService } from './api.service';
import { AuthService } from './auth/auth.service';
import { ApiMockService } from './api-mock.service';
import {
    MdButtonModule,
    MdCheckboxModule,
    MdMenuModule,
    MdToolbarModule,
    MdIconModule,
    MdInputModule,
} from '@angular/material';


describe('AppComponent', () => {
    beforeEach(async(() => {
        TestBed.configureTestingModule({
            imports: [
                FormsModule,
                MdButtonModule,
                MdCheckboxModule,
                MdMenuModule,
                MdToolbarModule,
                MdIconModule,
                MdInputModule,
                RouterTestingModule,
            ],
            declarations: [
                AppComponent
            ],
            providers: [
                UserDataService,
                {
                    provide: ApiService,
                    useClass: ApiMockService
                },
                AuthService,
            ],
            schemas: [
                NO_ERRORS_SCHEMA
            ]
        }).compileComponents();
    }));

    it('should create the app', async(() => {
        const fixture = TestBed.createComponent(AppComponent);
        const app = fixture.debugElement.componentInstance;
        expect(app).toBeTruthy();
    }));
});
