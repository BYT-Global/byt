import { Injectable } from '@angular/core';
import { JwtHelperService } from '@auth0/angular-jwt';

const key = 'my-expenses';

@Injectable({
    providedIn: 'root'
})
export class TokenService {
    constructor(private _jwtHelperService: JwtHelperService) {}

    setToken = (token) => window.localStorage.setItem(key, token);

    hasToken = () => !this._jwtHelperService.isTokenExpired(this.getToken());

    getToken = () => window.localStorage.getItem(key);

    removeToken = () => window.localStorage.removeItem(key);
}
