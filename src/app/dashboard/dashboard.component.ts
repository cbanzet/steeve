import { Component, OnInit } from '@angular/core';
import { HeroService } from '../hero.service';
import { HeroI } from '../model/hero';
import { DataService } from '../shared/data.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {

  heroList : HeroI[] = [];


  constructor(private heroService : HeroService) { }

  ngOnInit(): void {
    this.getHeroes();
  }

  getHeroes(): void{
    this.heroService.getHeroes()
    .subscribe(heroList => this.heroList = heroList.slice(0,10));
  }



}
