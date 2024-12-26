import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class PreloadImagesService {

  preloadImages (imageUrls: string[]): void {
    imageUrls.forEach(url => {
      const img = new Image();
      img.src = url;
    });
  }

}
