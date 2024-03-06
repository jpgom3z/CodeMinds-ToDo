import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { ChoreData } from '@models/chore';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ChoreService {

  constructor(
    private http: HttpClient
  ) { }

  public list(stateId: number):Observable<ChoreData>{
    return this.http.get<ChoreData>(`https://localhost:7211/api/chores/?StateId=${stateId}`, {
      headers: {
        'Content-Type': 'application-json'
      }
    });
  }

  public delete(choreId: number):Observable<ChoreData>{
    return this.http.delete<ChoreData>(`https://localhost:7211/api/chores/${choreId}`, {
      headers: {
        'Content-Type': 'application-json'
      }
    });
  }

}
