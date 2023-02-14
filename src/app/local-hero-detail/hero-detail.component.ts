import { Location } from '@angular/common';
import { Component, Inject, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { HeroService } from '../hero.service';
import { HeroI, HeroSt } from '../model/hero';
import { DataSource } from '@angular/cdk/collections';
import { MatDialog, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { Observable, ReplaySubject } from 'rxjs';
import { DialogComponent } from '../dialog/dialog.component';
import { HEROES } from '../mock-heroes';
import { DataService } from '../shared/data.service';


@Component({
  selector: 'app-hero-detail',
  templateUrl: './hero-detail.component.html',
  styleUrls: ['./hero-detail.component.scss']
})
export class HeroDetailComponent implements OnInit {
 heroesList : HeroSt[] = [];
 heroObj : HeroSt = {
  idS: '',
  firstName: '',
  description: '',
  age: '',
  action: '',
  name: ''
};

heroObjet = this.heroObj;


  constructor(private route : ActivatedRoute,
              private heroService : HeroService,
              private location : Location,
              private dataService : DataService
              ) { }

  ngOnInit(): void {
  }

  getHero(hero : HeroSt){  
    this.dataService.getHero(hero);
 
    this.heroObj.firstName = hero.firstName ;
    this.heroObj.name = hero.name;
    this.heroObj.description = hero.description;
    this.heroObj.age = hero.age;

    this.heroObjet = this.heroObj;

  }

  goBack(): void{
    this.location.back();
  }
  
}
