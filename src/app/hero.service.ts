import { Injectable } from '@angular/core';
import { HEROES } from './mock-heroes';
import { HeroI, HeroSt } from './model/hero';
import { Observable, of } from 'rxjs';
import { DataService } from './shared/data.service';

@Injectable({
  providedIn: 'root'
})
export class HeroService {
  constructor( private dataService : DataService ) { }
  getHeroes(): Observable <HeroI[]> {
    const heroes = of (HEROES);
    return heroes;
  }

  getHero(name: any): Observable <HeroI> {
    const hero = HEROES.find(h => h.name === name)!;
    return of (hero);
  }
  
  
}
