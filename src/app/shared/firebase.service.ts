import { Injectable } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/compat/auth';
import { GoogleAuthProvider } from '@angular/fire/auth';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class FirebaseService {

  isLoggedIn = false;
  isSignedIn =  false;
  constructor(public firebaseAuth : AngularFireAuth, private router : Router) { }
  async singin(email : string , password: string){
    await this.firebaseAuth.signInWithEmailAndPassword(email, password)
    .then(res =>{
      this.isLoggedIn = true
      localStorage.setItem('user',JSON.stringify(res.user))
    }).catch((error) =>
    {
      alert(error.message)
    })
  }

  async singup(email : string , password: string){
    await this.firebaseAuth.createUserWithEmailAndPassword(email, password)
    .then(res =>{
      this.isLoggedIn = true
      localStorage.setItem('user',JSON.stringify(res.user))
    }).catch((error) => {
    alert(error.message)
  })
  }
  googleSignIn(){
    return this.firebaseAuth.signInWithPopup(new GoogleAuthProvider)
    .then(res =>{
      this.isLoggedIn = true
      localStorage.setItem('user',JSON.stringify(res.user?.uid))

    }).catch((error)  =>{
      alert(error.message)
    }
    )
  }
  phonelogin(){
    return this.firebaseAuth.signInWithPhoneNumber
  }
  checkIfLoggedIn(){
    return !!localStorage.getItem('user');
  }
  phoneIsLogged(){
    return !!localStorage.getItem('user_data');
  }
  
  logout(){
    this.firebaseAuth.signOut()
    localStorage.removeItem('user');
    localStorage.removeItem('user_data');
    this.isLoggedIn = false;
  }
  get windowRef(){
    return window
  }

  switch(){
    this.isSignedIn = !this.isSignedIn;
  }
}
