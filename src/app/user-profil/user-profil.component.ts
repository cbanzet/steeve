import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { ConnexionDialogComponent } from '../connexion-dialog/connexion-dialog.component';
import { FirebaseService } from '../shared/firebase.service';
import { Location } from '@angular/common';
import { Router } from '@angular/router';


@Component({
  selector: 'app-user-profil',
  templateUrl: './user-profil.component.html',
  styleUrls: ['./user-profil.component.scss']
})
export class UserProfilComponent implements OnInit {

  @Output() isLogout = new EventEmitter<void>()
  isSignedIn = false;
  userData: any;
  constructor(public firebaseService : FirebaseService,
              private matDialog : MatDialog,
              private location : Location,
              private router : Router) { }

  ngOnInit(): void {
    this.connexion()
    
  }

  connexion(){
    if(localStorage.getItem('user' || 'user_data') !== null){
      this.isSignedIn = false;
      var data = JSON.parse(localStorage.getItem('user_data') || '{}');
    this.userData = data.user.phoneNumber;
    console.log(this.userData);}
    else
    this.isSignedIn = true
  }

  openConnexionDialog(){
    this.matDialog.open(ConnexionDialogComponent,{
      width: '350px',})
    }

  handleLogout(){
    if(window.confirm("You will be logged out")){
    this.isSignedIn = true
    this.firebaseService.logout()
    this.isLogout.emit()
    this.router.navigate(['/heroEdit'])
    }
  }

  goBack(): void {
    this.location.back();
  }

  

}
