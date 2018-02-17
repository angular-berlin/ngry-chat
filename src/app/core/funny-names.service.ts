import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';

@Injectable()
export class FunnyNamesService {

  constructor(private httpClient: HttpClient) { }

  generateName(): Observable<string> {
    return this.httpClient.post('https://api.codetunnel.net/random-nick', {}, {}).map((response: any) => response.nickname);
  }
}
