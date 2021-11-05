import { Injectable } from '@angular/core';
import { HttpClient } from  '@angular/common/http';
import { takeUntil } from 'rxjs/operators';
import { Observable, Subject } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class OswrenApiService {
  private destroy$: Subject<boolean> = new Subject<boolean>();
  private REST_API_URL = "https://localhost:44328/MTG/Cards/";
  
  constructor(private httpClient: HttpClient) { }

  public getCardSet(setCode: string): Observable<any> {
    return this.httpClient.get(this.REST_API_URL + setCode).pipe(takeUntil(this.destroy$));
  }
}
