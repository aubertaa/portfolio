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
          "Management",
          "Gestion de projet"
        ],
        image: 'assets/images/unfix reorg.png',
        documents: [''],
        description: 'Réflexions et mise en place d\'une réorganisation des équipes de développement pour favoriser la résilience, la responsabilité et la performance des équipes. Certaines équipes sont regroupées en 3 pôles de développement, chacun ayant une mission claire et des objectifs spécifiques, en opposition à l\'organisation historique en équipe "composants". Cette organisation permet d\'avoir des équipes mieux résilientes (avec plus de membres) et plus dynamiques pour accueillir les incréments fonctionnels. L\'orientation vers une "chaîne de valeur client" est inspirée des Team Topologies et les réflexions ont été" soutenues par les éléments et la philosophie unFix (Jürgen Appelo). Ces changements ont été reçus positivement par les équipes historiques concernées et donnent satisfaction aux membres qui les composent.'
      },
      {
        title: 'GamesUp',
        date: '2024',
        domaine: 'Développement',
        involved_competencies: [
          "Python",
          "Docker"
        ],
        image: '',
        documents: ['https://github.com/aubertaa/recommandation-api'],
        description: 'API de recommandation de jeux vidéos basée sur des données de jeux vidéos et des avis utilisateurs. L\'API est déployée dans un conteneur Docker et est accessible via une interface REST. Elle permet de recommander des jeux vidéos en fonction de critères de recherche (genre, plateforme, prix, etc.). L\'algorithme de recommandation est du type KNN (K-Nearest Neighbors).'
      },
      {
        title: 'GamesUp',
        date: '2024',
        domaine: 'Développement',
        involved_competencies: [
          "Java Spring Boot",
          "Docker"
        ],
        image: '',
        documents: ['https://github.com/aubertaa/gamesUp'],
        description: 'Backend en Java Spring Boot exposant une API REST pour une application de vente en ligne de jeux vidéos : catalogue de jeux, gestion des stocks, commandes et avis utilisateurs.'
      },
      {
        title: 'Innotech Votes',
        date: '2024',
        domaine: 'Développement',
        involved_competencies: [
          "Java Spring Boot",
          "Angular",
          "Docker"
        ],
        image: '',
        documents: ['https://github.com/aubertaa/innotech-votes'],
        description: 'Application d\'émargement : première version simple permettant aux utilisateurs enregistrés de voter lors \'un scrutin. Le projet est réalisé en Java Spring Boot pour le back, et en Angular pour le front.'
      },
      {
        title: 'P.M.T. Project Management Tool',
        date: '2024',
        domaine: 'Développement',
        involved_competencies: [
          "Java Spring Boot",
          "Angular",
          "Docker"
        ],
        image: '',
        documents: ['https://github.com/aubertaa/pmt'],
        description: 'Application de gestion de projets permettant de créer des projets, des tâches et de les suivre, créer des utilisateurs et leur assigner des tâches. Le projet est réalisé en Java Spring Boot pour le back, et en Angular pour le front.'
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
        image: 'assets/images/KPIs.png',
        documents: [''],
        description: 'Extraction et suivi des métriques du cycle de développement logiciel (DORA) pour mesurer l\'efficacité de notre chaîne de production logicielle. Les métriques sont extraites des outils de la chaîne de production logicielle (JIRA, Gitlab, Sonarqube) via des scripts python, et sont agrégées et visualisées via PowerBI. Les métriques sont suivies sur le long terme pour mesurer l\'impact des actions d\'amélioration continue. Les points de contention du workflow sont identifiés et des actions d\'amélioration peuvent être mises en place.'
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
        description: 'Nombreux scripts de backoffice pour automatiser des tâches récurrentes: suppression de projets obsolètes (sonarqube), archivage automatique de repositories / contrôle des expirations de tokens (gitlab), alerting quotidien / hebdomadaire (respect des pratiques ISO27001, surveillance des environnements internes)...'
      },
      {
        title: 'Obtention de la certification d\'entreprise ISO 27001',
        date: '2021',
        domaine: 'Développement',
        involved_competencies: [
          "CI/CD",
          "Management",
          "Gestion de projet"
        ],
        image: 'assets/images/ISO.png',
        documents: ['assets/documents/ISO27001.pdf'],
        description: 'Accompagnement des équipes dans la mise en place des pratiques de sécurité nécessaires pour obtenir la certification ISO 27001. Définition des objectifs, des pratiques et des outils à mettre en place : gestion des risques, des vulnérabilités, des configurations, des changements. Déploiement et contrôle des pratiques de sécurité, adaptations du processus de développement et formation des développeurs. Participation aux audits internes et externes, suivi des actions correctives et préventives.'
      },
      {
        title: 'VolatileEC2',
        date: '2021',
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
