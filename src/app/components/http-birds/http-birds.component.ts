import { Component, OnInit } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';

@Component({
  selector: 'app-http-birds',
  templateUrl: './http-birds.component.html',
  styleUrls: ['./http-birds.component.scss']
})
export class HttpBirdsComponent implements OnInit {

  constructor(private copyCompleteSnackBar: MatSnackBar) { }

  ngOnInit(): void {
  }

  copyLinkToBirb(birbToCopy: string): void {
    const dummyElement = document.createElement('input');
    const textToCopy = window.location.href + '/' + birbToCopy + '.png';
    // add temporary element to dom
    document.body.appendChild(dummyElement);
    dummyElement.value = textToCopy;
    // copy contents of temporary element
    dummyElement.select();
    document.execCommand('copy');
    // delete the temprary element from dom
    document.body.removeChild(dummyElement);

    this.openCopyCompleteSnackBar('Link Copied!');
  }

  openCopyCompleteSnackBar(snackBarText: string): void {
    this.copyCompleteSnackBar.open(snackBarText, 'Okay', {
      duration: 1000
    });
  }
}
