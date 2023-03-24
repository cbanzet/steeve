import { Injectable } from '@angular/core';
import { AngularFireModule } from '@angular/fire/compat';
import { AngularFirestore } from '@angular/fire/compat/firestore';
import { HeroSt } from '../model/hero';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  constructor(private afs : AngularFirestore,
              ) {}

  // Ajouter un hero (create)
  addHero(hero: HeroSt){
    hero.idS = this.afs.createId();
    return this.afs.collection('/Heroes').add(hero);
  }

  //Afficher la liste des heros (read)
  getAllHeroes(){
    return this.afs.collection('/Heroes').snapshotChanges();
  }

  //Afficher un hero
  getHero(hero : HeroSt){
    return this.afs.collection('/Heroes' +hero.idS).get();
  }

  //Mettre a jour la liste des heros (update)
  updateHero(hero : HeroSt){
    this.afs.doc('/Heroes/' +hero.idS).update(hero);
  }


  //Supprimer un hero (delete)
  deleteHero(hero : HeroSt){
    return this.afs.doc('/Heroes/'+hero.idS).delete();
  }

}
