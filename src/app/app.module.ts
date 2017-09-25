import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FlexLayoutModule } from '@angular/flex-layout';
import { FormsModule } from '@angular/forms'; // NgModel lives here
import { HttpModule } from '@angular/http';
import {
    MdButtonModule,
    MdCheckboxModule,
    MdMenuModule,
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
import { AppRoutingModule } from './app-routing.module';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { DiagramEditorComponent } from './diagram-editor/diagram-editor.component';

@NgModule({
    declarations: [
        AppComponent,
        UserListHeaderComponent,
        UserListComponent,
        UserListItemComponent,
        UserListFooterComponent,
        LoginComponent,
        RegisterComponent,
        DiagramEditorComponent,
    ],
    imports: [
        AppRoutingModule,
        BrowserModule,
        BrowserAnimationsModule,
        FlexLayoutModule,
        FormsModule,
        HttpModule,
        MdButtonModule, MdCheckboxModule, MdMenuModule, MdToolbarModule, MdIconModule, MdInputModule,
    ],
    providers: [UserDataService, ApiService],
    bootstrap: [AppComponent]
})
export class AppModule { }
