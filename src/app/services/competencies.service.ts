import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CompetenciesService {
  getCompetencies () {

    return [
      {
        title: 'Scrum master',
        category: 'Agilité',
        logo: 'logos/scrum_master.png',
        level: 5,
        description: 'Expérience de scrum master en équipe Agile : accompagnement, coaching, soutien des pratiques d\'amélioration continue, suivi des indicateurs Agile (vélocité, burndowns, WIP, cycle time, lead time)',
        certification: 'CSM'
      },
      {
        title: 'Membre d\'équipe Agile',
        category: 'Agilité',
        logo: 'logos/agile_team_member.png',
        level: 5,
        description: 'Proactivité, auto-organisation, déroulé de sprints, estimations, implémentation de user stories',
        certification: ''
      },
      {
        title: 'Product Owner',
        category: 'Agilité',
        logo: 'logos/product_owner.png',
        level: 5,
        description: 'Gestion, alimentation, priorisation du product Backlog du périmètre CI / Outils internes de l\'entreprise : (grooming et refinements)',
        certification: ''
      },
      {
        title: 'Pratiques de tests logiciels',
        category: 'Tests logiciels',
        logo: 'logos/test_automation.png',
        level: 5,
        description: 'Stratégie d\'implémentation de tests logiciels, campagnes de test, écriture et exécution de tests logiciels, choix d\'outils de test en fonction des contextes projets',
        certification: 'ISTQB Fondation'
      },
      {
        title: 'Management de tests logiciels',
        category: 'Tests logiciels',
        logo: 'logos/test_manager.png',
        level: 5,
        description: 'Définition et implémentation de politique de test, stratégie de test, gestion des risques et investissements en test',
        certification: 'ISTQB Test manager'
      },
      {
        title: 'CI/CD',
        category: 'Ingénierie Logicielle',
        logo: 'logos/cicd.png',
        level: 5,
        description: 'Pipelines de build/livraison, formation/accompagnement des équipes',
        certification: ''
      },
      {
        title: 'DevOps',
        category: 'Ingénierie Logicielle',
        logo: 'logos/devops.png',
        level: 5,
        description: 'Culture de l\'automatisation, de la collaboration entre \'Devs\' et \'Ops\' pratiques d\'observabilité, monitoring métier, pratiques SRE',
        certification: ''
      },
      {
        title: 'Gestion de projet',
        category: 'Ingénierie Logicielle',
        logo: 'logos/project_management.png',
        level: 4,
        description: 'Mise en place de tests transverses (inter-équipes, inter-sites), déploiement de nouveaux outils dans différents sites (VCS, Sonarqube, Dependency Track...)',
        certification: ''
      },
      {
        title: 'Management',
        category: 'Ingénierie Logicielle',
        logo: 'logos/manager.png',
        level: 4,
        description: 'Actuellement manager de 22 personnes (3 testeur.se.s, 1 profil CI/DevOps, 4 profils Infra/DevOps, 13 développeur.se.s, 1 Product Owner)',
        certification: ''
      },
      {
        title: 'ISO 27001',
        category: 'Ingénierie Logicielle',
        logo: 'logos/iso.png',
        level: 4,
        description: 'En charge de la mise en place et du suivi de la conformité ISO 27001 du processus de développement / livraison de l\'entreprise : 4-eyes principle, moindre privilège, revues de code croisées et analyses statiques de code (SAST). Participation à l\'audit annuel de renouvellement de la certification de l\'entreprise',
        certification: ''
      },
      {
        title: 'RGPD',
        category: 'Ingénierie Logicielle',
        logo: 'logos/rgpd.png',
        level: 5,
        description: 'Respect du cadre règlementaire en vigueur : protection des données personnelles dans le cadre de la solution implémentée (données client / intégrité / complétude / rétention / consentement éclairé / finalités) et dans le cadre de la vie de l\'entreprise (données "employés")',
        certification: ''
      },
      {
        title: 'FinOps',
        category: 'Ingénierie Logicielle',
        logo: 'logos/finops.png',
        level: 3,
        description: 'Suivi des coûts de l\'activité de développement de logiciels : coûts AWS, optimisations, réservations, dashboarding',
        certification: ''
      },
      {
        title: 'Python',
        category: 'Langages/frameworks',
        logo: 'logos/python.png',
        level: 4,
        description: 'Développement d\'outillages backoffice (alerting, monitoring, tâches de maintenance), projet de génération de données maison (hit-maker), pratiques de tests unitaires d\'intégration',
        certification: ''
      },
      {
        title: 'NodeJS',
        category: 'Langages/frameworks',
        logo: 'logos/nodejs.png',
        level: 4,
        description: 'Développement de tests automatisés d\'API, projet d\'extraction et suivi des dépendances de projets NodeJS, pratiques de tests unitaires',
        certification: ''
      },
      {
        title: 'Shell',
        category: 'Langages/frameworks',
        logo: 'logos/shell.png',
        level: 4,
        description: 'Développement de librairies utilitaires : encapsulation d\'outillage pour faciliter les interactions avec le cloud AWS, scripting pour les pipelines de CI',
        certification: ''
      },
      {
        title: 'Java Spring Boot',
        category: 'Langages/frameworks',
        logo: 'logos/spring.png',
        level: 4,
        description: 'Développement de backends dans le cadre scolaire (Project Management Tool, Innotech Votes, Games Up).',
        certification: ''
      },
      {
        title: 'Angular',
        category: 'Langages/frameworks',
        logo: 'logos/angular.png',
        level: 4,
        description: 'Développement d\'interfaces dans le cadre scolaire (Project Management Tool, Innotech Votes, Portfolio personnel)',
        certification: ''
      },
      {
        title: 'Alexa Skills',
        category: 'Langages/frameworks',
        logo: 'logos/alexa.png',
        level: 4,
        description: 'Développement d\'une skill Alexa pour la gestion de cave en ligne (https://www.macaveamoi.fr). Interactions avec la cave par la voix, gestion des stocks, sorties de cave, recherche de bouteilles, consultations des statistiques de consommation. Algorithmes phonex, distance de Levenshtein.',
        certification: ''
      },
      {
        title: 'QuasarJS',
        category: 'Langages/frameworks',
        logo: 'logos/quasar.png',
        level: 4,
        description: 'Développement et administration d\'un site web de gestion de cave en ligne (https://www.macaveamoi.fr)',
        certification: ''
      },
      {
        title: 'Cypress',
        category: 'Outils',
        logo: 'logos/cypress.png',
        level: 5,
        description: 'Implémentation de tests d\'interface automatisés, simulation de parcours utilisateur',
        certification: 'Advanced Cypress Professional'
      },
      {
        title: 'SOAP UI',
        category: 'Outils',
        logo: 'logos/soap_ui.png',
        level: 5,
        description: 'Implémentation de tests d\'API automatisés, performance et sécurité',
        certification: ''
      },
      {
        title: 'Gitlab',
        category: 'Outils',
        logo: 'logos/gitlab.png',
        level: 5,
        description: 'Utilisation professionnelle quotidienne, accompagnement et formation des utilisateurs',
        certification: 'Gitlab Practitioner'
      },
      {
        title: 'VSCode',
        category: 'Outils',
        logo: 'logos/vscode.png',
        level: 4,
        description: 'Utilisation régulière, refactoring, debug/tracing, tests',
        certification: ''
      },
      {
        title: 'JetBrains Suite',
        category: 'Outils',
        logo: 'logos/jetbrains.png',
        level: 4,
        description: 'Utilisation régulière, refactoring, debug/tracing, tests',
        certification: ''
      },
      {
        title: 'GitHub',
        category: 'Outils',
        logo: 'logos/github.png',
        level: 5,
        description: 'Utilisation régulière, forks, pull requests, issues, actions',
        certification: ''
      },
      {
        title: 'AWS',
        category: 'Outils',
        logo: 'logos/aws.png',
        level: 5,
        description: 'Utilisation professionnelle quotidienne',
        certification: 'AWS Developer Associate'
      },
      {
        title: 'Docker',
        category: 'Outils',
        logo: 'logos/docker.png',
        level: 5,
        description: 'Création de conteneurs, réseaux, volumes, construction d\'images, publication, déploiement, docker-compose',
        certification: ''
      },
      {
        title: 'Kubernetes',
        category: 'Outils',
        logo: 'logos/kubernetes.png',
        level: 4,
        description: 'Développement et déploiement de cronjobs, pods, deployments, services. Gestion des ressources : réservations, limites, autoscaling',
        certification: ''
      },
      {
        title: 'Datadog',
        category: 'Outils',
        logo: 'logos/datadog.png',
        level: 4,
        description: 'Création de dashboards, envoi de métriques/logs, monitors et alertes automatiques',
        certification: ''
      },
      {
        title: 'PowerBI',
        category: 'Outils',
        logo: 'logos/powerbi.png',
        level: 5,
        description: 'Récupération et traitement de données pour reporting, création de dashboards, développement de métriques et colonnes custom (DAX)',
        certification: ''
      },
      {
        title: 'Jenkins',
        category: 'Outils',
        logo: 'logos/jenkins.png',
        level: 5,
        description: 'Utilisation et administration, développement de scripts et pipelines complexes, gestion des secrets, parcs de runners dynamiques, formation et accompagnement des utilisateurs',
        certification: ''
      },
      {
        title: 'JIRA',
        category: 'Outils',
        logo: 'logos/jira.png',
        level: 5,
        description: 'Utilisation et administration, gestion des projets, des sprints, des backlogs, des tickets, des workflows, des permissions, des tableaux de bord, formation et accompagnement des utilisateurs',
        certification: ''
      },
      {
        title: 'OWASP Dependency Track',
        category: 'Outils',
        logo: 'logos/dtrack.png',
        level: 4,
        description: 'Utilisation et administration, gestion des projets, des dépendances, des vulnérabilités, des licences, intégration dans les pipelines de CI, formation et accompagnement des utilisateurs',
        certification: ''
      },
      {
        title: 'Sonarqube',
        category: 'Outils',
        logo: 'logos/sonarqube.png',
        level: 5,
        description: 'Utilisation et administration, gestion des profils et barrières qualité, intégration dans les pipelines de CI, formation et accompagnement des utilisateurs',
        certification: ''
      },
      {
        title: 'Anglais',
        category: 'Langues',
        logo: 'logos/UK.png',
        level: 4,
        description: 'Pratique professionnelle quotidienne, rédaction de documentation, participation à des réunions internationales, rédaction de mails, rédaction de rapports',
        certification: 'C1 > C1+'
      },
      {
        title: 'Allemand',
        category: 'Langues',
        logo: 'logos/DE.png',
        level: 3,
        description: 'Pratique occasionelle dans un contexte personnel ou informel',
        certification: ''
      },
      {
        title: 'Turc',
        category: 'Langues',
        logo: 'logos/TR.png',
        level: 3,
        description: 'Pratique occasionelle dans un contexte personnel ou informel',
        certification: ''
      }
    ];

  }

  constructor() { }
}
