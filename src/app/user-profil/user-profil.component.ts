import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { ConnexionDialogComponent } from '../connexion-dialog/connexion-dialog.component';
import { FirebaseService } from '../shared/firebase.service';
import { Location } from '@angular/common';


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
              private location : Location) { }

  ngOnInit(): void {
    this.connexion()
    var data = JSON.parse(localStorage.getItem('user_data') || '{}');
    this.userData = data.user.phoneNumber;
    console.log(this.userData);
  }

  connexion(){
    if(localStorage.getItem('user') !== null)
      this.isSignedIn = true
    else
    this.isSignedIn = false
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
    }
  }

  goBack(): void {
    this.location.back();
  }

}
