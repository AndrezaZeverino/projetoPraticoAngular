import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ApiService {
  private apiUrl = 'http://dog-api.kinduff.com/api/facts';

  constructor(private http: HttpClient) { }

  searchData(): Observable<any> {
    return this.http.get<any>(`${this.apiUrl}`)
  }
}
