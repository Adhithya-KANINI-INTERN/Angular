import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ServiceService {

  private api ='https://jsonplaceholder.typicode.com';

  constructor(private http: HttpClient) { }

  getposts(): Observable<any> {
    return this.http.get(`${this.api}/posts`);
  }

  getusers(limit: number): Observable<any> {
    return this.http.get(`${this.api}/users?_limit=${limit}`);
  } 
  

  

}
