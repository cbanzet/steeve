import { InformDialogComponent } from './../inform-dialog/inform-dialog.component';
import { MatDialog } from '@angular/material/dialog';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class UpdateServiceService {

  constructor(public matdialog: MatDialog) { }

  showAppUpdateAlert(){
    const title = "Nouvelle version de l'application disponible";
    const message = "Cliquez sur installer pour poursuivre et installer";
    const action = "Installer";

    let dialogRef = this.matdialog.open(InformDialogComponent,{
      disableClose: true,
      data: {
        title: title,
        message : message,
        action: action
      }
    });
  dialogRef.afterClosed().subscribe(result =>{ })
  }


  }


