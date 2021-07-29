import { Component } from '@angular/core';
import { ShortUrlService } from '../../services/short-url.service';
import { UrlShort } from '../../interfaces/url-short.interface';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css']
})
export class SidebarComponent {

  get hostorial():UrlShort[]{
    return this._shortUrl.historial;
  }

  constructor( private _shortUrl: ShortUrlService ) { }


  mostrarUrl( item: UrlShort ){
    this._shortUrl.mostrarUrl( item );
  }

}
