import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {AuthGuard} from './core/auth/auth.guard';
import {AuthComponent} from './auth/auth.component';
import {LoginGuard} from './core/auth/login.guard';
import {NotFoundComponent} from './errors/not-found/not-found.component';


const routes: Routes = [
    {
        path: '',
        pathMatch:  'full',
        canActivate: [AuthGuard],
        loadChildren: () => import('./pages/pages.module').then((m) => m.PagesModule)
    },
    {
        path: 'auth',
        component: AuthComponent,
        canActivate: [LoginGuard],
        data: {
            title: 'Sign In | BYT'
        }
    },
    {
        path: 'not-found',
        component: NotFoundComponent,
        data: {
            title: 'Not found | BYT'
        }
    },
    {
        path: '**',
        redirectTo: 'not-found'
    }
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})
export class AppRoutingModule { }
