import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import 'rxjs/add/operator/map';
import { IChirp } from '../chirpInterface';
import { Observable } from 'rxjs/Observable';

@Injectable()
export class ChirpService {

    public api = 'http://localhost:3000/api/chirps';
    

    constructor (public http: HttpClient) {

    }

    chirps: Array<any> = [];

    getChirps(): Observable<any> {
        return this.http.get(this.api);
    }

    getChirp(id: string): Observable<any> {
        return this.http.get(`${this.api}/${id}`);
    }

    deleteChirp(id: string): Observable<any> {
        return this.http.delete(`${this.api}/${id}`);
    }

    createChirp(chirp: any): Observable<any> {
        return this.http.post(this.api, chirp);
    }
}

