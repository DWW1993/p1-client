import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { HttpClient } from '@angular/common/http';
import 'rxjs/add/operator/map';
import { isNil } from 'lodash';
import { Router } from '@angular/router';

@Injectable()
export class FollowersService {
  private api = '/api/followers';

  constructor(
    private http: HttpClient,
    private router: Router
  ) { }

  getFollowingChirps(followerId: number): Observable<any> {
    return this.http.get(`${this.api}/${+followerId}`);
  }

}
