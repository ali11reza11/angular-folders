import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'
import { Observable, of, tap } from 'rxjs';
import { Ialbums } from './models/albums';
@Injectable({
  providedIn: 'root'
})
export class AlbumsService {

  constructor(private http: HttpClient) { }

  public getAlbums(serachTherm: string): Observable<Ialbums[]> {
    return this.http.get<Ialbums[]>('./assets/a.json')
  }
}


