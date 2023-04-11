import { Component } from '@angular/core';
import { AccountsService } from './accounts.service';
import { LoggingService } from './logging.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers: [AccountsService, LoggingService]
})
export class AppComponent {
  title = 'my-first-app';

  accounts: {name: string, status: string}[] = []

  constructor(private accountsService : AccountsService) {
    this.accounts = this.accountsService.getAllAccounts();
  }

}
