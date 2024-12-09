import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent {

  sections = [
    { title: 'Qui suis-je ?', description: 'Learn more about my journey.', link: '/about' },
    { title: 'Mes compétences', description: 'Explore my skillset.', link: '/competencies' },
    { title: 'Mes projets', description: 'See my projects.', link: '/projects' },
    { title: 'Contact', description: 'Get in touch with me.', link: '/contact' },
  ];
}
