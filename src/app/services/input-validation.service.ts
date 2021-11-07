import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class InputValidationService {

  constructor() { }

  public isSetCodeValid(chosenSetCode: string): boolean {
    return !!chosenSetCode && chosenSetCode.length > 3;
  }
}
