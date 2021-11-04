import { Injectable } from '@angular/core';
import { HttpClient } from  '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class OswrenApiService {

  private REST_API_URL = "https://localhost:44328/MTG";
  
  constructor(private httpClient: HttpClient) { }

  public getCardSet(setCode: string): any {
    return this.httpClient.get(this.REST_API_URL + setCode);
  }
}
