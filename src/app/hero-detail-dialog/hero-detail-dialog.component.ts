import { Component, Inject, OnInit } from '@angular/core';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';

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

  constructor(
    @Inject(MAT_DIALOG_DATA) public data:any
    ) {
      this.firstName = data.firstName;
      this.name = data.name;
      this.age = data.age;
      this.description = data.description;
     }

  ngOnInit(): void {
  }

}
