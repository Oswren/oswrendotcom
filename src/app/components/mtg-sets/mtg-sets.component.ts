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
  @Input() setData: Array<Array<any>> = [];

  constructor(private oswrenApiService: OswrenApiService) { }

  ngOnInit(): void {
  }

  getAllCardsForSet(): void {
    this.oswrenApiService.getCardSet(this.chosenSetCode).subscribe((res: Array<any>) => {
      this.setData = [];
      this.numberOfCardsInSet = res.length;
      while (res.length) {
        this.setData.push(res.splice(0, 25));
      }
    });
  }

  isValidSetCode(): boolean {
    
    return !!this.chosenSetCode && this.chosenSetCode.length === 3;
  }
}
