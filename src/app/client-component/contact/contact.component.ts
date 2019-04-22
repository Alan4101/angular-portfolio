import { Component, OnInit } from '@angular/core';
import { Client } from "../client";

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent implements OnInit {

  client: Client = new Client();

  sendMessage(){
    console.log(this.client);
  }
  constructor() { }

  ngOnInit() {
  }

}
