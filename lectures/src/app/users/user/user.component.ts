import { Component, OnDestroy, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { User } from './user.model';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent  implements OnInit, OnDestroy {

  user: User;

  parentSubscription: Subscription;

  constructor(private route : ActivatedRoute) {}

  ngOnInit(): void {
    this.user = {
      id : this.route.snapshot.params['id'],
      name: this.route.snapshot.params['name']
    }
    this.parentSubscription = this.route.params.subscribe((params: Params) => {
      this.user.id = params['id'];
      this.user.name = params['name'];
    })
  }

  ngOnDestroy(): void {
    this.parentSubscription.unsubscribe();
  }

}
