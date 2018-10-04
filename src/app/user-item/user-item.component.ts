/*
show list of users and we want to show their names. 
*/
/*
Step 2 accepting inputs from UserListComponent 

step 2.1 : Input is added at import line
Step 2.2:change  in the property declaration in class
step 2.3: change in the constuctor



*/
import { Component, OnInit, Input } from '@angular/core';  //input added

@Component({
  selector: 'app-user-item',
  templateUrl: './user-item.component.html',
  styleUrls: ['./user-item.component.css']
})
export class UserItemComponent implements OnInit {
/*
we are adding new property called name in our component
by having name property in our component, we will be able to reuse this component for different users With same markup and logic and style
*/

 @Input() name:string;  //added name property plus Input annotation as Step 2
  constructor() {
    //this.name = 'Disha'; //set the name  and removed as a step 2
   }

  ngOnInit() {
  }

}
