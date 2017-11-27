import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { HttpClient } from '@angular/common/http';
import 'rxjs/add/operator/map';
import { isNil } from 'lodash';
import { Router } from '@angular/router';
import { IUser } from '../userInterface';


@Injectable()
export class UserService {
    private api = '/api/users';
    user: IUser;

    constructor (
        private http: HttpClient,
        private router: Router
    ) { }

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

    login(email:string, password: string): Observable<any> {
        return this.http.post(`${this.api}/login`, { email, password })
            .map((user: IUser) => {
                this.user = user;
                return user;
            });
    }

    me(login?: boolean) {
        return new Promise((resolve, reject) => {
            if (isNil(this.user)) {
                if (login) {
                    this.router.navigate(['/login']);
                    return;
                }
                
                reject();
                return;
            } 
     
            resolve(this.user);
        });
    }
}

