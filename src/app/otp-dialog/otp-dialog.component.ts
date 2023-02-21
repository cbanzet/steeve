import { Component, OnInit } from '@angular/core';
import { NgxOtpInputConfig } from 'ngx-otp-input';
import { FirebaseService} from '../shared/firebase.service';
import { getAuth, signInWithPhoneNumber } from "firebase/auth";
import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';
import { MatDialog } from '@angular/material/dialog';
import { Router } from '@angular/router';
import "firebase/auth"
import "firebase/firestore"
import { UserProfilComponent } from '../user-profil/user-profil.component';


@Component({
  selector: 'app-otp-dialog',
  templateUrl: './otp-dialog.component.html',
  styleUrls: ['./otp-dialog.component.scss']
})
export class OtpDialogComponent implements OnInit {

otp !: string;
verify: any;
isSignedIn = false;

constructor( private router : Router, private matDialog : MatDialog,
             private firebaseService : FirebaseService) { }

  ngOnInit() {
    this.connexion();
   this.verify = JSON.parse(localStorage
    .getItem('verificationId') || '{}');
    console.log(this.verify);
  }

handleFillEvent(otpCode: any): void{
  this.otp = otpCode;
  console.log(this.otp);
}
handleOtpChange(otpCode: any): void{
  console.log(otpCode);
}
otpInputConfig: NgxOtpInputConfig = {
  otpLength: 6,
  autofocus : true,
}

handleClick(){
    var credentials = firebase.auth.PhoneAuthProvider
    .credential(this.verify, this.otp);
    console.log(credentials);
  
  firebase
  .auth()
  .signInWithCredential(credentials)
  .then((response) => {
    localStorage.setItem('user_data', JSON.stringify(response));
    console.log(response);
    if(window.confirm("Succes")){
        this.closeOtpDialog();
        this.firebaseService.switch();
        this.router.navigate(['/userProfile'])};
  }).catch((error) => {
    alert(error.message)
  })
}

connexion(){
  if(localStorage.getItem('user') !== null)
    this.isSignedIn = true
  else
  this.isSignedIn = false
}

closeOtpDialog(){
  this.matDialog.closeAll();
}

}
