import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { ServersComponent } from './servers/servers.component';
import { ServerDetailComponent } from './server-detail/server-detail.component';

@NgModule({
  declarations: [
    AppComponent,
    ServersComponent,
    ServerDetailComponent
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
