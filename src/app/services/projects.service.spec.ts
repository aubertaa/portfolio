import { TestBed } from '@angular/core/testing';
import { ProjectsService } from './projects.service';

describe('ProjectsService', () => {
  let service: ProjectsService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ProjectsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('should return a list of projects with the correct structure', () => {
    const projects = service.getProjects();

    // Ensure the return value is an array
    expect(Array.isArray(projects)).toBe(true);

    // Check that the first project has the expected structure
    const firstProject = projects[0];
    expect(firstProject.title).toBeDefined();
    expect(firstProject.date).toBeDefined();
    expect(firstProject.domaine).toBeDefined();
    expect(firstProject.involved_competencies).toBeDefined();
    expect(firstProject.image).toBeDefined();
    expect(firstProject.documents).toBeDefined();
    expect(firstProject.presentation).toBeDefined();
    expect(firstProject.lancement).toBeDefined();
    expect(firstProject.steps).toBeDefined();
    expect(firstProject.results).toBeDefined();
    expect(firstProject.stakeholders).toBeDefined();
    expect(firstProject.next_steps).toBeDefined();
    expect(firstProject.my_analysis).toBeDefined();

    // Check that the involved_competencies is an array and contains correct values
    expect(Array.isArray(firstProject.involved_competencies)).toBe(true);
    expect(firstProject.involved_competencies).toContain('Management');
    expect(firstProject.involved_competencies).toContain('Gestion de projet');

    // Check that documents is an array and has correct structure
    expect(Array.isArray(firstProject.documents)).toBe(true);
    expect(firstProject.documents[0].title).toBeDefined();
    expect(firstProject.documents[0].url).toBeDefined();
  });

  it('should return projects with correct data', () => {
    const projects = service.getProjects();
    const firstProject = projects[0];

    // Check specific values in the first project
    expect(firstProject.title).toBe('Réorganisation d\'équipes en 3 pôles de développement');
    expect(firstProject.date).toBe('2025');
    expect(firstProject.domaine).toBe('Stratégie d\'entreprise');
    expect(firstProject.image).toBe('assets/images/unfix reorg.png');
    expect(firstProject.documents[0].url).toBe('assets/documents/orga_unfix.pptx');
  });
});
