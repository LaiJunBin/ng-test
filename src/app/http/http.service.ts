import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class HttpService {
  serverUrl = environment.serverUrl;
  constructor(private httpClient: HttpClient) {
  }

  getApi<T>(url: string): Observable<T> {
    return this.httpClient.get<T>(this.serverUrl + url);
  }
}
