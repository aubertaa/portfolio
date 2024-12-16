import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent {

  sections = [
    { title: 'Qui suis-je ?', description: 'En savoir plus à propos de moi et mon parcours', link: '/qui-suis-je' },
    { title: 'Ma bibliothèque', description: 'Mes lectures professionnelles et sources d\'inspiration', link: '/library' },
    { title: 'Mes compétences', description: 'Découvrez mes compétences plus en détail', link: '/mes-competences' },
    { title: 'Mes projets', description: 'Découvrez mes projets et réalisations', link: '/projets' },
    { title: 'Mes accomplissements', description: 'Mes accomplissements, publications et interventions', link: '/achievements' },
    { title: 'Contact', description: 'Contactez-moi via le formulaire de contact', link: '/contact' },
  ];
}
