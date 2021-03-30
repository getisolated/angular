import { Component } from '@angular/core';

@Component({
    selector: 'app-server',
    templateUrl: './server.component.html'
})
export class ServerComponent {
    serverID = 567;
    serverStatus = 'Offline';

    constructor() {
        this.serverStatus = Math.random() > 0.5 ? "online" : "offline";
    }

    getServerStatus() {
        return this.serverStatus;
    }

    getServerColor() {
        return this.serverStatus == 'online' ? 'green' : 'red';
    }

}