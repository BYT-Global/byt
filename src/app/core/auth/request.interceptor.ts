import { Injectable } from '@angular/core';
import {
    HttpInterceptor,
    HttpRequest,
    HttpHandler,
    HttpEvent
} from '@angular/common/http';
import { Observable } from 'rxjs';
import { TokenService } from './token.service';

@Injectable({
    providedIn: 'root'
})
export class RequestInterceptor implements HttpInterceptor {
    constructor(private tokenService: TokenService) {}

    intercept(req: HttpRequest<any>,
              next: HttpHandler): Observable<HttpEvent<any>> {

        return this.tokenService.hasToken() ?
            next.handle(req.clone({
                headers: req.headers.set('Authorization', 'Bearer ' + this.tokenService.getToken())
            })) :
            next.handle(req);
    }
}
