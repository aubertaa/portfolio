import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class FontSizeService {

  private fontSizeSubject = new BehaviorSubject<string>('medium');
  fontSize$ = this.fontSizeSubject.asObservable();

  constructor() {}

  setFontSize(size: 'small' | 'medium' | 'large'): void {
    this.fontSizeSubject.next(size);

    // Update the root html element font-size based on the selected size
    switch (size) {
      case 'small':
        document.documentElement.style.fontSize = '100%';
        break;
      case 'medium':
        document.documentElement.style.fontSize = '125%';
        break;
      case 'large':
        document.documentElement.style.fontSize = '150%';
        break;
    }

  }
}
