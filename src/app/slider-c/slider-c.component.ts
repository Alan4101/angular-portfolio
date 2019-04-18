import { Component, OnInit, Input } from '@angular/core';

// declare var progress: any;
@Component({
  selector: 'app-slider-c',
  templateUrl: './slider-c.component.html',
  styleUrls: ['./slider-c.component.css']
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

  public activeItem: boolean = true;
  public activeItem2: boolean;
  public activeItem3: boolean;

  // Progress(){
  //     new progress;
  // }

  constructor() { }

  ngOnInit() {
    this.Progress();
  }
  onSelected(item: any):void{
    if(item==1){
        this.activeItem = true;
        this.activeItem2 = false;
        this.activeItem3 = false;
    }else if(item==2){
        this.activeItem = false;
        this.activeItem2 = true;
        this.activeItem3 = false;
    }
    else{
        this.activeItem = false;
        this.activeItem3 = true;
        this.activeItem2 = false;
    }
  }


}
