import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';


import { DashboardComponent } from './dashboard/dashboard.component';
import { HeroDetailComponent } from './hero-detail/hero-detail.component';
import { HeroEditComponent } from './hero-edit/hero-edit.component';
import { HeroesComponent } from './heroes/heroes.component';

const routes: Routes = [
  {path: 'dashboard', component: DashboardComponent},
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
