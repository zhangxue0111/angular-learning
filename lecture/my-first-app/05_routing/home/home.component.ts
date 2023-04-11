import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {

  constructor(private router : Router) {

  }
  onLoadServers(id: number) {
    this.router.navigate(["/servers", id, 'edit'], {queryParams: {allowEdit: '1'}, fragment: 'loading'});
    
  }
}
