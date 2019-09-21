import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';
import { HTTP_INTERCEPTORS } from '@angular/common/http';
import { RouterModule } from '@angular/router';
import { RequestInterceptor } from './auth/request.interceptor';
import { HeaderComponent } from './header/header.component';
import {MatIconModule, MatToolbarModule} from '@angular/material';

@NgModule({
    imports: [
        ReactiveFormsModule,
        CommonModule,
        RouterModule,
        MatToolbarModule,
        MatIconModule
    ],
    declarations: [HeaderComponent],
    exports: [
        HeaderComponent
    ],
    providers: [
        {
            provide: HTTP_INTERCEPTORS,
            useClass: RequestInterceptor,
            multi: true
        }
    ]
})
export class CoreModule { }
