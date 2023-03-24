import { appVersion } from './../model/hero';
import { AngularFirestore, AngularFirestoreCollection } from '@angular/fire/compat/firestore';
import { InformDialogComponent } from './../inform-dialog/inform-dialog.component';
import { MatDialog } from '@angular/material/dialog';
import { Injectable } from '@angular/core';
import { SwUpdate, VersionReadyEvent } from '@angular/service-worker';
import { filter, Observable } from 'rxjs';
import { collection } from 'firebase/firestore';


@Injectable({
  providedIn: 'root'
})
export class UpdateServiceService {

  currentVersion : string ="0.0.1";
  appVersion : any;
  public appVersionInFirebase : appVersion [] = [];


  constructor(public matdialog: MatDialog,
              private swUpdate : SwUpdate,
              private afs : AngularFirestore,
              ) { this.checkForUpdate()
                }

  checkForUpdate(){
    console.log("App update service");
    console.log(this.getAppVersion());
    this.swUpdate.versionUpdates.pipe(
      filter((evt): evt is VersionReadyEvent => {
        console.log("app update event:" + evt.type + evt);
        return evt.type === 'VERSION_READY';
      })).subscribe(event => {
        this.showAppUpdateAlert();
      });
  }

  showAppUpdateAlert(){
    const title = "Nouvelle version de l'application disponible";
    const message = "Cliquez sur installer pour poursuivre et installer la version: ";
    const action = "Instaler";
    const currentAppVersion = this.currentVersion;
    const nextAppVersion = "0.0.2"

    let dialogRef = this.matdialog.open(InformDialogComponent,{
      disableClose: true,
      data: {
        title: title,
        message : message,
        action: action,
        currentAppVersion : currentAppVersion,
        nextAppVersion : nextAppVersion
      }
    });
  dialogRef.afterClosed().subscribe(result =>{
    this.doUpdate();
  });
  }

  // appUpdateAlert(){
  //   if (this.swUpdate.isEnabled){
  //     this.swUpdate.available.subscribe(() =>{
  //       if(confirm("Nouvelle version disponible! validez pour installer")){
  //         window.location.reload();
  //       }
  //     });
  //   }
  // }

  doUpdate(){
    this.swUpdate.activateUpdate().then(() => document.location.reload());
  }

  getAppVersion(){
   return this.afs.collection('/APP_VERSION').valueChanges();
 
    }


  }



