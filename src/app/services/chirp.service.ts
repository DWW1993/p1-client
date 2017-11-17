import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import 'rxjs/add/operator/map';
import { IChirp } from '../chirpInterface';

@Injectable()
export class ChirpService {

    static api = 'http://localhost:3000/api/chirps';

    constructor (private http: HttpClient) {

    }

    chirps: Array<IChirp> = [];

    getChirps() {

    }

    getChirp(id: string) {

    }

    deleteChirp(id: string) {

    }

    createChirp() {

    }
}

