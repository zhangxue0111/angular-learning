import { Component, EventEmitter, Output } from '@angular/core';
import { Server } from '../servers/server.model';

@Component({
  selector: 'app-server-edit',
  templateUrl: './server-edit.component.html',
  styleUrls: ['./server-edit.component.css']
})
export class ServerEditComponent {

  @Output() addedServer = new EventEmitter<Server>();
    id: number = 0;
    name: string = '';
    status: string = '';
    server: Server = {
      id: this.id,
      name: this.name,
      status: this.status
    }
   
    onAddServer() {
     this.server.id = this.id;
     this.server.name = this.name;
     this.server.status = this.status;
      this.addedServer.emit(this.server);
    }
}
