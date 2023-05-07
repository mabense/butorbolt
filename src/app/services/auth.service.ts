import { Injectable } from '@angular/core';
import { AngularFireAuth } from "@angular/fire/compat/auth";

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(
    private auth: AngularFireAuth
  ) { }

  login(name: string, passw: string) {
    return this.auth.signInWithEmailAndPassword(name.concat("@e.mail"), passw);
  }

  isLoggedIn() {
    return this.auth.user;
  }

  logout() {
    this.auth.signOut();
  }
}