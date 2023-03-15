import { Component, Input } from '@angular/core';
import { Server } from '../Server';

@Component({
  selector: 'app-server-detail',
  templateUrl: './server-detail.component.html',
  styleUrls: ['./server-detail.component.scss']
})
export class ServerDetailComponent {
  @Input() server? : Server;
}
