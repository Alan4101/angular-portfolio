import { Component, OnInit } from '@angular/core';
import { FirebaseService } from "../firebase.service";

@Component({
  selector: 'app-post-list',
  templateUrl: './post-list.component.html',
  styleUrls: ['./post-list.component.css']
})
export class PostListComponent implements OnInit {

  works = [];
  showDeleteMsg: boolean;
  searchText: string = "";

  constructor( private firebaseService: FirebaseService) { }

  ngOnInit() {
    this.firebaseService.getWorks().subscribe( list =>{
      this.works = list.map(item =>{
        return {
            $key: item.key,
            ...item.payload.val()
        }
      })
    })
  }
  onDelete($key){
    if(confirm('Are U sure to delete this item-record?')){
      this.firebaseService.deleteWork($key);
        this.showDeleteMsg = true;
      setTimeout(()=> this.showDeleteMsg = false, 3000);
    }
  }
  filterCondition(item){
    return item.title.toLowerCase().indexOf(this.searchText.toLowerCase()) !=-1;
  }

}
