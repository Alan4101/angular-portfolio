import { Component, OnInit, HostListener } from '@angular/core';
import { AnimationEvent } from '@angular/animations';
import {HoverContainerAnimations} from "./hover-container.animation";

@Component({
  selector: 'app-item',
  templateUrl: './item.component.html',
  styleUrls: ['./item.component.css'],
    animations: HoverContainerAnimations,
})
export class ItemComponent implements OnInit {


  state;
  constructor() { }

  ngOnInit() {
  }


    @HostListener('mouseenter', ['$event'])
    @HostListener('mouseleave', ['$event'])
    onHover(event: MouseEvent) {
        const direction = event.type === 'mouseenter' ? 'in' : 'out';
        const host = event.target as HTMLElement;
        const w = host.offsetWidth;
        const h = host.offsetHeight;

        const x = (event.pageX - host.offsetLeft - (w / 2)) * (w > h ? (h / w) : 1);
        const y = (event.pageY - host.offsetTop - (h / 2)) * (h > w ? (w / h) : 1);
        const states = ['top', 'right', 'bottom', 'left'];
        const side = Math.round((((Math.atan2(y, x) * (180 / Math.PI)) + 180) / 90) + 3) % 4;
        this.state = `${direction}-${states[side]}`;
    }

    onDone(event: AnimationEvent) {
        this.state = event.toState.startsWith('out-') ? null : this.state;
        console.log(this.state);
    }

}
