import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ProjectsService {

  constructor() { }

  getProjects () {

    return [
      {
        title: 'Réorganisation d\'équipes en 3 pôles de développement',
        date: '2025',
        domaine: 'Stratégie d\'entreprise',
        involved_competencies: [
          "",
          ""
        ],
        image: '',
        document: '',
        description: ''
      },
      {
        title: 'Implémentation et suivi des métriques DORA',
        date: '2024',
        domaine: 'Stratégie d\'entreprise',
        involved_competencies: [
          "PowerBI",
          "Python",
          "CI/CD"
        ],
        image: '',
        document: '',
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
        image: '',
        document: '',
        description: ''
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
        image: '',
        document: '',
        description: 'Nombreux scripts de backoffice pour automatiser des tâches récurrentes: suppression de projets obsolètes (sonarqube), archivage automatique de repositories / contrôle des expirations de tokens (gitlab), alerting quotidien / hebdomadaire (respect des pratiques ISO27001, surveillance des environnements internes), extraction de données (JIRA, Gitlab, Sonarqube).'
      },
      {
        title: 'Suivi / dashboarding des coûts cloud',
        date: '2022',
        domaine: 'Stratégie d\'entreprise',
        involved_competencies: [
          "",
          ""
        ],
        image: '',
        document: '',
        description: ''
      },
      {
        title: 'VolatileEC2',
        date: '2022',
        domaine: 'Développement',
        involved_competencies: [
          "AWS"
        ],
        image: '',
        document: '',
        description: 'Environnement pédagogique en InfraAsCode utilisé pour la formation des alternants aux pratiques et outils de la CI et DevOps. Déploiement d\'une infrastructure de développement logiciel en un clic.'
      },
      {
        title: 'HitMaker',
        date: '2020',
        domaine: 'Développement',
        involved_competencies: [
          "",
          ""
        ],
        image: '',
        document: '',
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
        image: '',
        document: '',
        description: 'Logiciel de gestion de cave en ligne : disponible sur le web, mobile (Android Play Store) et sur Alexa.'
      },
      {
        title: 'Automatisation de tests de non régression d\'interfaces',
        date: '2018',
        domaine: 'Tests logiciels',
        involved_competencies: [
          "",
          ""
        ],
        image: '',
        document: '',
        description: ''
      },
      {
        title: 'Déploiement de l\'intégration continue',
        date: '2017',
        domaine: 'Stratégie d\'entreprise',
        involved_competencies: [
          "CI/CD",
          "DevOps",
          "Management"
        ],
        image: '',
        document: '',
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
        image: '',
        document: '',
        description: ''
      },
      {
        title: 'Définition / implémentation d\'une politique et une stratégie de tests',
        date: '2015',
        domaine: 'Stratégie d\'entreprise',
        involved_competencies: [
          "Management de tests logiciels",
          "Gestion de projet"
        ],
        image: '',
        document: '',
        description: 'Proposition, définition et mise en place d\'une politique de test d\'entreprise ou "Comment combiner pratiques de test et Agilité". Définition et implémentation progressive d\'une double stratégie de tests : anticipative pour éviter de nouvelles régressions en production et réactive pour gérer au mieux les régressions déjà présentes en production.'
      },
      {
        title: 'Automatisation de tests de non régression client lourd / Add-In Excel',
        date: '2014',
        domaine: 'Tests logiciels',
        involved_competencies: [
          "",
          ""
        ],
        image: '',
        document: '',
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
        image: '',
        document: '',
        description: ''
      }
    ];

  }

}
