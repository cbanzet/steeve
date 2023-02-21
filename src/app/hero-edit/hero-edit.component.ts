import { DataSource } from '@angular/cdk/collections';
import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { Observable, ReplaySubject } from 'rxjs';
import { DialogComponent } from '../dialog/dialog.component';
import { HeroDetailDialogComponent } from '../hero-detail-dialog/hero-detail-dialog.component';
import { HeroSt } from '../model/hero';
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
  searchText = '';
  uptName : string ='';
  hidden = false;
  hiddenDetails = false;

  toggleBadgeVisibility() {
    this.hidden = !this.hidden;
  }
  toggleDetailsBadgeVisibility() {
    this.hiddenDetails = !this.hiddenDetails;
  }
  

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
    if(this.name === '' || this.firstName === ''){
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

  updateHero(hero : HeroSt){
     this.hidden = !this.hidden; 
    if(window.confirm('Update data to ' + hero.firstName + hero.name  ))
         {this.data.updateHero(hero);}
  }

  getHero(hero : HeroSt){
    this.hiddenDetails = !this.hiddenDetails;
    
    this.heroObj.firstName = hero.firstName ;
    this.heroObj.name = hero.name
    this.heroObj.description = hero.description;
    this.heroObj.age = hero.age;
  }

  deleteHero(hero : HeroSt){
    if(window.confirm('confirm delete the hero '+hero.name+ ' ?')){
      this.data.deleteHero(hero);
    }
  }
  openHeroDetailDialog(){
    const heroDetailsRef = this.matDialog.open(HeroDetailDialogComponent,{
      width: '350px',
      data : {
        firstName : this.heroObj.firstName,
        name : this.heroObj.name,
        age : this.heroObj.age,
        description : this.heroObj.description,
      }
    });

    heroDetailsRef.afterClosed().subscribe(
      result => { this.uptName = result,
      console.log(result) }
    );
     
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