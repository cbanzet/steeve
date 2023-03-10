import { Component, OnInit } from '@angular/core';
import { AngularFirestore } from '@angular/fire/compat/firestore';
import { FirebaseTSApp } from 'firebasets/firebasetsApp/firebaseTSApp';
import { FirebaseTSFirestore } from 'firebasets/firebasetsFirestore/firebaseTSFirestore';
import { HeroSt } from './model/hero';
import { DialogComponent } from './dialog/dialog.component';
import { MatDialog } from '@angular/material/dialog';
import { DataService } from './shared/data.service';
import { FirebaseService } from './shared/firebase.service';
import { ConnexionDialogComponent } from './connexion-dialog/connexion-dialog.component';
import { HeroDetailDialogComponent } from './hero-detail-dialog/hero-detail-dialog.component';
import { OtpDialogComponent } from './otp-dialog/otp-dialog.component';
import { PhoneConnexionDialogComponent } from './phone-connexion-dialog/phone-connexion-dialog.component';
import { InformDialogComponent } from './inform-dialog/inform-dialog.component';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  heroesList : HeroSt[] = [];
  hidden = false;
  isSignedIn = false;
  appVersion : string ='';

  
  constructor(private matDialog : MatDialog,
              private data : DataService,
             ){ }

  ngOnInit(){
    this.matDialog.open(InformDialogComponent,{
      width: '350px',})
  }
  

  openConnexionDialog(){
    this.matDialog.open(ConnexionDialogComponent,{
      width: '350px',})
  }
  openDialog(){
      this.matDialog.open(DialogComponent,{
        width: '350px',  
        disableClose : true,
      })
  }
  openPhoneNumberDialog(){
    this.matDialog.open(PhoneConnexionDialogComponent,{
      width: '350px',
    })
  }
  

  toggleBadgeVisibility(){
    this.hidden = !this.hidden
  }

  connectIconBadge(){
    this.isSignedIn = !this.isSignedIn;
  } 
  title = 'steeve';

  checkIfConnect(){
    if(localStorage.getItem('user') !== null)
      this.isSignedIn = true
    else
    this.isSignedIn = false
  }


  updateHero(hero : HeroSt){
    this.hidden = !this.hidden; 
   if(window.confirm('Update data to ' + hero.firstName + hero.name  ))
        {this.data.updateHero(hero);}
 }
  
}
