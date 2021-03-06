import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { HttpClient } from "@angular/common/http";

@Injectable({
  providedIn: 'root'
})
export class DataService {
  baseUrl = environment.baseUrl;

  constructor(private http: HttpClient) { }
  httpPost(apiEndpoint, fd) {
    return this.http.post(this.baseUrl + apiEndpoint, fd);
  }
}
