import { Injectable } from '@angular/core';
import { HEROES } from './mock-heroes';
import { HeroI } from './model/hero';
import { Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class HeroService {
  constructor() { }
  getHeroes(): Observable <HeroI[]> {
    const heroes = of (HEROES);
    return heroes;
  }

  getHero(name: any): Observable <HeroI> {
    const hero = HEROES.find(h => h.name === name)!;
    return of (hero);
  }
  
}
