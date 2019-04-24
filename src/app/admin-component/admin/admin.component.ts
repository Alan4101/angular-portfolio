import { Component, OnInit } from '@angular/core';
import {PanelMenuModule} from 'primeng/panelmenu';
import {MenuItem} from 'primeng/api';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.css']
})
export class AdminComponent implements OnInit {

  constructor() { }

  items: MenuItem[];

  ngOnInit() {
      this.items = [
          {
              label: 'File',
              icon: 'pi pi-pw pi-file',
              items: [{
                  label: 'New',
                  icon: 'pi pi-fw pi-plus',
                  items: [
                      {label: 'User', icon: 'pi pi-fw pi-user-plus'},
                      {label: 'Filter', icon: 'pi pi-fw pi-filter'}
                  ]
              },
                  {label: 'Open', icon: 'pi pi-fw pi-external-link'},
                  {separator: true},
                  {label: 'Quit', icon: 'pi pi-fw pi-times'}
              ]
          }
      ];
  }

}
