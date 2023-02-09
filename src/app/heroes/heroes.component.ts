import { Component, OnInit } from '@angular/core';
import { HeroService } from '../hero.service';
import { HeroI } from '../model/hero';
import {DataSource} from '@angular/cdk/collections';
import {Observable, ReplaySubject} from 'rxjs';
import { HEROES } from '../mock-heroes';


const HEROESs: HeroI[] = HEROES;


@Component({
  selector: 'app-heros',
  templateUrl: './heroes.component.html',
  styleUrls: ['./heroes.component.scss']
})
export class HeroesComponent implements OnInit {

  heroes : HeroI[] = [];

  constructor(private heroservice : HeroService) { }

  ngOnInit(): void {
    this.getHeroes();
  }
  getHeroes(): void {
    this.heroservice.getHeroes()
    .subscribe(heroes => this.heroes = heroes);
  }

  

  displayedColumns  = ['position','id', 'name',  'symbol' ];
  dataToDisplay = [...HEROESs];

  dataSource = new ExampleDataSource(this.dataToDisplay);

  addData() {
    const I = Math.floor(Math.random() * HEROESs.length);
    this.dataToDisplay = [...this.dataToDisplay, HEROESs[I]];
    this.dataSource.setData(this.dataToDisplay);
  }

  removeData() {
    this.dataToDisplay = this.dataToDisplay.slice(0, -1);
    this.dataSource.setData(this.dataToDisplay);
  }
}


  class ExampleDataSource extends DataSource<HeroI> {
    private _dataStream = new ReplaySubject<HeroI[]>();
  
    constructor(initialData: HeroI[]) {
      super();
      this.setData(initialData);
    }
  
    connect(): Observable<HeroI[]> {
      return this._dataStream;
    }
  
    disconnect() {}
  
    setData(data: HeroI[]) {
      this._dataStream.next(data);
    }
  }

