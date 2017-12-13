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
      .map(
        // (response) => {
        //   //http://acdcjunior.github.io/typescript-cast-object-to-other-type-or-instanceof.html
        //   //https://www.typescriptlang.org/docs/handbook/advanced-types.html#type-guards-and-differentiating-types
        //   //console.log(response, <Album>response.json(), typeof(<Album>response.json()));
        //   // return <Album>response.json(); // The getAlbum method isn't returning the correct response.
        //   let ret : Album;
        //   ret = <Album>response.json().album; 
        //   //console.log(ret, 'instance of Album?');
        //   //if(this.isAlbumTypeGuard(ret)) console.log('yes'); else console.log('no');
        //   return ret;
        // }
        response => <Album>response.json().album
      )
  }

  isAlbumTypeGuard(album: any): album is Album {
    console.log('isAlbumTypeGuard', album.name);
    return album.name !== undefined && album.releaseDate!==undefined;
  }
}
