import { Component, OnInit } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/compat/auth';
import { Router } from '@angular/router';
import { Firestore } from 'firebase/firestore';
import "firebase/auth"
import "firebase/firestore"
import { getAuth, signInWithPhoneNumber } from "firebase/auth";
import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';
import { OtpDialogComponent } from '../otp-dialog/otp-dialog.component';
import { MatDialog } from '@angular/material/dialog';

@Component({
  selector: 'app-phone-connexion-dialog',
  templateUrl: './phone-connexion-dialog.component.html',
  styleUrls: ['./phone-connexion-dialog.component.scss']
})
export class PhoneConnexionDialogComponent implements OnInit {
  phoneNumber: any;
  reCaptchaVerifier :any;
  auth = getAuth()

  constructor( private router : Router,
                private matDialog : MatDialog ) { }

  ngOnInit(): void {
  }

  getOTP(){
    this.reCaptchaVerifier = new firebase.auth.RecaptchaVerifier(
      'sign-in-button',
      {size : 'invisible'}
      );
  
    firebase
    .auth()
    .signInWithPhoneNumber(this.phoneNumber, this.reCaptchaVerifier)
    .then((confirmationResult) =>
    {
      localStorage.setItem('verificationId', JSON.stringify
      (confirmationResult.verificationId));
      this.openOtpDialog();
      console.log(confirmationResult);
    }).catch((error) => {
      alert(error.message) 
      setTimeout(() =>{
        window.location.reload()
      }, 5000)
    })
  }

  openOtpDialog(){
    this.matDialog.open(OtpDialogComponent,{
      width: '350px',  
      disableClose : true,
    })
}

}
