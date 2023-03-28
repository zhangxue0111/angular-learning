import { Component, Input } from '@angular/core';
import { Server } from './server';

@Component({
  selector: 'app-server-element',
  templateUrl: './server-element.component.html',
  styleUrls: ['./server-element.component.css']
})
export class ServerElementComponent {
  @Input() serverElement?: Server;
}
