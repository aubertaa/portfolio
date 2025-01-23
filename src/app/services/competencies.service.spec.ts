import { TestBed } from '@angular/core/testing';
import { CompetenciesService } from './competencies.service';

describe('CompetenciesService', () => {
  let service: CompetenciesService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CompetenciesService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('should return a list of competencies', () => {
    const competencies = service.getCompetencies();
    expect(competencies).toBeTruthy();  // Ensure it returns something
    expect(competencies.length).toBeGreaterThan(0);  // Ensure the list is not empty
  });

  it('should return a competency with the correct properties', () => {
    const competencies = service.getCompetencies();
    const firstCompetency = competencies[0];

    expect(firstCompetency.title).toBeDefined();
    expect(firstCompetency.category).toBeDefined();
    expect(firstCompetency.logo).toBeDefined();
    expect(firstCompetency.level).toBeDefined();
    expect(firstCompetency.definition).toBeDefined();
    expect(firstCompetency.facts).toBeDefined();
    expect(firstCompetency.evaluation).toBeDefined();
    expect(firstCompetency.certification).toBeDefined();
  });

  it('should handle competencies with multiline definition', () => {
    const competencies = service.getCompetencies();
    const firstCompetency = competencies[0];

    expect(firstCompetency.definition).toContain('\n');  // Ensure definition contains newline characters
  });

  it('should return a competency with an empty certification field if not provided', () => {
    const competencies = service.getCompetencies();
    const firstCompetency = competencies[0];

    expect(firstCompetency.certification).toBe('');  // Ensure the certification is empty if not set
  });
});
