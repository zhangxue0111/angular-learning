import { Component } from '@angular/core';
import { Server } from '../Server';
import { ServerService } from '../server.service';



@Component({
  selector: 'app-servers',
  templateUrl: './servers.component.html',
  styleUrls: ['./servers.component.scss']
})
export class ServersComponent {
  servers: Server[] = [];

  ngOnInit(): void {
    this.getServers();
  }

  constructor(private serverService : ServerService) {

  }

  getServers(): void {
    this.serverService.getServers().subscribe(servers => this.servers = servers);
  }


  selectedServer?: Server;

  onSelect(server: Server): void {
    this.selectedServer = server;
  }
}
