import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';

import { ServersService } from '../servers.service';


@Component({
  selector: 'app-edit-server',
  templateUrl: './edit-server.component.html',
  styleUrls: ['./edit-server.component.css']
})
export class EditServerComponent implements OnInit{

  server?:{id: number, name: string, status: string };

  serverName = "";

  serverStatus = "";

  allowEdit = false;

  constructor(private serversService : ServersService,
              private route : ActivatedRoute) {

  }

  ngOnInit(): void {
    console.log(this.route.snapshot.queryParams);
    console.log(this.route.snapshot.fragment);
    this.route.queryParams.subscribe(
      (queryParams: Params)=>{
        console.log("queryParams = ", queryParams);        
        this.allowEdit = queryParams['allowEdit'] === '1' ? true : false;
        console.log(this.allowEdit);
      }
    );
    this.server = this.serversService.getServer(1);
    if(this.server) {
      this.serverName = this.server.name;
      this.serverStatus = this.server.status;
    }
   
  }

  onUpdateServer() {
    if(this.server) {
      this.serversService.updateServer(this.server?.id, {name: this.serverName, status: this.serverStatus})
    }
  }

  



}
