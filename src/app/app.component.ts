import { Component } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { LinkCopyService } from './services/link-copy.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'Oswren';
  constructor(private copyCompleteSnackBar: MatSnackBar, private linkCopyService: LinkCopyService) { }

  copyLinkForCurrentPage(): void {
    if (this.linkCopyService.copyLink()){
      this.openSnackBar('Link Copied!');
    } else {
      this.openSnackBar('Uh oh! An error occurred during the link copy process :(');
    }
  }

  openSnackBar(snackBarText: string): void {
    this.copyCompleteSnackBar.open(snackBarText, 'Okay', {
      duration: 1000
    });
  }

}
