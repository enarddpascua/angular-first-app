import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styles: [`
  h1 {
    color:blue;
  }`]
})
export class AppComponent {
  serverElements=[{type:'server', name:'testServer', content:'thi is just a test'}];

  onServerAdded(serverData:{serverName:string, serverContent:string}){
   this.serverElements.push({
    type: 'server',
    name: serverData.serverName,
    content:serverData.serverContent
   })
  }

  onBlueprintAdded(blueprintData:{serverName:string, serverContent:string}){
    this.serverElements.push({
      type: 'blueprint',
      name: blueprintData.serverName,
      content:blueprintData.serverContent
     })
  }
}
