import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';


import { HeroEditComponent } from './hero-edit/hero-edit.component';
import { OtpDialogComponent } from './otp-dialog/otp-dialog.component';
import { UserProfilComponent } from './user-profil/user-profil.component';
import { ConnexionDialogComponent } from './connexion-dialog/connexion-dialog.component';
import { AuthGuard } from './shared/auth.guard';

const routes: Routes = [
  {path : 'connexion' , component: ConnexionDialogComponent},
  {path : 'heroEdit', component: HeroEditComponent, canActivate:[AuthGuard]},
  {path: '', redirectTo: '/connexion', pathMatch: 'full'},
  {path: 'userProfile', component: UserProfilComponent },
  {path: 'optCode', component : OtpDialogComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
