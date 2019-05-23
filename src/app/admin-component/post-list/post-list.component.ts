import { Component, OnInit , Input} from '@angular/core';
import { FirebaseService } from "../firebase.service";
import { SearchService} from "../searchService";

@Component({
  selector: 'app-post-list',
  templateUrl: './post-list.component.html',
  styleUrls: ['./post-list.component.css']
})
export class PostListComponent implements OnInit {
  searchText: string = '';
  works = [];
  showDeleteMsg: boolean;

  constructor( private firebaseService: FirebaseService, private searchServ: SearchService) { }

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
  onSearch(item){
    return this.searchServ.filterCondition(item, this.searchText);
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
