import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ProjectsService {

  constructor() { }

  getProjects () {

    return [
      {
        title: 'Définition / implémentation d\'une politique et une stratégie de tests',
        date: '2015',
        domaine: 'Stratégie d\'entreprise',
        involved_competencies: [
          "",
          ""
        ],
        description: ''
      },
      {
        title: 'Implémentation et suivi des métriques DORA',
        date: '2024',
        domaine: 'Stratégie d\'entreprise',
        involved_competencies: [
          "",
          ""
        ],
        description: ''
      },
      {
        title: 'Déploiement de l\'intégration continue',
        date: '2017 - 2018',
        domaine: 'Stratégie d\'entreprise',
        involved_competencies: [
          "",
          ""
        ],
        description: ''
      },
      {
        title: 'Suivi / dashboarding des coûts cloud',
        date: '2022',
        domaine: 'Stratégie d\'entreprise',
        involved_competencies: [
          "",
          ""
        ],
        description: ''
      },
      {
        title: 'Réorganisation d\'équipes en 3 pôles de développement',
        date: '2022 - 2025',
        domaine: 'Stratégie d\'entreprise',
        involved_competencies: [
          "",
          ""
        ],
        description: ''
      },
      {
        title: 'Définition et mesure de l\'efficacité de notre chaîne de développement logicielle',
        date: '2023',
        domaine: 'Stratégie d\'entreprise',
        involved_competencies: [
          "",
          ""
        ],
        description: ''
      },
      {
        title: 'Automatisation de tests de non régression d\'interfaces',
        date: '2018',
        domaine: 'Tests logiciels',
        involved_competencies: [
          "",
          ""
        ],
        description: ''
      },
      {
        title: 'Automatisation de tests de non régression API de données analytics',
        date: '2016',
        domaine: 'Tests logiciels',
        involved_competencies: [
          "",
          ""
        ],
        description: ''
      },
      {
        title: 'Automatisation de tests de non régression client lourd / Add-In Excel',
        date: '2014',
        domaine: 'Tests logiciels',
        involved_competencies: [
          "",
          ""
        ],
        description: ''
      },
      {
        title: 'Automatisation de tests de non régression backend de stockage de données dans le cloud',
        date: '2009',
        domaine: 'Tests logiciels',
        involved_competencies: [
          "",
          ""
        ],
        description: ''
      },
      {
        title: 'HitMaker',
        date: '2020',
        domaine: 'Développement',
        involved_competencies: [
          "",
          ""
        ],
        description: 'Génération de jeux de données de tests aléatoires, simulation de données réelles.'
      },
      {
        title: 'MaCaveAMoi',
        date: '2019',
        domaine: 'Développement',
        involved_competencies: [
          "QuasarJS",
          "Alexa Skills"
        ],
        description: 'Logiciel de gestion de cave en ligne : disponible sur le web, mobile (Android Play Store) et sur Alexa.'
      },
      {
        title: 'VolatileEC2',
        date: '2022',
        domaine: 'Développement',
        involved_competencies: [
          "AWS"
        ],
        description: 'Environnement pédagogique en InfraAsCode utilisé pour la formation des alternants aux pratiques et outils de la CI et DevOps. Déploiement d\'une infrastructure de développement logiciel en un clic.'
      },
      {
        title: 'Backoffice utils',
        date: '2023',
        domaine: 'Développement',
        involved_competencies: [
          "Python",
          "JIRA",
          "Gitlab",
          "Sonarqube"
        ],
        description: 'Nombreux scripts de backoffice pour automatiser des tâches récurrentes: suppression de projets obsolètes (sonarqube), archivage automatique de repositories / contrôle des expirations de tokens (gitlab), alerting quotidien / hebdomadaire (respect des pratiques ISO27001, surveillance des environnements internes), extraction de données (JIRA, Gitlab, Sonarqube).'
      }
    ];

  }

}
