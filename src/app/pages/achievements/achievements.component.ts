import { Component, OnInit } from '@angular/core';
import { PreloadImagesService } from '../../services/preload-images.service';
import { AchievementsService } from '../../services/achievements.service';


export interface Achievement {
  title: string;
  place: string;
  date: string;
  type: string;
  links: {
    title:string;
    url: string;
  }[];
  description: string;
}

@Component({
  selector: 'app-achievements',
  standalone: false,

  templateUrl: './achievements.component.html',
  styleUrl: './achievements.component.scss'
})

export class AchievementsComponent implements OnInit {

  achievements: Achievement[] = [];
  filteredAchievements: Achievement[] = [];

  types: string[] = [];

  constructor(private achievementsService: AchievementsService,
    private preloadImagesService: PreloadImagesService
  ) { }

  getAchievements (type: string) {
    return this.filteredAchievements.filter(achievement => achievement.type === type);
  }

  ngOnInit (): void {

    this.achievements = this.achievementsService.getAchievements();

    this.filteredAchievements = this.achievements;
    this.types = this.achievements.map(achievement => achievement.type)
      .filter((type, index, types) => types.indexOf(type) === index);

    // Preload images for the upcoming page
    const imagesToPreload = [
      'assets/achievements/tv-screen.png',
      'assets/achievements/book.png',
      'assets/achievements/school.png',
    ];

    this.preloadImagesService.preloadImages(imagesToPreload);

  }

}
