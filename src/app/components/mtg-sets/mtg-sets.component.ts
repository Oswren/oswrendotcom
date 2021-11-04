import { Component, OnInit } from '@angular/core';
import { OswrenApiService } from 'src/app/services/oswren-api.service';

@Component({
  selector: 'app-mtg-sets',
  templateUrl: './mtg-sets.component.html',
  styleUrls: ['./mtg-sets.component.scss']
})
export class MtgSetsComponent implements OnInit {

  public setData: any;

  constructor(private oswrenApiService: OswrenApiService) { }

  ngOnInit(): void {
  }

  getAllCardsForSet(setCode: string) {
    this.setData = this.oswrenApiService.getCardSet(setCode);
  }
}
