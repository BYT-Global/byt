import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {RouterModule} from '@angular/router';

import {AuthComponent} from './auth.component';
import {CoreModule} from '../core/core.module';
import {MatButtonModule, MatCardModule} from '@angular/material';

@NgModule({
    imports: [
        CommonModule,
        CoreModule,
        RouterModule,
        MatCardModule,
        MatButtonModule
    ],
    declarations: [
        AuthComponent
    ],
    exports: [
        AuthComponent
    ]
})
export class AuthModule {}
