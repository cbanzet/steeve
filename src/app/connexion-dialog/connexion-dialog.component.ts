import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';
import { FirebaseService } from '../shared/firebase.service';


@Component({
  selector: 'app-connexion-dialog',
  templateUrl: './connexion-dialog.component.html',
  styleUrls: ['./connexion-dialog.component.scss']
})

export class ConnexionDialogComponent implements OnInit {

  @Output() isLogout = new EventEmitter<void>()
  constructor(public firebaseService : FirebaseService) { }
  isSignedIn = false;
  signInBadge = false;

  ngOnInit(): void {
    this.connexion();
  }
  signInBadgeToogle(){
    this.signInBadge = !this.signInBadge;
  }

  connexion(){
    if(localStorage.getItem('user') !== null)
      this.isSignedIn = true
    else
    this.isSignedIn = false
  }

  async onSignup(email : string , password: string){
    await this.firebaseService.singup(email,password)
    if(this.firebaseService.isLoggedIn)
    this.isSignedIn = true
  }
  async onSignin(email : string , password: string){
    await this.firebaseService.singin(email,password)
    if(this.firebaseService.isLoggedIn)
    this.isSignedIn = true
  }
  signInWithGoogle(){
    this.firebaseService.googleSignIn();
    if(this.firebaseService.isLoggedIn)
    this.isSignedIn = true
  }
  
 handleLogout(){
    if(window.confirm("You will be logged out")){
    this.isSignedIn = false
    this.firebaseService.logout()
    this.isLogout.emit()
    }
  }

}

