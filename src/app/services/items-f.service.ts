import { HttpClient, HttpParams, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, map } from 'rxjs';
import { ItemsToShow } from '../models/items.interface';
@Injectable({
  providedIn: 'root'
})
export class ItemsFService {
  baseUrl = 'http://localhost:8888/api/curlget.php';
  constructor(private http: HttpClient) {  }
  getAll() {
      const headers = new HttpHeaders().set('Content-Type', 'application/x-www-form-urlencoded; charset=UTF-8');
      const body = {title: "Angular Post Request"};
      return this.http.post(this.baseUrl, body, {headers});
    }

}
