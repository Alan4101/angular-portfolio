import { Component, OnInit } from '@angular/core';
import { FirebaseService } from "../firebase.service";

@Component({
  selector: 'app-post',
  templateUrl: './post.component.html',
  styleUrls: ['./post.component.css']
})
export class PostComponent implements OnInit {

  constructor( private FirebaseService: FirebaseService) { }
  submitted: boolean;
  formControls = this.FirebaseService.form.controls;
  showSuccessMessage: boolean;

  ngOnInit() {
  }
  onSubmit(){
    this.submitted = true;
    if(this.FirebaseService.form.valid){
        if(this.FirebaseService.form.get('$key').value == null)
            this.FirebaseService.createWork(this.FirebaseService.form.value);
            else
                this.FirebaseService.updateWork(this.FirebaseService.form.value);
            this.showSuccessMessage = true;
            setTimeout(()=> this.showSuccessMessage = false, 3000);

      this.submitted = false;
      this.FirebaseService.form.reset();
    }

  }


}
