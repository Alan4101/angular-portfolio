import { Component, OnInit} from '@angular/core';
import { FirebaseService } from "../../admin-component/firebase.service";

@Component({
  selector: 'app-work-items',
  templateUrl: './work-items.component.html',
  styleUrls: ['./work-items.component.css'],
})
export class WorkItemsComponent implements OnInit {

  constructor(private fs: FirebaseService) { }

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
