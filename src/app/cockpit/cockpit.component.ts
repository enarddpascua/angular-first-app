import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-cockpit',
  templateUrl: './cockpit.component.html',
  styleUrls: ['./cockpit.component.css']
})
export class CockpitComponent {
  @Output() serverCreated = new EventEmitter<{serverName:string, serverContent:string}>();
  @Output() blueprintCreated = new EventEmitter<{serverName:string, serverContent:string}>();;
  newServerName='';
  newServerContent='';



  onCreateServer(){
    this.serverCreated.emit({
      serverName:this.newServerName, 
      serverContent:this.newServerContent
    });
  }

  onBlueprintCreated(){
    this.blueprintCreated.emit({
      serverName:this.newServerName,
      serverContent:this.newServerContent
    })
  }
}
