import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';


import { HeroEditComponent } from './hero-edit/hero-edit.component';
import { UserProfilComponent } from './user-profil/user-profil.component';

const routes: Routes = [
  {path : 'heroEdit', component: HeroEditComponent },
  {path: '', redirectTo: '/heroEdit', pathMatch: 'full'},
  {path: 'userProfile', component: UserProfilComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
