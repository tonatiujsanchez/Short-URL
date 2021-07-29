import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from "@angular/common/http";
import { BitlyResponse, UrlShort } from '../interfaces/url-short.interface';

@Injectable({
  providedIn: 'root'
})
export class ShortUrlService {
  
  URL: string = 'https://api-ssl.bitly.com/v4/shorten';
  tokenAccess: string = 'd91f9e8e23e5c7c6f83d650b6e14075f06d3c6ce';

  isLoading: boolean = false;
  isError: boolean = false;
  urlShort: UrlShort | null = null;
  
  msjError = 'La URL ingresada no es valida';


  constructor( private http: HttpClient ) { }


  shortenUrl( url:string ):void {
    
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
        console.log(this.urlShort);
        this.isLoading = false;

      },(err)=>{
        this.isError = true;
        this.isLoading = false;
        this.msjError = 'La URL ingresada no es valida';
      });
  }

}
