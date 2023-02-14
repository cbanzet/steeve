import { Component } from '@angular/core';
import { AngularFirestore } from '@angular/fire/compat/firestore';
import { FirebaseTSApp } from 'firebasets/firebasetsApp/firebaseTSApp';
import { FirebaseTSFirestore } from 'firebasets/firebasetsFirestore/firebaseTSFirestore';
import { HeroI, HeroSt } from './model/hero';
import { DialogComponent } from './dialog/dialog.component';
import { MatDialog } from '@angular/material/dialog';
import { DataService } from './shared/data.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  heroesList : HeroSt[] = [];

  hidden = false;
  
  constructor(private matDialog : MatDialog,
              private data : DataService){ }
  openDialog(){
    this.matDialog.open(DialogComponent,{
      width: '350px',  
    })
  }
  title = 'steeve';

  updateHero(hero : HeroSt){
    this.hidden = !this.hidden; 
   if(window.confirm('Update data to ' + hero.firstName + hero.name  ))
        {this.data.updateHero(hero);}
 }

  
}
