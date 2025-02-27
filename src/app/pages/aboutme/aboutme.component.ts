import { Component, OnInit } from '@angular/core';
import { PreloadImagesService } from '../../services/preload-images.service';

@Component({
  selector: 'app-aboutme',
  templateUrl: './aboutme.component.html',
  styleUrl: './aboutme.component.scss'
})
export class AboutMeComponent implements OnInit {
  constructor(
    private preloadImagesService: PreloadImagesService
  ) { }

  ngOnInit (): void {

    // Preload image for the home page
    this.preloadImagesService.preloadImages(["AUBERTAlexandre.jpg"]);

  }

}
