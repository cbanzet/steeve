import { Component, OnInit, Inject } from '@angular/core';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';

@Component({
  selector: 'app-inform-dialog',
  templateUrl: './inform-dialog.component.html',
  styleUrls: ['./inform-dialog.component.scss']
})
export class InformDialogComponent implements OnInit {

  public title: string = "";
  public message: string = "";
  public action: string = "";


  constructor(@Inject(MAT_DIALOG_DATA) public data: { message: string, action: string, title: string }) { }

  ngOnInit(): void {
    this.message = this.data.message ?? "";
    this.action = this.data.action ?? "Ok";
    this.title = this.data.title ?? "";
  }



}
