import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {environment} from '../../../../environments/environment';

@Injectable({
    providedIn: 'root'
})
export class ManageAuthService {
    constructor(private http: HttpClient) {}

    authGoogle(token) { return this.http.get(`${environment.msAuth}/authGoogle/${token}`); }

    authFacebook(token) { return this.http.get(`${environment.msAuth}/authFacebook/${token}`); }
}
