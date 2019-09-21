import { Injectable } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/auth';
import {Observable} from 'rxjs';
import * as firebase from 'firebase';
import { auth } from 'firebase/app';

@Injectable({
    providedIn: 'root'
})
export class ManageFirebaseService {
    userData: Observable<firebase.User>;

    constructor(private angularFireAuth: AngularFireAuth) {
        this.userData = angularFireAuth.authState;
    }

    googleAuth(): Promise<any> {
        return this.angularFireAuth
            .auth
            .signInWithPopup(new auth.GoogleAuthProvider());
    }

    facebookAuth() {
        return this.angularFireAuth
            .auth
            .signInWithPopup(new auth.FacebookAuthProvider());
    }

    signOut(): Promise<any> {
        return this.angularFireAuth
            .auth
            .signOut();
    }
}
