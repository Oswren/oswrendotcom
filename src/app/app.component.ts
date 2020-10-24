import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'Oswren';

  // TODO - extract link copy from http-bird component into shared service
  copyLink(): void {
  }

}
