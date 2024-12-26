import { TestBed } from '@angular/core/testing';
import { FontSizeService } from './font-size.service';

describe('FontSizeService', () => {
  let service: FontSizeService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(FontSizeService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('should set font size to "small" and update document style', () => {
    service.setFontSize('small');
    service.fontSize$.subscribe((size) => {
      expect(size).toBe('small');
    });
    expect(document.documentElement.style.fontSize).toBe('100%');
  });

  it('should set font size to "medium" and update document style', () => {
    service.setFontSize('medium');
    service.fontSize$.subscribe((size) => {
      expect(size).toBe('medium');
    });
    expect(document.documentElement.style.fontSize).toBe('125%');
  });

  it('should set font size to "large" and update document style', () => {
    service.setFontSize('large');
    service.fontSize$.subscribe((size) => {
      expect(size).toBe('large');
    });
    expect(document.documentElement.style.fontSize).toBe('150%');
  });
});
