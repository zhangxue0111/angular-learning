import { Component, OnInit } from '@angular/core';
import { Account } from './accounts/account';
import { AccountsService } from './services/accounts.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  title = 'my-fourth-app';

  accounts: Account[] = [];

  constructor(private accountsService: AccountsService) {

  }

  ngOnInit(): void {
    this.accounts = this.accountsService.accounts;
  }
  
}
