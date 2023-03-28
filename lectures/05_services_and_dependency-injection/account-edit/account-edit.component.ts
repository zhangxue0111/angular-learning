import { Component } from '@angular/core';
import { Account } from '../accounts/account';
import { AccountsService } from '../services/accounts.service';

@Component({
  selector: 'app-account-edit',
  templateUrl: './account-edit.component.html',
  styleUrls: ['./account-edit.component.css']
})

export class AccountEditComponent{

  constructor(private accountsService: AccountsService) {

  }

  onCreateAccount(accountName: string, status: string) {
    this.accountsService.onAccountAdded(new Account(accountName, status));
  }
}
