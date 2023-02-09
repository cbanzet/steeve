import { Location } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { HeroService } from '../hero.service';
import { HeroI } from '../model/hero';


@Component({
  selector: 'app-hero-detail',
  templateUrl: './hero-detail.component.html',
  styleUrls: ['./hero-detail.component.scss']
})
export class HeroDetailComponent implements OnInit {
  hero : HeroI |undefined;

  constructor(private route : ActivatedRoute,
              private heroService : HeroService,
              private location : Location) { }

  ngOnInit(): void {
    this.getHero();
  }

  getHero(): void {
    const name = String (this.route.snapshot.paramMap.get('name'));
    this.heroService.getHero(name)
      .subscribe(hero => this.hero = hero);
  }

  goBack(): void{
    this.location.back();
  }

}
