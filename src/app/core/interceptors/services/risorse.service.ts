import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class RisorseService {
  private apiUrl = 'http://localhost:3000/api/risorse';

  constructor(private http: HttpClient) {}

  getAllRisorse(): Observable<any> {
    return this.http.get<any>(this.apiUrl);
  }
}