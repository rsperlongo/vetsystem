import { Router } from '@angular/router';
import { Injectable } from "@angular/core";
import * as firebase from 'firebase/app';
import { AngularFireAuth } from "angularfire2/auth";

@Injectable()
export class AuthService {

    constructor(
                private afAuth: AngularFireAuth,
                private router: Router) {}

    login(email: string, password: string){
        this.afAuth.auth.signInWithEmailAndPassword(email,password)
        .then(value => {
            console.log('Its working');
            this.router.navigateByUrl('/home');
        })
        .catch( error => {
            console.log('ops, something its wrong:', error)
        })
    }

    emailSignup(email: string, password: string){
        this.afAuth.auth.createUserWithEmailAndPassword(email,password)
        .then(value => {
            console.log('Success', value);
            this.router.navigateByUrl('/home');
        })
            .catch(error => {
                console.log('ops, something its wrong:', error)
        })
    }

    googleLogin(){
        const provider = new firebase.auth.GoogleAuthProvider();
        return this.oAuthLogin(provider)
        .then(value => {
            console.log('Success', value),
            this.router.navigateByUrl('/home');
        });
    }

    logout(){
        this.afAuth.auth.signOut()
        .then(() => {
            this.router.navigate(['/']);
        });
    }

    private oAuthLogin(provider){
        return this.afAuth.auth.signInWithPopup(provider);
    }
}