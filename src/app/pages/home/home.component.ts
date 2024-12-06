import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent {

  sections = [
    { title: 'About Me', description: 'Learn more about my journey.', link: '/about' },
    { title: 'Competencies', description: 'Explore my skillset.', link: '/competencies' },
    { title: 'Projects', description: 'See my projects.', link: '/projects' },
    { title: 'Contact', description: 'Get in touch with me.', link: '/contact' },
  ];
}
