import { Component, OnInit } from '@angular/core';
import { InputValidationService } from 'src/app/services/input-validation.service';
import { OswrenApiService } from 'src/app/services/oswren-api.service';

@Component({
  selector: 'app-mtg-boosters',
  templateUrl: './mtg-boosters.component.html',
  styleUrls: ['./mtg-boosters.component.scss']
})
export class MtgBoostersComponent implements OnInit {
  public chosenSetCode: string = "";
  public setData: Array<Array<any>> = [];
  public setList: Array<any> = [];
  public boosterContents: Array<any> = [];

  constructor(
    private oswrenApiService: OswrenApiService,
    private inputValidationService: InputValidationService
    ) { }

  ngOnInit(): void {
  }

  fetchBoosterForSet(set: string): void {
    if(set) {
      this.chosenSetCode = set;
    }

    this.oswrenApiService.getBoosterForSet(this.chosenSetCode).subscribe((res: Array<any>) => {
      this.boosterContents = res;
      console.log(res)
    });
  }

  populateAllSets(): void {
    this.oswrenApiService.getAllSets().subscribe((res: Array<any>) => {
      this.setList = res.reverse();
    });
  }

  isValidSetCode(): boolean {
    return this.inputValidationService.isSetCodeValid(this.chosenSetCode);
  }
}
