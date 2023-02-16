import { Injectable } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/compat/auth';
import { GoogleAuthProvider } from '@angular/fire/auth';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class FirebaseService {

  isLoggedIn = false
  constructor(public firebaseAuth : AngularFireAuth, private router : Router) { }
  async singin(email : string , password: string){
    await this.firebaseAuth.signInWithEmailAndPassword(email, password)
    .then(res =>{
      this.isLoggedIn = true
      localStorage.setItem('user',JSON.stringify(res.user))
    })
  }

  async singup(email : string , password: string){
    await this.firebaseAuth.createUserWithEmailAndPassword(email, password)
    .then(res =>{
      this.isLoggedIn = true
      localStorage.setItem('user',JSON.stringify(res.user))
    })
  }
  googleSignIn(){
    return this.firebaseAuth.signInWithPopup(new GoogleAuthProvider)
    .then(res =>{
      this.isLoggedIn = true
      localStorage.setItem('user',JSON.stringify(res.user?.uid))

    }, err =>{
      alert(err.message);
    })
  }
  
  logout(){
    this.firebaseAuth.signOut()
    localStorage.removeItem('user')
    this.isLoggedIn = false;
  }
}
