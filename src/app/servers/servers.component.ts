import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-servers',
  templateUrl: './servers.component.html',
  styleUrls: ['./servers.component.css']
})
export class ServersComponent implements OnInit {
  allowNewServer=false;
  serverCreationStatus="no Server found";

  constructor() { 

    setTimeout(()=>{
      this.allowNewServer=true;
    }, 2000)
  }

  ngOnInit(): void {
  }

  onServerCreation(){
    this.serverCreationStatus="Server Created"
  }
}
