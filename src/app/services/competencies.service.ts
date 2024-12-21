import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CompetenciesService {
  getCompetencies () {

    return [
      {
        title: 'CI/CD',
        category: 'Ingénierie Logicielle',
        logo: 'logos/cicd.png',
        level: 5,
        description: 'Je définis, implémente et maintiens des pipelines de build/livraison/promotion/déploiement au sein de l\'entreprise. J\'assure la formation et l\'accompagnement des équipes dans leur usage des mécaniques de CI et dans leurs pratiques pouvant aller jusqu\'au déploiement continu. Il est pour moi important de garantir la qualité des livraisons et de réduire les risques de régression. Cet outillage est une des clés pour livrer vite et bien des incréments logiciels, en toute confiance et en toute sécurité.',
        certification: ''
      },
      {
        title: 'DevOps',
        category: 'Ingénierie Logicielle',
        logo: 'logos/devops.png',
        level: 5,
        description: 'Je défends et diffuse la culture de l\'automatisation, de la collaboration entre \'Devs\' et \'Ops\', par les pratiques d\'observabilité, le monitoring métier ou encore les pratiques S.R.E. (Site Reliability Engineering). Automatiser au maximum, monitorer tout ce qu\'on fait pour appuyer nos décisions et nos évolutions. Savoir où sont les points d\'amélioration et faire des petites évolutions successives permet de garantir la stabilité et la performance de nos services, tout en progressant continuellement : c\'est ça l\'esprit DevOps ! J\'enseigne aussi cette culture en école.',
        certification: ''
      },
      {
        title: 'FinOps',
        category: 'Ingénierie Logicielle',
        logo: 'logos/finops.png',
        level: 3,
        description: 'Le suivi des coûts de l\'activité de développement de logiciels est une discipline assez nouvelle mais essentielle : je suis très impliqué sur le suivi des coûts dans le cloud (AWS), leur optimisation et le dashboarding qui sert à piloter ces coûts. Cela permet de garantir la pérennité de l\'activité, de réduire les coûts inutiles et de garantir la rentabilité des projets. C\'est un aspect très important de la gestion de projet et de l\'activité de l\'entreprise, qui doit être pris en compte dès le début du projet.',
        certification: ''
      },
      {
        title: 'Gestion de projet',
        category: 'Ingénierie Logicielle',
        logo: 'logos/project_management.png',
        level: 4,
        description: "J'ai organisé, à plusieurs reprise et dans des contextes internationaux divers, la mise en place de tests transverses (inter-équipes, inter-sites), le déploiement de nouveaux outils (VCS, Sonarqube, Dependency Track par ex.). J'ai aussi piloté des projets de refonte de processus (SDLC), de mise en place de nouvelles pratiques, pour la mise en conformité à l'ISO27001 par exemple. J'ai pu démontrer ma capacité à mener à bien des projets de bout en bout, en respectant les équipes, les délais, les coûts et la qualité attendue.",
        certification: ''
      },
      {
        title: 'ISO 27001',
        category: 'Ingénierie Logicielle',
        logo: 'logos/iso.png',
        level: 4,
        description: 'Je suis en charge de la mise en place initiale et du suivi de la conformité ISO 27001 du processus de développement / livraison de l\'entreprise : 4-eyes principle, moindre privilège, revues de code croisées et analyses statiques de code (SAST). Je participe à l\'audit annuel de renouvellement de la certification de l\'entreprise et suis officiellement porteur de certains risques (et des actions de mitigation) liés à notre cycle de développement, parmi lesquels : les risques de non conformité lors du processus de développement, le respect des pratiques collectives pendant les périodes de congés ou d\'absence.',
        certification: ''
      },
      {
        title: 'Management',
        category: 'Ingénierie Logicielle',
        logo: 'logos/manager.png',
        level: 4,
        description: "Je suis actuellement manager de 22 personnes (3 testeur.se.s, 1 profil CI/DevOps, 4 profils Infra/DevOps, 13 développeur.se.s, 1 Product Owner). Selon moi, la mission principale d'un manager est de garantir le bien-être de ses collaborateurs, de les aider à progresser et à s'inscrire dans une dynamique d'amélioration continue. Si parfois cela peut passer par des décisions et actions difficiles ou délicates, je pense qu'il est important de toujours garder à l'esprit l'intérêt de l'équipe et de l'entreprise. J'ai pu démontrer mes capacités de management dans mes différentes missions, où j'ai toujours été reconnu pour ma capacité à fédérer les équipes, à les motiver et à les accompagner dans leur progression.",
        certification: ''
      },
      {
        title: 'Management de tests logiciels',
        category: 'Ingénierie Logicielle',
        logo: 'logos/test_manager.png',
        level: 5,
        description: 'Je suis totalement opérationnel sur la définition et l\'implémentation d\'une politique de test, d\'une stratégie de test dans l\'entreprise de développement logiciel. C\'est important pour une bonne gestion des risques et des investissements en test, dépendant des contraintes et du contexte de l\'entreprise. Lorsque je me suis présenté chez AT Internet en 2015, j\'ai procédé à un état des lieux et ai proposé un plan d\'action court/moyen/long terme pour améliorer la qualité des livrables et la satisfaction des clients. Ce plan a été validé et mis en place progressivement, avec des résultats très positifs pour l\'entreprise et les équipes de développement. Certains aspects de ce plan sont toujours en cours de mise en place et d\'amélioration, et je continue à les suivre et à les faire évoluer en fonction des retours et des évolutions des équipes.',
        certification: 'ISTQB Test manager'
      },
      {
        title: 'Membre d\'équipe Agile',
        category: 'Ingénierie Logicielle',
        logo: 'logos/agile_team_member.png',
        level: 5,
        description: "J'ai contribué pendant de nombreuses années, à la définition et à l'implémentation de tests automatisés dans le cadre du développement de produits logiciels : auto-organisation, planification, estimations, implémentation de user stories, itérations (sprints), livraisons de valeur incrémentales. ",
        certification: ''
      },
      {
        title: 'Pratiques de tests logiciels',
        category: 'Ingénierie Logicielle',
        logo: 'logos/test_automation.png',
        level: 5,
        description: 'Du respect de la stratégie de tests de l\'entreprise à l\'implémentation de campagnes de test, écriture et exécution de tests logiciels automatisés, choix d\'outils de test en fonction des contextes projets. La priorisation, l\'évalutation des risques et la détection au plus tôt des régressions sont des points clés pour moi dans la mise en place de tests automatisés. J\'ai pu démontrer mes compétences dans ce domaine lors de mes différentes missions en entreprise, ce qui m\'a permis de gagner la confiance de mes collègues et de mes supérieurs. J\'enseigne aussi ces pratiques en école.',
        certification: 'ISTQB Fondation'
      },
      {
        title: 'Product Owner',
        category: 'Ingénierie Logicielle',
        logo: 'logos/product_owner.png',
        level: 5,
        description: 'Je suis en charge actuellement, et depuis plusieurs années, de la gestion, de l\'alimentation et la priorisation du Product Backlog du périmètre CI / Outils internes de l\'entreprise : j\'anime grooming et refinements qui permettent d\'évaluer la valeur ajoutée, urgence et complexité de chaque développement. Ma collaboration avec l\'équipe permet de garantir des livraisons régulières de valeur à nos clients : les membres des équipes de développement de l\'entreprise. ',
        certification: ''
      },
      {
        title: 'RGPD',
        category: 'Ingénierie Logicielle',
        logo: 'logos/rgpd.png',
        level: 5,
        description: 'Je supervise le respect du cadre règlementaire en vigueur : de la protection des données personnelles dans le cadre de la solution implémentée (données client / intégrité / complétude / rétention / consentement éclairé / finalités) au cadre de la vie de l\'entreprise (données "employés"). Mes implémentations d\'envoi de données "maison" pour les activités de test et de développement de nos produits nous permettent de rester en complète conformité avec le RGPD.',
        certification: ''
      },
      {
        title: 'Scrum master',
        category: 'Ingénierie Logicielle',
        logo: 'logos/scrum_master.png',
        level: 5,
        description: 'J\ai une expérience de scrum master en équipe Agile. Les différents aspects de cette mission (accompagnement, coaching, soutien des pratiques d\'amélioration continue, suivi des indicateurs Agile (vélocité, burndowns, WIP, cycle time, lead time)) me paraissent essentiels pour garantir la bonne marche de l\'équipe et la livraison de valeur. Cette expérience me permet aujourd\'hui de mieux comprendre les enjeux et les contraintes des équipes de développement, et de mieux les accompagner dans leur progression et leur montée en compétences.',
        certification: 'CSM'
      },
      {
        title: 'Alexa Skills',
        category: 'Langages/frameworks',
        logo: 'logos/alexa.png',
        level: 4,
        description: 'J\'ai développé une "skill Alexa" pour la gestion de cave en ligne (https://www.macaveamoi.fr). Elle permet à chaque utilisateur des interactions avec sa cave par la voix : gestion des stocks, sorties de cave, recherche de bouteilles, consultations des statistiques de consommation. Cette implémentation inclut différents aspects techniques : prise en main du Alexa Skills Kit, implémentation d\'un algorithme "phonex", des algorithmes d\'évaluation de distance de Levenshtein pour permettre le traitement des demandes vocales via des requêtes SQL et des évaluations de correspondances phonétiques.',
        certification: ''
      },
      {
        title: 'Angular',
        category: 'Langages/frameworks',
        logo: 'logos/angular.png',
        level: 4,
        description: 'J\'ai procédé au développement d\'interfaces dans le cadre scolaire (Project Management Tool, Innotech Votes, Portfolio personnel). J\'ai obtenu, sur ces créations, des retours très positifs.',
        certification: ''
      },
      {
        title: 'Java Spring Boot',
        category: 'Langages/frameworks',
        logo: 'logos/spring.png',
        level: 4,
        description: 'J\'ai procédé au développement et à la maintenance de backends dans le cadre scolaire (Project Management Tool, Innotech Votes, Games Up). J\'ai obtenu, sur ces créations, des retours très positifs.',
        certification: ''
      },
      {
        title: 'NodeJS',
        category: 'Langages/frameworks',
        logo: 'logos/nodejs.png',
        level: 4,
        description: 'J\'ai développé des mécaniques avancées de tests automatisés d\'API en nodeJS mais également un projet d\'extraction et de suivi des dépendances d\'autres projets NodeJS. Mes développements ont intégré les pratiques de tests unitaires et les déclenchements d\'analyse statique de code.',
        certification: ''
      },
      {
        title: 'Python',
        category: 'Langages/frameworks',
        logo: 'logos/python.png',
        level: 4,
        description: 'Je développe et maintiens différents outillages "backoffice" (alerting, monitoring, tâches de maintenance). je développe également un projet de génération de données maison (hit-maker), en y incluant les pratiques de tests unitaires et d\'intégration',
        certification: ''
      },
      {
        title: 'QuasarJS',
        category: 'Langages/frameworks',
        logo: 'logos/quasar.png',
        level: 4,
        description: 'Lors de la refonte du site web MaCaveAMoi en 2023 (anciennement sous joomla/PHP) j\'ai décidé de découvrir et d\'implémenter la nouvelle version en QuasarJS, un framework basé sur VueJS que je ne connaissais pas. J\'assure aussi l\'administration de ce site et la livraison des évolutions, incluant l\'application mobile disponible sur Android.',
        certification: ''
      },
      {
        title: 'Shell',
        category: 'Langages/frameworks',
        logo: 'logos/shell.png',
        level: 4,
        description: 'Développement quotidien et régulier de librairies utilitaires : encapsulation d\'outillage pour faciliter les interactions avec le cloud AWS, scripting pour les pipelines de CI, par exemple.',
        certification: ''
      },
      {
        title: 'Adaptabilité',
        category: 'Soft skills',
        logo: 'logos/adaptation.png',
        level: 5,
        description: "Mes capacités d'adaptation me permettent de m'intégrer rapidement dans une nouvelle équipe, de m'adapter à un nouvel environnement, de nouvelles méthodes de travail, de nouveaux outils ou processus ou encore à de nouveaux interlocuteurs. J'ai pu le démontrer lors de mes différentes missions en administration ou en entreprise. Une phase d'audit et d'observation me permet de considérer les éléments et dynamiques en place pour pouvoir m'y adapter et y apporter une contribution la plus pertinente possible.",
        certification: ''
      },
      {
        title: 'Assertivité',
        category: 'Soft skills',
        logo: 'logos/assertivité.png',
        level: 5,
        description: "Indispensable pour une bonne communication et la prise en compte du cadre propre de notre interlocuteur, l'assertivité est une notion très importante pour moi. Il est en effet essentiel de savoir respecter l'autre tout en se respectant soi-même dans l'échange. En tant que manager et porteur d'éléments stratégiques pour l'entreprise, cela est très utile pour se retrouver rapidement avec mes collaborateurs sur un terrain constructif et efficace. Plusieurs formations et lectures m'ont permis de développer mes connaissances à ce sujet et d'acquérir certains outils pour l'appliquer au quotidien. (CNV, PNL, Process Communication par ex.)",
        certification: ''
      },
      {
        title: 'Autonomie',
        category: 'Soft skills',
        logo: 'logos/autonomie.png',
        level: 5,
        description: "Je suis très autonome dans mon travail, ce qui ne signifie pas forcément solitaire. Je pense en effet que l'autonomie, c'est aussi demander de l'aide quand on a besoin, pour avancer et progresser efficacement. Je sais mener un projet à bien, de la conception à la livraison, en passant par la mise en place des outils et des processus nécessaires. J'ai pu le démontrer lors de mes différentes missions en entreprise, où j'ai toujours été reconnu pour la qualité de mon travail et mon autonomie dans l'accomplissement des tâches pour atteindre l'objectif fixé.",
        certification: ''
      },
      {
        title: 'Esprit d\'initiative',
        category: 'Soft skills',
        logo: 'logos/initiative.png',
        level: 5,
        description: "J'aime la proactivité, faire des propositions, envisager des solutions et penser à des actions disruptives, pour faire avancer l'entreprise et les projets. Je me méfie des habitudes, des 'on a toujours fait comme ça' car je pense qu'il est important de se renouveller sans cesse, de s'appuyer sur les acquis pour aller plus loin. Je sais pour autant rester pragmatique dans mes choix, en tenant compte des risques et des contraintes, pour ne pas me lancer dans des aventures sans issue.",
        certification: ''
      },
      {
        title: 'Polyvalence',
        category: 'Soft skills',
        logo: 'logos/polyvalence.png',
        level: 5,
        description: "Je suis multitâche : par mon expérience, je suis aujourd'hui opérationnel sur beaucoup de choses différentes, tant techniques qu'organisationnelles mais je sais aussi apprendre et découvrir de nouvelles choses. J'aime la variété, la diversité des tâches et des missions, cela me permet de rester motivé et de ne pas m'ennuyer. Il est important pour moi de ne jamais refuser un nouveau défi qui se présente, pour continuer à progresser et à apprendre.",
        certification: ''
      },
      {
        title: 'Rigueur',
        category: 'Soft skills',
        logo: 'logos/rigueur.png',
        level: 5,
        description: 'Je suis rigoureux dans mon travail, j\'aime que les choses soient bien faites, dans les règles de l\'art. Cela me permet de garantir la qualité de mon travail, de respecter les délais et les engagements pris, de ne pas laisser de place à l\'imprévu. Je suis très attaché à la qualité de mon travail, et je m\'efforce de toujours donner le meilleur de moi-même. Cela m\'a permis de gagner la confiance de mes collègues et de mes supérieurs, qui savent qu\'ils peuvent compter sur moi pour mener à bien les missions qui me sont confiées.',
        certification: ''
      },
      {
        title: 'S.S.T.',
        category: 'Soft skills',
        logo: 'logos/SST.png',
        level: 5,
        description: 'Sauveteur Secouriste du Travail : formation aux premiers secours en entreprise. Je n\'ai pas hésité à me porter volontaire pour suivre cette formation, car je pense qu\'il est important de savoir réagir en cas d\'urgence, pour soi-même, pour ses collègues, pour ses proches. Cela m\'a permis d\'apprendre les premiers gestes en matière de secourisme, et de pouvoir intervenir efficacement en cas d\'accident ou de malaise en entreprise.',
        certification: 'S.S.T. Niveau 1'
      },
      {
        title: 'Sens de l\'organisation',
        category: 'Soft skills',
        logo: 'logos/organisation.png',
        level: 5,
        description: "Je suis quelqu'un de très organisé, j'aime que les choses soient bien rangées, bien classées, bien ordonnées. Cela me permet de gagner du temps, de ne pas me laisser déborder par les tâches à accomplir, de ne pas oublier des choses importantes. J'évalue l'urgence, l'importance et la complexité des tâches à accomplir, pour les traiter dans le bon ordre, en respectant les délais et les priorités. Cela m'a permis de mener à bien de nombreux projets, de respecter les engagements pris et les délais.",
        certification: ''
      },
      {
        title: 'AWS',
        category: 'Outils',
        logo: 'logos/aws.png',
        level: 5,
        description: "J'ai une utilisation professionnelle quotidienne des services AWS : infra as code (Cloudformation), messaging (SQS/SNS), aspects réseau et sécurité (VPC, IAM, Security Groups), stockage (S3, EBS), compute (EC2, Lambda), gestion des coûts (Cost Explorer, Budgets). J'accompagne également les équipes sur leur usage de ces services.",
        certification: 'AWS Developer Associate'
      },
      {
        title: 'Cypress',
        category: 'Outils',
        logo: 'logos/cypress.png',
        level: 5,
        description: 'Je procède moi-même et j\'accompagne les équipes sur l\'implémentation de tests d\'interface automatisés avec Cypress : simulation de parcours utilisateur, non régression fonctionnelle. Je guide aussi sur les évolutions à venir, les bonnes pratiques et les pièges à éviter.',
        certification: 'Advanced Cypress Professional'
      },
      {
        title: 'Datadog',
        category: 'Outils',
        logo: 'logos/datadog.png',
        level: 4,
        description: 'Je procède régulièrement à la création de dashboards qui exposent des métriques/logs envoyés depuis le code des équipes (et mon propre code). Je m\'occupe de la mise en place de monitors et alertes automatiques.',
        certification: ''
      },
      {
        title: 'Docker',
        category: 'Outils',
        logo: 'logos/docker.png',
        level: 5,
        description: 'Je pratique quotidiennement tous les aspects de la conteneurisation : création de conteneurs, réseaux, volumes, construction d\'images, publication, déploiement, docker-compose. J\'enseigne aussi ces pratiques en école.',
        certification: ''
      },
      {
        title: 'GitHub',
        category: 'Outils',
        logo: 'logos/github.png',
        level: 5,
        description: 'Utilisation régulière, forks, pull requests, issues, actions.',
        certification: ''
      },
      {
        title: 'Gitlab',
        category: 'Outils',
        logo: 'logos/gitlab.png',
        level: 5,
        description: 'Utilisation professionnelle quotidienne, accompagnement et formation des utilisateurs.',
        certification: 'Gitlab Practitioner'
      },
      {
        title: 'Jenkins',
        category: 'Outils',
        logo: 'logos/jenkins.png',
        level: 5,
        description: 'Utilisation et administration, développement de scripts et pipelines complexes, gestion des secrets, parcs de runners dynamiques, formation et accompagnement des utilisateurs. Je suis référent dans l\'entreprise pour toutes les questions liées à Jenkins.',
        certification: ''
      },
      {
        title: 'JetBrains Suite',
        category: 'Outils',
        logo: 'logos/jetbrains.png',
        level: 4,
        description: 'Utilisation régulière, refactoring, debug/tracing, tests.',
        certification: ''
      },
      {
        title: 'JIRA',
        category: 'Outils',
        logo: 'logos/jira.png',
        level: 5,
        description: 'Je suis dans l\'entreprise utilisateur et administrateur principal de l\'outil : gestion des projets, des sprints, des backlogs, des tickets, des workflows, des permissions, des tableaux de bord. J\'accompagne les utilisateurs à l\'utilisation de JIRA. Je mets également en place des scripts afin d\'extraire la donnée et de la traiter pour des besoins spécifiques (indicateurs, suivi des workflows, métriques DORA).',
        certification: ''
      },
      {
        title: 'Kubernetes',
        category: 'Outils',
        logo: 'logos/kubernetes.png',
        level: 4,
        description: 'J\'utilise Kubernetes régulièrement dans le cadre professionnel : développement et déploiement de cronjobs, pods, deployments, services. Gestion des ressources : réservations, limites, autoscaling.',
        certification: ''
      },
      {
        title: 'OWASP Dependency Track',
        category: 'Outils',
        logo: 'logos/dtrack.png',
        level: 4,
        description: 'Je suis gestionnaire et administrateur de l\'outil au niveau du groupe Piano, à l\'international. J\'assure, avec l\'équipe CI, la gestion des projets, des dépendances, des vulnérabilités, des licences, l\'intégration dans les pipelines de CI, la formation et accompagnement des utilisateurs.',
        certification: ''
      },
      {
        title: 'Piano Analytics',
        category: 'Outils',
        logo: 'logos/ATInternet.png',
        level: 5,
        description: 'Je connais très bien l\'outil et suis en mesure de travailler efficacement avec l\'Analytics Suite (Applications Analyzer, Rapports, Dashboard, DataQuery) : extraire des données répondant à des besoins spécifiques, réaliser des analyses avancées et segmentées, personnaliser des reportings et tableaux de bord.',
        certification: 'Analytis Suite Gold User'
      },
      {
        title: 'PowerBI',
        category: 'Outils',
        logo: 'logos/powerbi.png',
        level: 5,
        description: 'J\'implémente des mécaniques de récupération et de traitement de données pour du reporting. Je crée des dashboards PowerBI, incluant le développement de métriques et colonnes custom (DAX). Mes rapport sont consultés par les membres du département technique et par la direction.',
        certification: ''
      },
      {
        title: 'SOAP UI',
        category: 'Outils',
        logo: 'logos/soap_ui.png',
        level: 5,
        description: 'Je maîtrise l\'outil pour l\'mplémentation de tests d\'API automatisés, de performance et de sécurité.',
        certification: ''
      },
      {
        title: 'Sonarqube',
        category: 'Outils',
        logo: 'logos/sonarqube.png',
        level: 5,
        description: 'Je suis utilisateur et administrateur de l\'outil au niveau du groupe Piano : gestion des profils et barrières qualité, intégration dans les pipelines de CI. J\'assure la formation et l\'accompagnement des utilisateurs, aux côtés de l\'équipe CI.',
        certification: ''
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
        title: 'Allemand',
        category: 'Langues',
        logo: 'logos/DE.png',
        level: 3,
        description: 'Pratique occasionnelle dans un contexte personnel ou informel',
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
        title: 'Turc',
        category: 'Langues',
        logo: 'logos/TR.png',
        level: 3,
        description: 'Pratique occasionnelle dans un contexte personnel ou informel',
        certification: ''
      }
    ];

  }

  constructor() { }
}
