import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class LinkCopyService {

  constructor() { }

  copyLink(birbToCopy?: string): boolean {
    try {
      const dummyElement = document.createElement('input');
      let textToCopy = window.location.href;

      if (birbToCopy) {
        textToCopy = 'https://www.oswren.com/assets/images/http-birds/' + birbToCopy + '.png';
      }

      document.body.appendChild(dummyElement);
      dummyElement.value = textToCopy;
      dummyElement.select();
      document.execCommand('copy');
      document.body.removeChild(dummyElement);

      return true;
    } catch {
      console.log('An error occurred while trying to copy the correct link!');
      return false;
    }
  }
}
