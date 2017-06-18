//how to create a component
//it's just a a class. 

//third we need to import the component
// we select from the package @angular/core, it gives us access to some of the core functionalities in angular  
import { Component } from '@angular/core';


// second add the decorator which will enhance your code
@Component({
    // third we pass the javascript object to configure it
    // here we set up important meta-data in the background to tell the java to know what we want to do
    selector: 'app-server',
    // fourth - the template "html"
    templateUrl: './server.component.html'
})

// this was added first
export class ServerComponent {
    // DataBinding tutorial
    serverID: number = 10;
    serverStatus: string = 'offline';

}

