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
  
  constructor(){
    setTimeout(() => {
    this.allowNewServer =  true;
    }, 2000);
  }

  onCreateServer(){
    this.serverAddStatus = "new server was added " + this.serverUpdate;
  }

  onServerUpdate(event : Event){
      this.serverUpdate = (<HTMLInputElement>event.target).value;
  }

  onResetUsername(){
    this.username= '';
  }


}
