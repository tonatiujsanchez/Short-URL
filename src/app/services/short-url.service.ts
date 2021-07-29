import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from "@angular/common/http";
import { BitlyResponse, UrlShort } from '../interfaces/url-short.interface';

@Injectable({
  providedIn: 'root'
})
export class ShortUrlService {
  
  URL: string = 'https://api-ssl.bitly.com/v4/shorten';
  tokenAccess: string = 'd91f9e8e23e5c7c6f83d650b6e14075f06d3c6ce';

  urlShort: UrlShort | null = null;
  private _historial: UrlShort[] = [];

  isLoading: boolean = false;
  isError: boolean = false;
  isVoid = false;
  
  get historial(): UrlShort[]{
    return this._historial;
  }

  constructor( private http: HttpClient ) {
    this._historial = JSON.parse( localStorage.getItem('historialURLs')! ) || [];
   }

  shortenUrl( url:string ):void {

    if( url.trim() === '' ){
      this.isVoid = true;
      return;
    }
    
    this.isVoid = false;
    this.isError = false;
    this.isLoading = true;
    this.urlShort = null;
    
    const body = {
      "long_url": url
    }
    const headers = new HttpHeaders(
      { Authorization: 'Bearer '+ this.tokenAccess }
    );

    this.http.post<BitlyResponse>(this.URL, body, { headers } )
      .subscribe( ({ link, long_url }) =>{

        this.urlShort = {
          link,
          long_url
        }
        this.isLoading = false;
        this.saveStorage( this.urlShort );

      },(err)=>{
        this.isError = true;
        this.isLoading = false;
      });
  }

  saveStorage( item: UrlShort ){

    // 29/07/2021  
    // TODO: Refactorizar la comprobación del item existente

    let existe: boolean = false;
    this._historial.forEach( ({ link, long_url })=>{
      if( item.long_url === long_url ){
        existe = true;
        return;
      }
    });
    

    
    if( !existe ){
      this._historial.unshift( item );
      localStorage.setItem('historialURLs', JSON.stringify( this._historial ));
    }

  }


  mostrarUrl( item: UrlShort ){
    this.urlShort = item;
    this.isError = false;
    this.isVoid = false;
  }

}


// https://www.instagram.com/
// https://www.domestika.org/es
// https://www.udemy.com/
// https://www.crehana.com/mx/
