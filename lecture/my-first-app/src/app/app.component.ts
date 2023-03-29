import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'my-first-app';

  serverElements = [
    {
      type: 'server',
      name: 'Test-Server',
      content: 'This is a test!'
    }
  ];

  // newServerName: string = "";

  // newServerContent: string = "";

  onAddServer(server: {serverName: string, serverContent: string}) {
    this.serverElements.push({
      type: "server",
      name: server.serverName,
      content : server.serverContent
    });
  }

  onAddBlueprint(blueprint: {serverName: string, serverContent: string}) {
    this.serverElements.push({
      type: "blueprint",
      name: blueprint.serverName,
      content : blueprint.serverContent
    });
  }


}
