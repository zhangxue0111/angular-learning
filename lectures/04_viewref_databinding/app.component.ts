import { Component } from '@angular/core';
import { Server } from './server-element/server';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'lectures'; 

  serverElements: Server[] = [];

  onServerAdded(serverData: { serverName: string, serverContent: string }) {
    const server = new Server("type", serverData.serverName, serverData.serverContent);
    this.serverElements.push(server);
  }

  onBlueprintAdded(blueprintData: { serverName: string, serverContent: string}) {
    const server = new Server("blueprint", blueprintData.serverName, blueprintData.serverContent);
    this.serverElements.push(server);
  }
}
