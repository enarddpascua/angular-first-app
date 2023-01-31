import { Component } from '@angular/core';

@Component({
  selector: 'app-servers',
  templateUrl: './servers.component.html',
  styleUrls: ['./servers.component.css']
})
export class ServersComponent {
  allowNewServer :boolean = false;
  serverUpdate = 'testServer';
  serverAddStatus = "no server has added yet.";
  username='';
  serverAllowAdd :boolean = false;
  servers = ['Testserver', 'Testserver 2'];
  
  constructor(){
    setTimeout(() => {
    this.allowNewServer =  true;
    }, 2000);
  }

  onCreateServer(){
    this.serverAllowAdd =true;
    this.servers.push("new server");
    this.serverAddStatus = "new server was added " + this.serverUpdate;
  }

  onServerUpdate(event : Event){
      this.serverUpdate = (<HTMLInputElement>event.target).value;
  }

  onResetUsername(){
    this.username= '';
  }


}
