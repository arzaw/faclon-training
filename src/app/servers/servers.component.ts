import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-servers',
  templateUrl: './servers.component.html',
  styleUrls: ['./servers.component.css']
})
export class ServersComponent implements OnInit {
  allowNewServer=false;
  serverCreationStatus="no Server found";
  serverName='';
  //userName='';
  serverCreated=false;

  constructor() { 

    setTimeout(()=>{
      this.allowNewServer=true;
    }, 2000)
  }

  ngOnInit(): void {
  }

  onServerCreation(){
    this.serverCreated=true;
    this.serverCreationStatus="Server Created and name is "+ this.serverName 
  }

  onUpdateServerName(event: any){
    this.serverName=(<HTMLInputElement>event.target).value;
  }
  /*
  isEmptyUser(){
    if(this.userName==='')
    return true;

    return false;
  }

  setUserEmpty(){
    this.userName='';
  }
  */
}
