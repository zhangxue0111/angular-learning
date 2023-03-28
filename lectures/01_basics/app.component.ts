import { Component } from '@angular/core';
import { SERVERS } from './servers/mock-servers';
import { Server } from './servers/server.model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'lectures';

  servers = SERVERS;

  onAddedServer(server : Server) {
    this.servers.push(server);
  }
}
