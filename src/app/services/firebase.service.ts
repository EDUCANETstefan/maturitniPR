import { Injectable } from '@angular/core';
import {AngularFireAuth} from "@angular/fire/auth";

@Injectable({
  providedIn: 'root'
})
export default class FirebaseService {

  isLoggedIn = false;
  constructor(public firebaseAuth : AngularFireAuth) { }

  async singin(email: string, password : string) {
    await this.firebaseAuth.singInWithEmailAndPassword(email, password)
      .then(res=>{
        localStorage.setItem('user', JSON.stringify(res.user))
      })
  }

  async singup(email: string, password : string) {
    await this.firebaseAuth.createUserWithEmailAndPassword(email, password)
      .then(res=>{
        localStorage.setItem('user', JSON.stringify(res.user))
      })
  }

  async logout(){
    await this.firebaseAuth.singOut()
    localStorage.removeItem('user')
  }
}
