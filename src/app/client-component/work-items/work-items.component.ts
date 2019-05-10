import { Component, OnInit} from '@angular/core';
import { FirebaseService } from "../../admin-component/firebase.service";
import { AnimationEvent } from '@angular/animations';
import { HoverContainerAnimations } from "../item/hover-container.animation";

@Component({
  selector: 'app-work-items',
  templateUrl: './work-items.component.html',
  styleUrls: ['./work-items.component.css'],
    animations: HoverContainerAnimations
})
export class WorkItemsComponent implements OnInit {

  constructor(private fs: FirebaseService) { }
  state;
  worksItem = [];

  ngOnInit() {
    this.fs.getWorks().subscribe(list=>{
      this.worksItem = list.map(item=>{
        return{
          $key: item.key,
            ...item.payload.val()
        }
      })
    })

  }



}
