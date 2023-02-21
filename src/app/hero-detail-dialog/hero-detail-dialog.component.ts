import { Component, Inject, OnInit } from '@angular/core';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';
import { HeroSt } from '../model/hero';
import { DataService } from '../shared/data.service';

@Component({
  selector: 'app-hero-detail-dialog',
  templateUrl: './hero-detail-dialog.component.html',
  styleUrls: ['./hero-detail-dialog.component.scss']
})
export class HeroDetailDialogComponent implements OnInit {

  firstName : string;
  name : string ;
  age : string;
  description : string;
  editBadge = false;

  constructor(private dataService : DataService,
    @Inject(MAT_DIALOG_DATA) public data:any
    ) {
      this.firstName = data.firstName; 
      this.name = data.name;
      this.age = data.age;
      this.description = data.description;
     }

     editBadgeToogle(){
      this.editBadge = !this.editBadge;
     }

     updateHero(){
      
     }

     
  ngOnInit(): void {
  }

}
