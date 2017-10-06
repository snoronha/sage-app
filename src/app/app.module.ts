import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FlexLayoutModule } from '@angular/flex-layout';
import { FormsModule, ReactiveFormsModule } from '@angular/forms'; // NgModel lives here
import { HttpModule } from '@angular/http';
import {
    MdButtonModule,
    MdCheckboxModule,
    MdMenuModule,
    MdOptionModule,
    MdSelectModule,
    MdToolbarModule,
    MdIconModule,
    MdInputModule,
} from '@angular/material';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { UserListComponent } from './user-list/user-list.component';
import { UserListFooterComponent } from './user-list-footer/user-list-footer.component';
import { UserListHeaderComponent } from './user-list-header/user-list-header.component';
import { UserDataService } from './user-data.service';
import { UserListItemComponent } from './user-list-item/user-list-item.component';
import { ApiService } from './api.service';
import { AuthService } from './auth/auth.service';
import { AppRoutingModule } from './app-routing.module';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { DiagramEditorComponent } from './diagram-editor/diagram-editor.component';
import { User } from './data-model';
import { HomeComponent } from './home/home.component';
import { FastlinkComponent } from './fastlink/fastlink.component';

@NgModule({
    imports: [
        AppRoutingModule,
        BrowserModule,
        BrowserAnimationsModule,
        FlexLayoutModule,
        FormsModule,
        ReactiveFormsModule,
        HttpModule,
        MdButtonModule, MdCheckboxModule, MdMenuModule, MdOptionModule,
        MdSelectModule, MdToolbarModule, MdIconModule, MdInputModule,
    ],
    declarations: [
        AppComponent,
        UserListHeaderComponent,
        UserListComponent,
        UserListItemComponent,
        UserListFooterComponent,
        LoginComponent,
        RegisterComponent,
        DiagramEditorComponent,
        HomeComponent,
        FastlinkComponent,
    ],
    providers: [
        UserDataService,
        ApiService,
        AuthService,
    ],
    bootstrap: [
        AppComponent,
    ]
})
export class AppModule { }
