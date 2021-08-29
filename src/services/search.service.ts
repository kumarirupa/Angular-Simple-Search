import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SearchService {

  constructor(private http: HttpClient) { }
  search(data: {}): Observable<any> {
    return this.http.get(`https://api.github.com/search/users?q=${data}`);
  }
}
