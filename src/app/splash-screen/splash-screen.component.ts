import { SplashAnimationType } from './splash-animations-type';
import { ViewEncapsulation } from '@angular/compiler';
import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-splash-screen',
  templateUrl: './splash-screen.component.html',
  styleUrls: ['./splash-screen.component.scss'],
})
export class SplashScreenComponent implements OnInit {

  windowWidth !: string;
  showSplash: boolean = true;
  opacityChange: number = 1;
  splashTransition !: string;

  @Input() animationDuration : number = 0.5;
  @Input() duration: number = 3;
  @Input() animationType: SplashAnimationType = SplashAnimationType.SlideLeft;


  constructor(){}

  ngOnInit(): void {

   setTimeout(() => {
    let transitionStyle = '';

    switch(this.animationType){
      case SplashAnimationType.SlideLeft :
        this.windowWidth = '-' + window.innerWidth + 'px';
        transitionStyle = 'left' + this.animationDuration + 's';
        break;
      case SplashAnimationType.SlideRight :
        this.windowWidth = window.innerWidth + 'px';
        transitionStyle = 'left' + this.animationDuration + 's';
        break;
      case SplashAnimationType.FadeOut :
        transitionStyle = 'opacity' + this.animationDuration + 's';
        this.opacityChange = 0;
        break;
      default :
      this.windowWidth = '-' + window.innerWidth + 'px';
        transitionStyle = 'left' + this.animationDuration + 's';
        break;
    }

    this.splashTransition = transitionStyle;

      setTimeout(() => {

      },this.animationDuration * 1000);

   }, this.duration * 1000);
  }

}
