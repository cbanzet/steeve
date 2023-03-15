import { MatDialog } from '@angular/material/dialog';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class UpdateServiceService {

  constructor(public matdialog: MatDialog) { }
}
