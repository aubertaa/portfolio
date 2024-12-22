import { TestBed } from '@angular/core/testing';
import { ThemeService } from './theme.service';

describe('ThemeService', () => {
  let service: ThemeService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ThemeService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('should toggle the theme and update DOM elements', () => {
    // Mocking the document methods used by the service
    const toggleClassMock = jest.spyOn(document.body.classList, 'toggle');
    const querySelectorMock = jest.spyOn(document, 'querySelector').mockReturnValue({
      classList: {
        toggle: jest.fn(),
        add: jest.fn(),
        remove: jest.fn(),
        contains: jest.fn(),
        length: 0,
        value: '',
        item: jest.fn(),
        replace: jest.fn(),
        supports: jest.fn(),
        toString: jest.fn(),
        entries: jest.fn(),
        forEach: jest.fn(),
        keys: jest.fn(),
        values: jest.fn(),
        [Symbol.iterator]: jest.fn()
       },
      setAttribute: jest.fn()
    } as unknown as Element);

    // Call toggleTheme and check if DOM elements' classes and favicon were updated
    service.toggleTheme();

    // Check if the body class list toggled
    expect(toggleClassMock).toHaveBeenCalledWith('light-theme', true);

    // Check that header and footer are queried and toggled for light-theme class
    const headerMock = document.querySelector('header')!;
    const footerMock = document.querySelector('footer')!;
    expect(headerMock.classList.toggle).toHaveBeenCalledWith('light-theme', true);
    expect(footerMock.classList.toggle).toHaveBeenCalledWith('light-theme', true);

    // Check if the favicon link href is updated correctly
    const faviconMock = document.querySelector('link[rel="icon"]')!;
    expect(faviconMock.setAttribute).toHaveBeenCalledWith('href', 'favicon-light.ico');

    // Toggle theme again and check for the opposite values
    service.toggleTheme();

    // Ensure body class list toggle again with the opposite value
    expect(toggleClassMock).toHaveBeenCalledWith('light-theme', false);
    expect(headerMock.classList.toggle).toHaveBeenCalledWith('light-theme', false);
    expect(footerMock.classList.toggle).toHaveBeenCalledWith('light-theme', false);
    expect(faviconMock.setAttribute).toHaveBeenCalledWith('href', 'favicon.ico');

    // Restore the original implementation of document.querySelector and classList.toggle
    querySelectorMock.mockRestore();
  });
});
