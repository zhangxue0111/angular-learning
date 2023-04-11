import { Injectable } from '@angular/core';
import {
  Router, Resolve,
  RouterStateSnapshot,
  ActivatedRouteSnapshot
} from '@angular/router';
import { Observable } from 'rxjs';
import { ServersService } from '../servers.service';

interface Server {
  id: number;
  name: string;
  status: string
}

@Injectable({
  providedIn: 'root'
})
export class ServerResolver implements Resolve<Server> {

  constructor(private serversService : ServersService) {

  }
  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): 
    Observable<Server> | Promise<Server> | Server {
      var servers = this.serversService.getServers();
      for(let i = 0; i < servers.length; i++) {
        if(servers[i].id == +route.params['id']) {
          return servers[i];
        }
      }
      return servers[0]; 
  };
}
