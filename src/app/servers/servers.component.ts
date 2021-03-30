import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-servers',
  templateUrl: 'servers.component.html',
  styleUrls: ['./servers.component.css']
})
export class ServersComponent implements OnInit {
  allowNewServer = false;

  usernameEmpty = false ;

  serverName = '';

  username = '';

  shownPass= false;

  shownTimes = [];

  constructor() { 
    setTimeout(() => {
      this.allowNewServer=true
    },2000)
   }

   serverCreationStatus = 'No server created yet'

  ngOnInit(): void {
  }

  usernameAnalyzer() {
    if (this.username === ''){
      this.usernameEmpty = false;
    } else {
      this.usernameEmpty = true;
    }
  }

  onCreateServer() {
    this.serverCreationStatus='A server "' + this.serverName + '" was created!'
  }

  onClickButton() {
    // this.shownTimes.push(this.shownTimes ++);
    if (this.shownPass == false) {
      this.shownPass = true
    }
    else {
      this.shownPass = false
    }
    this.shownTimes.push(this.shownTimes.length + 1)
  }

}
