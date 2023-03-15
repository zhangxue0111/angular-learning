import { Injectable } from '@angular/core';
import { Server } from './Server';
import { SERVERS } from './mock-servers';
import { Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ServerService {

  constructor() { };

  getServers(): Observable<Server[]>  {
    const servers = of(SERVERS);
    return servers;
  }
}
