import { Component, OnInit } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { LinkCopyService } from 'src/app/services/link-copy.service';

@Component({
  selector: 'app-http-birds',
  templateUrl: './http-birds.component.html',
  styleUrls: ['./http-birds.component.scss']
})
export class HttpBirdsComponent implements OnInit {

  constructor(private copyCompleteSnackBar: MatSnackBar, private linkCopyService: LinkCopyService) { }

  ngOnInit(): void {
  }

  copyLinkToBirb(birbToCopy: string): void {
    if (this.linkCopyService.copyLink(birbToCopy)){
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
