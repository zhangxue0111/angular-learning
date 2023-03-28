import { ACCOUNTS } from "../accounts/mock-accounts";
import { Account } from "../accounts/account";
import { Injectable } from "@angular/core";
import { LoggingService } from "./logging.service";

@Injectable()
export class AccountsService {
    accounts = ACCOUNTS;

    constructor(private loggingService: LoggingService) {}

    onAccountAdded(account: Account) {
        this.accounts.push(account);
        this.loggingService.logStatusChanged(account.status);
    }

    onStatusChanged(id: number, status: string) {
        this.accounts[id].status = status;
        this.loggingService.logStatusChanged(status);
    }


}