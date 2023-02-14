import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';


import { HeroDetailComponent } from './local-hero-detail/hero-detail.component';
import { HeroEditComponent } from './hero-edit/hero-edit.component';
import { HeroesComponent } from './localHeroes/heroes.component';

const routes: Routes = [
  {path : 'heroes', component: HeroesComponent},
  {path : 'heroEdit', component: HeroEditComponent },
  {path : 'detail/:name', component: HeroDetailComponent},
  {path: '', redirectTo: '/heroEdit', pathMatch: 'full'},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
