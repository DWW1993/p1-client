import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { HttpClient } from '@angular/common/http';
import 'rxjs/add/operator/map';

import { IUser } from '../userInterface';


@Injectable()
export class UserService {
    private api = 'http://localhost:3000/api/users';

    constructor (private http: HttpClient) { }

    users: Array<IUser> = []

    getUsers(): Observable<any> {
        return this.http.get(this.api);
    }

    getUser(id: number): Observable<any> {
        return this.http.get(`${this.api}/${+id}`);
    }

    deleteUser (id: number): Observable<any> {
        return this.http.delete(`${this.api}/${+id}`);
    }

    createUser(user: IUser): Observable<any> {
        return this.http.post(this.api, user);
    }
}
