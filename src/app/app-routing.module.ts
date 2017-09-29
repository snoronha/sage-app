import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { UserListComponent } from './user-list/user-list.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { DiagramEditorComponent } from './diagram-editor/diagram-editor.component';

const routes: Routes = [
    { path: '', redirectTo: 'editor', pathMatch: 'full' },
    { path: 'login', component: LoginComponent },
    { path: 'register', component: RegisterComponent },
    { path: 'editor',
      children: [
          { path: '', component: DiagramEditorComponent },
          { path: ':id', component: DiagramEditorComponent }
      ]
    },
    { path: 'users', // component: UserListComponent,
      children: [
          // { path: '', component: UserListComponent },
          // { path: ':id', component: UserPageComponent }
      ]
    }
];

@NgModule({
    imports: [
        RouterModule.forRoot(routes),
    ],
    exports: [
        RouterModule,
    ],
    providers: []
})
export class AppRoutingModule {
}
