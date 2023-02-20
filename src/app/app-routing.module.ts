import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';


import { HeroEditComponent } from './hero-edit/hero-edit.component';
import { OtpDialogComponent } from './otp-dialog/otp-dialog.component';
import { UserProfilComponent } from './user-profil/user-profil.component';

const routes: Routes = [
  {path : 'heroEdit', component: HeroEditComponent },
  {path: '', redirectTo: '/heroEdit', pathMatch: 'full'},
  {path: 'userProfile', component: UserProfilComponent },
  {path: 'optCode', component : OtpDialogComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
