import { Component } from '@angular/core';

@Component({
  selector: 'app-servers',
  templateUrl: './servers.component.html',
  styleUrls: ['./servers.component.css']
})
export class ServersComponent {
  serverName: string = ""

  allowNewServer: boolean = false;

  servers : string[] = ["Test-Server-1", "Test-Server-2"];

  serverCreated : boolean = false;

  constructor() {
    setTimeout(()=> {
      this.allowNewServer = true;
    }, 2000);
  }

  onUpdateServerName(event : Event) {
    this.serverName = (<HTMLInputElement>event.target).value;
  }

  onCreateServer() {
    this.serverCreated = true;
    this.servers.push(this.serverName);
  }

}
