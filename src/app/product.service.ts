import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import { Observable } from 'rxjs/Observable';

import 'rxjs/add/operator/map';

@Injectable()
export class ProductService {
  private albumUrl: string = '../assets/album.json';
  constructor(private http: Http) { }
  getAlbum(id : number): Observable<any> {
    return this.http.get(this.albumUrl)
      .map(response => response.json())
  }
}
