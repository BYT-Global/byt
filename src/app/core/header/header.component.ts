import { Component, OnInit } from '@angular/core';
import {ManageFirebaseService} from '../../shared/services/manage-firebase/manage-firebase.service';
import {TokenService} from '../auth/token.service';
import {Router} from '@angular/router';

@Component({
    selector: 'byt-header',
    templateUrl: './header.component.html',
    styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
    constructor(private _router: Router,
                private _firebaService: ManageFirebaseService,
                private _tokenService: TokenService) {}

    ngOnInit() {}

    logout() {
        this._firebaService
            .signOut()
            .then(() => this._tokenService.removeToken())
            .then(() => this._router.navigate(['/auth']));
    }
}
