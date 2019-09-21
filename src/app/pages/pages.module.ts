import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PagesComponent } from './pages.component';
import {PagesRoutingModule} from './pages.routing.module';
import { MyDashComponent } from './my-dash/my-dash.component';
import {CoreModule} from '../core/core.module';

@NgModule({
    imports: [
        CommonModule,
        PagesRoutingModule,
        CoreModule
    ],
    declarations: [
        PagesComponent,
        MyDashComponent
    ],
    exports: [
        PagesComponent
    ]
})
export class PagesModule {}
