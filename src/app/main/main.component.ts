import { Component, OnInit } from '@angular/core';
import { ShortUrlService } from '../services/short-url.service';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css']
})
export class MainComponent implements OnInit {

  constructor( public _shortUrl: ShortUrlService ) { }

  ngOnInit(): void {
  }

}
