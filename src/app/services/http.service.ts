import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
//enviroment
import { environment as env } from 'src/environments/environment';
//modesl
import { APIResponse, Game } from 'src/models'

@Injectable({
  providedIn: 'root'
})
export class HttpService {

  //injectamos manualmente
  constructor(private http: HttpClient) { }

  getGameList(ordering:string, search?:string): Observable<APIResponse<Game>> {
    let params = new HttpParams().set('ordering', ordering);

    if(search) {
      params = new HttpParams()
        .set('ordering', ordering)
        .set('search', search);
    }

    return this.http.get<APIResponse<Game>>(
      `${env.BASE_URL}/games`,
      {
        params: params
      }
    )
  }
}
