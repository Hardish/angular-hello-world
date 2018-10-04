/*
to render over the list of users this component got generated 
*/
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-user-list',
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.css']
})
export class UserListComponent implements OnInit {

  names: string[]; //another way to write out same line is 'Array<string>'
  constructor() 
  {
    this.names = ['Deepiks','Madona','Khyati','Hardik','Utsav','Surekha','Kanu'];
  }

  ngOnInit() {
  }

}
