import { Component, Input } from '@angular/core';
import { Account } from './account';
import { LoggingService } from '../services/logging.service';
import { AccountsService } from '../services/accounts.service';

@Component({
  selector: 'app-accounts',
  templateUrl: './accounts.component.html',
  styleUrls: ['./accounts.component.css']
})
export class AccountsComponent{
  @Input() account?:Account;

  @Input() id:number;


  constructor(private accountsService: AccountsService) {

  }

  onSetTo(status: string) {
    this.accountsService.onStatusChanged(this.id, status);
  }


}
