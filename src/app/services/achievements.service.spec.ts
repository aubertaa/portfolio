import { TestBed } from '@angular/core/testing';
import { AchievementsService } from './achievements.service';

describe('AchievementsService', () => {
  let service: AchievementsService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(AchievementsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('should return a list of achievements', () => {
    const achievements = service.getAchievements();
    expect(achievements).toBeTruthy();  // Ensure it returns something
    expect(achievements.length).toBeGreaterThan(0);  // Ensure there are achievements in the array
  });

  it('should return an achievement with the correct properties', () => {
    const achievements = service.getAchievements();
    const firstAchievement = achievements[0];

    expect(firstAchievement.title).toBeDefined();
    expect(firstAchievement.place).toBeDefined();
    expect(firstAchievement.date).toBeDefined();
    expect(firstAchievement.type).toBeDefined();
    expect(firstAchievement.links).toBeDefined();
    expect(firstAchievement.description).toBeDefined();

    // Check that links have the correct properties
    expect(firstAchievement.links[0].title).toBeDefined();
    expect(firstAchievement.links[0].url).toBeDefined();
  });

  it('should return an empty links array for an achievement with no links', () => {
    const achievements = service.getAchievements();
    const noLinksAchievement = achievements.find(a => a.links.length === 0);

    expect(noLinksAchievement).toBeTruthy();
  });

  it('should handle achievements with descriptions containing newlines', () => {
    const achievements = service.getAchievements();
    const firstAchievement = achievements[0];

    expect(firstAchievement.description).toContain('\n');  // Check if description contains newlines
  });
});
