import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  private ApiKey = '2QK5SbHv';

  constructor(private httpClient: HttpClient) { }

  public search(q: string, page?: number) {
    return this.httpClient.get<RijksmuseumApi.ResponseList>('https://www.rijksmuseum.nl/api/nl/collection/', {
      params: {
        q: q,
        key: this.ApiKey,
        ps: '5',
        p: '' + (page || 0)
      }
    }).pipe(map(y => y.artObjects));
  }

  public getDetails(objectNr: string) {
    return this.httpClient.get<RijksmuseumApi.ResponseDetails>('https://www.rijksmuseum.nl/api/nl/collection/' + encodeURI(objectNr), {
      params: {
        key: this.ApiKey
      }
    }).pipe(map(y => y.artObject));
  }
}
