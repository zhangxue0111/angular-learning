import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { AccountsComponent } from './accounts/accounts.component';
import { AccountEditComponent } from './account-edit/account-edit.component';
import { AccountsService } from './services/accounts.service';
import { LoggingService } from './services/logging.service';

@NgModule({
  declarations: [
    AppComponent,
    AccountsComponent,
    AccountEditComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [
    AccountsService, 
    LoggingService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
