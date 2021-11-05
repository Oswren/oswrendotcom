import { Component, Input, OnInit } from '@angular/core';
import { OswrenApiService } from 'src/app/services/oswren-api.service';

@Component({
  selector: 'app-mtg-sets',
  templateUrl: './mtg-sets.component.html',
  styleUrls: ['./mtg-sets.component.scss']
})
export class MtgSetsComponent implements OnInit {
  public chosenSetCode: string = "";
  public numberOfCardsInSet: number;
  public setData: Array<Array<any>> = [];
  public setList: Array<any> = [];
  public cardPage: number = 1;

  constructor(private oswrenApiService: OswrenApiService) { }

  ngOnInit(): void {
  }

  populateAllSets(): void {
    this.oswrenApiService.getAllSets().subscribe((res: Array<any>) => {
      this.setList = res.reverse();
    });
  }

  populateAllCardsForSet(set?: string): void {
    if(set) {
      this.chosenSetCode = set;
    }

    this.oswrenApiService.getCardsForSet(this.chosenSetCode).subscribe((res: Array<any>) => {
      this.setData = [];
      this.numberOfCardsInSet = res.length;
      while (res.length) {
        this.setData.push(res.splice(0, 24));
      }
    });
  }

  pageRight(): void {
    if(!(this.cardPage === this.setData.length)) {
      this.cardPage++;
    }
  }

  pageLeft(): void {
    if(!(this.cardPage === 1)) {
      this.cardPage--;
    }
  }

  isValidSetCode(): boolean {
    return !!this.chosenSetCode && this.chosenSetCode.length === 3;
  }
}
