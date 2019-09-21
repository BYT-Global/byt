import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {HttpClientModule} from '@angular/common/http';
import {JWT_OPTIONS, JwtModule} from '@auth0/angular-jwt';
import {TokenService} from './core/auth/token.service';
import {AngularFireAuthModule} from '@angular/fire/auth';
import {AngularFireModule} from '@angular/fire';
import {environment} from '../environments/environment';
import {ErrorsModule} from './errors/errors.module';
import {AuthModule} from './auth/auth.module';

export function jwtOptionsFactory() {
    return {
        tokenGetter: () => {
            return localStorage.getItem('authToken');
        }
    };
}

@NgModule({
    declarations: [
        AppComponent
    ],
    imports: [
        BrowserModule,
        BrowserAnimationsModule,
        HttpClientModule,
        JwtModule.forRoot({
            jwtOptionsProvider: {
                provide: JWT_OPTIONS,
                useFactory: jwtOptionsFactory,
                deps: [TokenService]
            }
        }),
        AppRoutingModule,

        AngularFireAuthModule,
        AngularFireModule.initializeApp(environment.firebaseConfig),

        ErrorsModule,
        AuthModule
    ],
    providers: [],
    bootstrap: [AppComponent]
})
export class AppModule { }
