import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { ApiResponse } from '@models/chore';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ChoreService {

  constructor(
    private http: HttpClient
  ) { }

  public list(stateId: number):Observable<ApiResponse>{
    return this.http.get<ApiResponse>(`https://localhost:7211/api/chores/?StateId=${stateId}`, {
      headers: {
        'Content-Type': 'application-json'
      }
    });
  }

}
