import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import { FirebaseService } from './firebase.service';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {
  constructor(private firebaseService : FirebaseService,
              private router: Router){}
  canActivate(){
   if(this.firebaseService.checkIfLoggedIn()){
    return true;
   }
   if(this.firebaseService.phoneIsLogged()){
    return true
   }alert("WARNING: You must be logged in first!");
   this.router.navigate(['connexion']);
   return false;
  }
  
  
}
