import { Component } from '@angular/core';

import { USERS } from '../mock-users';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent {

  users = USERS;

}
