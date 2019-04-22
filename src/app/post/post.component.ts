import { Component, OnInit } from '@angular/core';
import { FirebaseService} from "../services/firebase.service";
import { NgForm } from "@angular/forms";

@Component({
  selector: 'app-post',
  templateUrl: './post.component.html',
  styleUrls: ['./post.component.css']
})
export class PostComponent implements OnInit {

  constructor( private FirebaseService: FirebaseService) { }

  ngOnInit() {
    this.FirebaseService.GetPostList();
  }
  onSubmit(formPost: NgForm){
    this.FirebaseService.AddPost(formPost.value);
  }

}
