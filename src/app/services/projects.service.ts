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
        documents: [''],
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
        documents: [''],
        description: ''
      },
      {
        title: 'Définition et mesure de l\'efficacité de notre chaîne de développement logicielle',
        date: '2023',
        domaine: 'Stratégie d\'entreprise',
        involved_competencies: [
          "PowerBI",
          "Management",
          "Python",
          "JIRA",
          "Gitlab",
          "Sonarqube"
        ],
        image: '',
        documents: ['assets/documents/Measuring our efficiency.pdf'],
        description: "Définition des indicateurs de l'efficacité de la production logicielle de l'entreprise autour de 4 axes principaux : la vitesse de production, la qualité de nos livrables, les cadences des équipes, la prédictabilité des livraisons. Le suivi de ces indicateurs est assuré via PowerBI (rapports non publics), exploitant de la donnée issue des outils de la chaine de production logicielle via des scripts python."
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
        image: 'assets/images/backoffice_utils.png',
        documents: [''],
        description: 'Nombreux scripts de backoffice pour automatiser des tâches récurrentes: suppression de projets obsolètes (sonarqube), archivage automatique de repositories / contrôle des expirations de tokens (gitlab), alerting quotidien / hebdomadaire (respect des pratiques ISO27001, surveillance des environnements internes), extraction de données (JIRA, Gitlab, Sonarqube).'
      },
      {
        title: 'VolatileEC2',
        date: '2022',
        domaine: 'Développement',
        involved_competencies: [
          "AWS",
          "Docker",
          "Kubernetes",
          "Jenkins"
        ],
        image: '',
        documents: ['https://github.com/aubertaa/volEC2/'],
        description: 'Environnement pédagogique en InfraAsCode utilisé pour la formation des alternants aux pratiques et outils de la CI et DevOps. Déploiement d\'une infrastructure de développement logiciel en un clic.'
      },
      {
        title: 'HitMaker',
        date: '2020',
        domaine: 'Développement',
        involved_competencies: [
          "Python",
          "RGPD"
        ],
        image: 'assets/images/hitmaker.png',
        documents: [''],
        description: "Génération de jeux de données de tests aléatoires, simulation de données réelles. Les données sont utilisées par les équipes de développement pour les phases de R&D, développement et tests. Ces envois de données 'intelligents' permettent de ne pas utiliser de données clients réelles, et de ne pas dépendre de jeux de données statiques qui seraient trop figés et peu réalistes. La conformité RGPD de notre activité est ainsi respectée."
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
        documents: [''],
        description: "MaCaveAMoi est un logiciel de gestion de cave en ligne : disponible sur le web, mobile (Android Play Store) et sur Alexa (assistant vocal Amazon). Il permet de gérer sa cave à vin, de suivre ses dégustations, de partager ses découvertes et de découvrir de nouveaux vins. Les outils proposés sont simples et répondent aux besoins des amateurs de vin. Le Front est codé en QuasarJS, le Back en NodeJS/PHP, et l'API Alexa en NodeJS. (Site web : https://www.macaveamoi.fr/)"
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
        documents: ['assets/documents/2018 bilan with first steps.pptx'],
        description: "Définition d'objectifs clairs de mise en place de l'intégration continue dans les équipes de développement. Définition des pratiques et des outils à mettre en place : build/TU automatisés, déploiement automatisé, tests de no non régression, mécaniques de promotion des livrables. Suivi et accompagnement des équipes pour la mise en place effective. Diffusion d'une culture DevOps et d'une culture de l'amélioration continue."
      },
      {
        title: 'Automatisation de tests de non régression API de données analytics',
        date: '2016',
        domaine: 'Tests logiciels',
        involved_competencies: [
          "Pratiques de tests logiciels",
          "SOAP UI",
          "NodeJS"
        ],
        image: 'assets/images/APIv2-SoapUI.png',
        documents: [''],
        description: "Mise en place de tests de non régression sur une API avec des remontées de bugs déjà importantes : fiabilisation des développements et des évolutions, correction et amélioration de l'existant. Définition des données de test, validation des données brutes et des données agrégées, suivi des anomalies et des corrections. Priorisation des actions correctives et des implémentations en fonction des priorités d'usage client."
      },
      {
        title: 'Définition / implémentation d\'une politique et une stratégie de tests',
        date: '2015',
        domaine: 'Stratégie d\'entreprise',
        involved_competencies: [
          "Management de tests logiciels",
          "Gestion de projet"
        ],
        image: 'assets/images/strategie de test (visuel).png',
        documents: ['assets/documents/Stratégie de tests.pdf',
                    'assets/documents/Politique de tests.pdf'],
        description: 'Proposition, définition et mise en place d\'une politique de test d\'entreprise ou "Comment combiner pratiques de test et Agilité". Définition et implémentation progressive d\'une double stratégie de tests : anticipative pour éviter de nouvelles régressions en production et réactive pour gérer au mieux les régressions déjà présentes en production.'
      },
      {
        title: 'Automatisation de tests de non régression client lourd / Add-In Excel',
        date: '2014',
        domaine: 'Tests logiciels',
        involved_competencies: [
          "Pratiques de tests logiciels",
          "VBA",
          "Sikuli"
        ],
        image: 'assets/images/xlstat_tests_infra.png',
        documents: [''],
        description: "Mise en place en autonomie d'une mécanique de non régression automatisée pour valider des fonctionnalités d'un client lourd (Excel) et d'un Add-In Excel. Automatisation des tests de calculs statistiques, interactions graphiques avec Sikuli, un outil de reconnaissance d'images. Définition des jeux de données, validation des résultats mathématiques et graphiques sur différentes versions d'Office et différents versions d'OS (Windows, Mac)."
      },
      {
        title: 'Automatisation de tests de non régression backend de stockage de données dans le cloud',
        date: '2009',
        domaine: 'Tests logiciels',
        involved_competencies: [
          "Membre d'équipe Agile",
          "Pratiques de tests logiciels"
        ],
        image: '',
        documents: [''],
        description: "Implémentation de tests de non régression pour un backend de stockage de données dans le cloud. Suivi, alimentation de la roadmap et recette des versions de l'outil de test (Galathee) développé sur mesure. Environ 100 000 cas de tests implémentés seul, parallélisation des exécutions et suivi des référentiels de données."
      }
    ];

  }

}
