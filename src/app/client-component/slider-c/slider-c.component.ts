import { Component, OnInit, Input } from '@angular/core';
import { transition, animate, style, trigger, state } from "@angular/animations";

// declare var progress: any;
@Component({
  selector: 'app-slider-c',
  templateUrl: './slider-c.component.html',
  styleUrls: ['./slider-c.component.css'],
  animations: [
      trigger('slider',[
          state('void',style({
              transform: 'scale(0.8)',
              opacity: 0
          })),
          transition('void => *', [
              animate('0.5s ease-in-out')
          ])
      ]),
  ]
})
export class SliderCComponent implements OnInit {

  @Input() container: boolean;
  @Input() countSlide: Number;

  Icons: any [] = [
      {name: 'fa-js-square', value: 90},
      {name: 'fa-node-js', value: 60},
      {name: 'fa-html5', value: 85},
      {name: 'fa-css3-alt', value: 70},
      {name: 'fa-sass', value: 70}

  ];
  Icons2: any [] = [
        {name: 'fa-git', value: 80},
        {name: 'fa-wordpress', value: 70},
        {name: 'fa-npm', value: 70},
        {name:  'fa-adobe', value: 70},
        {name: 'fa-angular', value: 70}
    ];
  counterSlide: number = 0;
  constructor() {}

  ngOnInit() {
  }
  showSlide(count: number){
      if (this.counterSlide < count) {
          this.counterSlide = count;
      } else {
          this.counterSlide = count;
      }
  }



}
