import { Component, OnInit } from '@angular/core';
import { ShortUrlService } from '../../services/short-url.service';
import { UrlShort } from '../../interfaces/url-short.interface';

@Component({
  selector: 'app-result',
  templateUrl: './result.component.html',
  styleUrls: ['./result.component.css']
})
export class ResultComponent implements OnInit {

  get urlShort(): UrlShort | null {
    return this._shortUrl.urlShort;
  }

  constructor( private _shortUrl: ShortUrlService ) { }

  ngOnInit(): void {
  }

}
