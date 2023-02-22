import { Injectable } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { SwUpdate, VersionReadyEvent } from '@angular/service-worker';
import { filter, map } from 'rxjs';
import { InformDialogComponent } from '../components/inform-dialog/inform-dialog.component';

@Injectable({
  providedIn: 'root'
})
export class AppUpdateService {

  constructor(private readonly updates: SwUpdate, public dialog: MatDialog) {


    console.log("App update service");
    this.updates.versionUpdates.pipe(
      filter((evt): evt is VersionReadyEvent => {
        console.log("App update event:" + evt.type, evt);
        return evt.type === 'VERSION_READY';
      })).subscribe(event => {
        this.showAppUpdateAlert();
      });

  }


  showAppUpdateAlert() {
    const title = 'Nouvelle version';
    const message = 'Cliquez installer pour poursuivre';
    const action = 'Installer';

    let dialogRef = this.dialog.open(InformDialogComponent, { 
      disableClose: true,     
      data: { message: message, title: title, action: action } 
    });
    dialogRef.afterClosed().subscribe(result => {
      this.doAppUpdate();
    });


  }

  doAppUpdate() {
    this.updates.activateUpdate().then(() => document.location.reload());
  }
}