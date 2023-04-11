import { Injectable, EventEmitter } from '@angular/core';
import { LoggingService } from './logging.service';

@Injectable({
  providedIn: 'root'
})
export class AccountsService {

  constructor(private loggingService : LoggingService) { }

  accounts: {name: string,status: string}[] = [
    {
      name: "account-01",
      status: "active"
    },
    {
      name: "account-02",
      status: "inactive"
    },{
      name: "account-03",
      status: "unknown"
    }
  ];

  statusUpdated = new EventEmitter<string>();

  getAllAccounts() {
    return this.accounts;
  }

  addAccount(account: {name : string, status : string}) {
    this.accounts.push(account);
  }

  updateAccount(id: number, status: string) {
    this.accounts[id].status = status;
    this.loggingService.logStatusChanged(status);

  }


}
