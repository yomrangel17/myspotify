import {Component} from "@angular/core";
import { SpotifyService } from "./shared/spotify.service";

@Component ({
    moduleId: module.id,
    selector: 'my-app',
    templateUrl: 'app.component.html' 
})

export class AppComponent {
    pageTitle:string = 'MY APP  IN ANGULAR TWO';

    constructor(public spotifyService:SpotifyService){}
}