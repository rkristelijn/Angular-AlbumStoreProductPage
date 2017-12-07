import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import { Observable } from 'rxjs/Observable';

import 'rxjs/add/operator/map';
//import 'rxjs/add/operator/delay';

import { Album } from './album';

@Injectable()
export class ProductService {
  private _albumUrl: string = '../assets/album.json';
  constructor(private _http: Http) { }
  public getAlbum(id: number): Observable<Album> {
    return this._http.get(this._albumUrl)
      //.delay(5000)
      .map(response => <Album>response.json())
  }
}
