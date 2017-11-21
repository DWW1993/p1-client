import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { HttpClient } from '@angular/common/http';
import 'rxjs/add/operator/map';
import { IUser } from '../userInterface';


@Injectable()
export class UserService {
  private api = 'http://localhost:3000/api/users';

      constructor (private http: HttpClient) {

      }
      users: Array<IUser> = []

      spGetUsers(): Observable<any> {
          return this.http.get(this.api);
      }

      spGetUser(id: number): Observable<any> {
          return this.http.get(`${this.api}/${+id}`);
      }

      spDeleteUser (id: number): Observable<any> {
          return this.http.delete(`${this.api}/${+id}`);
      }

      spCreateUser(user: IUser): Observable<any> {
          return this.http.post(this.api, user);
      }
}
