import { Injectable } from '@angular/core';
import { environment } from 'environments/environment';
import { Http, Response, Headers } from '@angular/http';
import { User } from './user';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/share';
import 'rxjs/add/observable/throw';

const API_URL = environment.apiUrl;

@Injectable()
export class ApiService {

    constructor(private _http: Http) { }

    /*------ Start /users endpoints ------*/
    /*
    public getAllUsers(): Observable<User[]> {
        return this._http
            .get(API_URL + '/api/v1/users/')
            .map(response => {
                const users = response.json();
                return users.map((user) => new User(user));
            })
            .catch(this.handleError);
    }

    public createUser(user: User): Observable<User> {
        return this._http
            .post(API_URL + '/api/v1/users/', user)
            .map(response => {
                return new User(response.json());
            })
            .catch(this.handleError);
    }
    */

    public getAllUsers(): Observable<any> {
        return this._http
            .get(API_URL + '/api/v1/users/')
            .map(this.extractBody)
            .catch(this.handleError);
    }

    public createUser(user: any): Observable<any> {
        return this._http
            .post(API_URL + '/api/v1/users/', user)
            .map(this.extractBody)
            .catch(this.handleError);
    }

    public getUserById(userId: number): Observable<User> {
        return this._http
            .get(API_URL + '/api/v1/users/id/' + userId)
            .map(response => {
                return new User(response.json());
            })
            .catch(this.handleError);
    }

    public updateUser(user: User): Observable<User> {
        return this._http
            .put(API_URL + '/api/v1/users/id/' + user.id, user)
            .map(response => {
                return new User(response.json());
            })
            .catch(this.handleError);
    }

    public deleteUserById(userId: number): Observable<null> {
        return this._http
            .delete(API_URL + '/api/v1/users/id/' + userId)
            .map(response => null)
            .catch(this.handleError);
    }

    public getFastlinkCredentials(): Observable<any> {
        return this._http
            .get(API_URL + '/api/v1/users/GetFastlinkCredentials')
            .map(this.extractBody)
            .catch(this.handleError);
    }

    /*------ Start /diagrams endpoints ------*/
    /*
    public getAllUsers(): Observable<User[]> {
        return this._http
            .get(API_URL + '/users')
            .map(response => {
                const users = response.json();
                return users.map((user) => new User(user));
            })
            .catch(this.handleError);
    }

    public createUser(user: User): Observable<User> {
        return this._http
            .post(API_URL + '/users', user)
            .map(response => {
                return new User(response.json());
            })
            .catch(this.handleError);
    }

    public getUserById(userId: number): Observable<User> {
        return this._http
            .get(API_URL + '/users/' + userId)
            .map(response => {
                return new User(response.json());
            })
            .catch(this.handleError);
    }

    public updateUser(user: User): Observable<User> {
        return this._http
            .put(API_URL + '/users/' + user.id, user)
            .map(response => {
                return new User(response.json());
            })
            .catch(this.handleError);
    }

    public deleteUserById(userId: number): Observable<null> {
        return this._http
            .delete(API_URL + '/users/' + userId)
            .map(response => null)
            .catch(this.handleError);
    }
    */

    private extractBody(res: Response) {
        const body = res.json();
        return body || {};
    }

    private handleError (error: Response | any) {
        console.error('ApiService::handleError', error);
        return Observable.throw(error);
    }
}
