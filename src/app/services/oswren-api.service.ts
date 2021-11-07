import { Injectable } from '@angular/core';
import { HttpClient } from  '@angular/common/http';
import { takeUntil } from 'rxjs/operators';
import { Observable, Subject } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class OswrenApiService {
  private destroy$: Subject<boolean> = new Subject<boolean>();
  private REST_API_URL = 'https://api.oswren.com/MTG/';
  
  constructor(private httpClient: HttpClient) { }
  
  public getAllSets(): Observable<any> {
    return this.httpClient.get(this.REST_API_URL + 'sets/').pipe(takeUntil(this.destroy$));
  }

  public getCardsForSet(setCode: string): Observable<any> {
    return this.httpClient.get(this.REST_API_URL + 'cards/' + setCode).pipe(takeUntil(this.destroy$));
  }

  public getBoosterForSet(setCode: string): Observable<any> {
    return this.httpClient.get(this.REST_API_URL + 'booster/' + setCode).pipe(takeUntil(this.destroy$));
  }
}
