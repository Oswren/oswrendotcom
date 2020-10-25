import { Input } from '@angular/core';
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

  @Input() birds: { id: number, path: string, desc: string }[] = [
    { id: 100, path: '/http-birds/100.png', desc: '100Continue bird' },
    { id: 200, path: '/http-birds/200.png', desc: '200 OK' },
    { id: 201, path: '/http-birds/201.png', desc: '201 Created' },
    { id: 202, path: '/http-birds/201.png', desc: '202 Accepted' },
    { id: 301, path: '/http-birds/301.png', desc: '301 Moved Permanently' },
    { id: 403, path: '/http-birds/403.png', desc: '403 Forbidden' },
    { id: 404, path: '/http-birds/404.png', desc: '404 Not Found' },
    { id: 405, path: '/http-birds/405.png', desc: '405 Method Not Allowed' },
    { id: 406, path: '/http-birds/406.png', desc: '406 Not Acceptable' },
    { id: 409, path: '/http-birds/409.png', desc: '409 Conflict' },
    { id: 418, path: '/http-birds/418.png', desc: '418 I\'m a Teapot' },
    { id: 422, path: '/http-birds/422.png', desc: '422 Unprocessable Entity' },
    { id: 451, path: '/http-birds/451.png', desc: '451 Unavailable For Legal Reasons' },
    { id: 503, path: '/http-birds/503.png', desc: '503 Service Unavailable' },
  ];

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
