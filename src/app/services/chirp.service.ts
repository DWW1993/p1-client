import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import 'rxjs/add/operator/map';
import { IChirp } from '../chirpInterface';
import { Observable } from 'rxjs/Observable';

@Injectable()
export class ChirpService {

    private api = 'http://localhost:3000/api/chirps';

    constructor (private http: HttpClient) {

    }

    chirps: Array<IChirp> = [];

    getChirps() {
        return this.http.get(this.api);
    }

    getChirp(id: string) {
        return this.http.get(`${this.api}/${id}`);
    }

    deleteChirp(id: string) {
        return this.http.delete(`${this.api}/${id}`);
    }

    createChirp(chirp: IChirp): Observable<any> {
        return this.http.post(this.api, chirp);
    }
}

