import { Component } from '@angular/core';
import {SpotifyService} from '../../services/spotify.service';
import {Artist} from '../../../Artist';
@Component({
    moduleId:module.id,
    selector: 'search',
    templateUrl: 'search.component.html'
})
export class SearchComponent {
    searchStr:string;
    //to display them on page we make this variable we create class for this too
    searchRes: Artist[];
    constructor(private _spotifyService:SpotifyService){
        
    }    
    searchMusic(){
        this._spotifyService.searchMusic(this.searchStr).subscribe(res => {
            console.log(res.artists.items);
            //we store the values in the array called searchRes
            this.searchRes = res.artists.items;
        });
    }
}
