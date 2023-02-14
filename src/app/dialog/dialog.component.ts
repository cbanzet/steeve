import { Component, OnInit } from '@angular/core';
import { MatDialog, MatDialogClose } from '@angular/material/dialog';
import { DataService } from '../shared/data.service';

import { HeroEditComponent } from '../hero-edit/hero-edit.component';
import { HeroSt } from '../model/hero';
import { FirebaseTSFirestore } from 'firebasets/firebasetsFirestore/firebaseTSFirestore';

@Component({
  selector: 'app-dialog',
  templateUrl: './dialog.component.html',
  styleUrls: ['./dialog.component.scss']
})
export class DialogComponent implements OnInit {

  heroObj: HeroSt = {
    idS: '',
    firstName: '',
    name: '',
    description: '',
    age : '',
    action: ''
    
  }
  name: string = '';
  description: string = '';
  age: string ='';
  firstName: string = '';


  constructor(private matDialog: MatDialog, private dataService : DataService ) { }

  ngOnInit(): void {
  }

  addHero(): void{
    this.heroObj.firstName = this.firstName;
    this.heroObj.name = this.name;
    this.heroObj.description = this.description;
    this.heroObj.age = this.age;
    
    this.dataService.addHero(this.heroObj);
    alert("Hero " + this.firstName + " successfully add");
  }
}
