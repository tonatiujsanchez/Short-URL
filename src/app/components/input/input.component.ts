import { Component } from '@angular/core';
import { ShortUrlService } from '../../services/short-url.service';

@Component({
  selector: 'app-input',
  templateUrl: './input.component.html',
  styleUrls: ['./input.component.css']
})
export class InputComponent {

  get msjError(): string{
    if( this.isVoid ){
      return 'Debes ingresar una URL';
    }else{
      return 'La URL ingresada no es valida'
    }
  }

  url: string = '';
  isVoid: boolean = false;

  constructor( public _shortUrl: ShortUrlService ) { }

  getUrl(){

    if( this.url.trim() === '' ){
      this.isVoid = true;
      return;
    }

    this.isVoid = false;
    this._shortUrl.shortenUrl( this.url );
    this.url = '';
  }

}

