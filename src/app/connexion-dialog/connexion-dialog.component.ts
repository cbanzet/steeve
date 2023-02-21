import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';
import { MatDialog } from '@angular/material/dialog';
import { Router } from '@angular/router';
import { PhoneConnexionDialogComponent } from '../phone-connexion-dialog/phone-connexion-dialog.component';
import { FirebaseService } from '../shared/firebase.service';
import { UserProfilComponent } from '../user-profil/user-profil.component';


@Component({
  selector: 'app-connexion-dialog',
  templateUrl: './connexion-dialog.component.html',
  styleUrls: ['./connexion-dialog.component.scss']
})

export class ConnexionDialogComponent implements OnInit {

  @Output() isLogout = new EventEmitter<void>()
  constructor(public firebaseService : FirebaseService,
               private matDialog: MatDialog, private router : Router
               ) { }
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
    if(this.firebaseService.isLoggedIn){
    this.isSignedIn = true
    this.userProfile()
    };
  }

  async onSignin(email : string , password: string){
    await this.firebaseService.singin(email,password)
    if(this.firebaseService.isLoggedIn){
    this.isSignedIn = true
    this.userProfile()
    };
  }
  signInWithGoogle(){
    this.firebaseService.googleSignIn();
    if(this.firebaseService.isLoggedIn)
    this.isSignedIn = true
    this.userProfile()
  }
  
 handleLogout(){
    if(window.confirm("You will be logged out")){
    this.isSignedIn = false
    this.firebaseService.logout()
    this.isLogout.emit()
    this.router.navigate(['/heroEdit']);

    }
  }

  userProfile(){
    this.router.navigate(['/userProfile']);
    this.matDialog.closeAll();
  }

  openPhoneNumberDialog(){
    this.matDialog.open(PhoneConnexionDialogComponent,{
          width: '350px',
      })
    }
}

