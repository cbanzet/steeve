import { Component } from '@angular/core';
import { AngularFirestore } from '@angular/fire/compat/firestore';
import { FirebaseTSApp } from 'firebasets/firebasetsApp/firebaseTSApp';
import { FirebaseTSFirestore } from 'firebasets/firebasetsFirestore/firebaseTSFirestore';
import { HeroI } from './model/hero';
import { DialogComponent } from './dialog/dialog.component';
import { MatDialog } from '@angular/material/dialog';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  //private firestore: FirebaseTSFirestore;
  
  constructor(private matDialog : MatDialog){ }
  openDialog(){
    this.matDialog.open(DialogComponent,{
      width: '350px',  
    })
  }
  title = 'steeve';
  
}
