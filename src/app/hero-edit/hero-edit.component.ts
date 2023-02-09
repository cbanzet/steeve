import { DataSource } from '@angular/cdk/collections';
import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { Observable, ReplaySubject } from 'rxjs';
import { DialogComponent } from '../dialog/dialog.component';
import { HEROES } from '../mock-heroes';
import { HeroSt, HeroI } from '../model/hero';
import { DataService } from '../shared/data.service';



@Component({
  selector: 'app-hero-edit',
  templateUrl: './hero-edit.component.html',
  styleUrls: ['./hero-edit.component.scss']
})
export class HeroEditComponent implements OnInit {

 heroesList : HeroSt[] = [];

  heroObj : HeroSt = {
    idS: '',
    firstName: '',
    description: '',
    age: '',
    action: '',
    name: ''
  };
  firstName : string = '';
  name : string = '';
  description : string = '';
  age : string = '';
  position  = this.heroesList.entries();
  ation : any ;


  constructor(private data : DataService,
              private matDialog : MatDialog){}

openDialog(){
  this.matDialog.open(DialogComponent,{
    width: '350px',})
  }

  displayedColumns  = [ 'firstName', 'name','age' , 'description' , 'action' ];
  dataToDisplay = [...this.heroesList];

  dataSource = new ExampleDataSource(this.dataToDisplay);



  ngOnInit(): void {
    this.getAllHeroes();
  }

  getAllHeroes(){
    this.data.getAllHeroes().subscribe(res => {
      this.heroesList = res.map((e: any) => {
        const data = e.payload.doc.data();
        data.idS = e.payload.doc.id;
        return data;
      })
    }, err =>{
      alert('Error while fetchind hero');
    })
  }

  resetForms(){
    this.age = ''  ;
    this.name = '';
    this.description = '';
  }

  addHero(){
    if(this.name === ''){
      alert('Please input the hero name');
      return;
    }
    
    this.heroObj.firstName = this.firstName ;
    this.heroObj.name = this.name
    this.heroObj.description = this.description;
    this.heroObj.age = this.age;

    this.data.addHero(this.heroObj);
    this.resetForms();
  }

  updateHero(){
    
  }

  deleteHero(hero : HeroSt){
    if(window.confirm('confirm delete the hero '+hero.name+ ' ?')){
      this.data.deleteHero(hero);
    }
  }

}

class ExampleDataSource extends DataSource<HeroSt> {
  private _dataStream = new ReplaySubject<HeroSt[]>();

  constructor(initialData: HeroSt[]) {
    super();
    this.setData(initialData);
  }

  connect(): Observable<HeroSt[]> {
    return this._dataStream;
  }

  disconnect() {}

  setData(data: HeroSt[]) {
    this._dataStream.next(data);
  }
}