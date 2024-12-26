import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AchievementsService {

  getAchievements () {

    return [
      {
        title: 'Quels indicateurs suivre quand on n\'a "plus assez" de bugs en production ?',
        place: 'Soirée du Test Logiciel - Bordeaux',
        date: '2024',
        type: 'Conférence',
        links: [{
          title: 'le support de présentation',
          url: 'assets/documents/STL2024.pptx'
        }
        ],
        description: "Vos pratiques de Quality Engineering évoluent dans le bon sens : parfait ! Vous avez de moins en moins de bugs en production : super ! Mais alors que vous reste-t-il comme indicateurs à suivre pour guider votre amélioration ? Je vous propose un angle de vue différent sur votre efficacité. Développer une culture de l'anticipation par le quality engineering plutôt que la réaction à des soucis de qualité.\n\nDans ce REX, je présente les étapes par lesquelles nous sommes passés et comment se projeter plus loin que sur le simple constat de la qualité de ce qu'on produit."
      },
      {
        title: 'Quel investissement en test sur votre projet ?',
        place: 'Soirée du Test Logiciel - Bordeaux',
        date: '2023',
        type: 'Conférence',
        links: [{
          title: 'la présentation',
          url: 'https://www.youtube.com/watch?v=0GNnzSgnlbw'
      }],
        description: "Vous craignez la 'sur-qualité' (ca existe vraiment ?) ? Vous préférez miser sur la chance ? Je propose de vous aider à comprendre les risques liés à l'adoption d'une mauvaise stratégie d'investissement mais d'ailleurs : c'est quoi une bonne ou une mauvaise stratégie ? Et quel est le rôle de chacun dans tout ça ? Parlons-en pour a minima se tromper en toute connaissance de cause...\n\nInvestir sciemment ou choisir de subir certains coûts : quelques éléments pour devenir conscient qu'une réelle stratégie est nécessaire."
      },
      {
        title: 'Le test est une activité, pas une phase du cycle de développement',
        place: 'Agile Tour Bordeaux',
        date: '2022',
        type: 'Conférence',
        links: [{
          title: 'la présentation',
          url: 'https://www.youtube.com/watch?v=2Tg0Zzpo3SQ'
      }],
        description: "Le test en agilité : est-ce une mini cascade dev > test dans chaque itération ou autre chose ? Par ce retour d'expérience, je veux vous présenter comment nous abordons la place des tests, la culture de la qualité et le rôle de chacun dans la chaine de développement de nos produits.\n\nDu CTO au développeur, du Product Owner au testeur : quelle stratégie globale ? Quelles déclinaisons au quotidien ? Et bien entendu, quelques points de difficultés à partager aussi..."
      },
      {
        title: 'L\'intégration continue',
        place: 'Wild Code School - Bordeaux',
        date: '2020',
        type: 'Conférence',
        links: [{
          title: 'le support de présentation',
          url: 'assets/documents/intégration_continue_WCS.pptx'
      }],
        description: "Présentation du concept et des pratiques de l'intégration continue à des élèves développeurs."
      },
      {
        title: 'La dette technique',
        place: 'Wild Code School - Bordeaux',
        date: '2019',
        type: 'Conférence',
        links: [{
          title: 'le support de présentation',
          url: 'assets/documents/dette_technique_WCS.pptx'
      }],
        description: "Présentation du concept de dette technique, qu'est-ce que c'est ? Comment la mesurer ? Comment la gérer ? Comment la rembourser ?"
      },
      {
        title: 'L\'intégration (dis-)continue',
        place: 'Agile Tour Bordeaux',
        date: '2019',
        type: 'Conférence',
        links: [{
          title: 'le support de présentation',
          url: 'assets/documents/AgileTour2019_Integration_Discontinue_ A.AUBERT.pptx'
      }],
        description: "Présentation des principes et bonnes pratiques de l'intégration continue (code sources, livrables, environnements).\n\nQue doit-on/peut-on automatiser ? Que faire quand certaines actions restent manuelles ? Comment outiller l'intégration discontinue ?"
      },
      {
        title: 'DEVOPS missions et profils',
        place: 'CESI - Bordeaux',
        date: '2019',
        type: 'Conférence',
        links: [{
          title: 'le support de présentation',
          url: 'assets/documents/DEVOPS missions et profils - CESI 05062019.pptx'
      }],
        description: "Quels sont les différents sens du mot DevOps, quelles sont les missions et profils qui y sont associés ? Tour d'horizon des missions et outils de la culture DevOps."
      },
      {
        title: 'La définition du fini (DoD)',
        place: 'AT Internet - Bordeaux',
        date: '2017',
        type: 'Conférence',
        links: [{
          title: 'le support de présentation',
          url: 'assets/documents/définition du fini.pptx'
      }],
        description: "Présentation du concept, des biais associés et de ses potentiels travers. Retours d'expériences sur diverses expérimentations.\n\nLa définition du fini (definition of done - DoD) ou l'engagement d'une équipe au service de la qualité du produit."
      },
      {
        title: 'Les fondamentaux des tests logiciels',
        place: 'AT Internet - Bordeaux',
        date: '2016',
        type: 'Conférence',
        links: [{
          title: 'le support de présentation',
          url: 'assets/documents/Les fondamentaux des tests.pptx'
      }],
        description: "Présentation des fondamentaux des tests logiciels, d'après l'ISTQB : phases, niveaux, types et techniques de test."
      },
      {
        title: 'Pourquoi investir dans les tests unitaires ?',
        place: 'Medium (EN) / AT Internet blog (FR)',
        date: '2020',
        type: 'Publication',
        links: [{
          title: 'l\'article (EN)',
          url: 'https://medium.com/swlh/why-invest-in-unit-testing-8f1bdc2d688e'
        }, {
            title: 'l\'article (FR)',
            url: 'https://blog.atinternet.com/fr/pourquoi-investir-dans-les-tests-unitaires/'}],
        description: "Ah les tests unitaires ! Qu'est-ce que c'est ? Qui en est responsable ? Pourquoi en écrire ? En a-t-on une quantité suffisante ? Comment les concevoir ? Et ce code difficile à tester, qu'en fait-on ? Autant de questions auxquelles je vais tenter de répondre dans cet article.\n\nCet article s'adresse aux développeurs qui se posent des questions ou veulent se rassurer sur leurs pratiques mais aussi à tous les intervenants liés, de près ou de loin, à la stratégie de test ou « démarche qualité » de leur entreprise."
      },
      {
        title: 'Intégration continue : le code, les livrables et les environnements',
        place: 'Medium (EN) / AT Internet blog (FR)',
        date: '2019',
        type: 'Publication',
        links: [{
          title: 'l\'article (EN)',
          url: 'https://medium.com/swlh/continuous-integration-code-deliverables-and-environments-13e007eb8e8d'
        }, {
          title: 'l\'article (FR)',
            url: 'https://blog.atinternet.com/fr/integration-continue-le-code-les-livrables-et-les-environnements/'}],
        description: "J'ai décidé cette fois ci de synthétiser l'ensemble de mon propos en un unique visuel, en l'accompagnant d'explications plus détaillées pour ceux qui souhaitent entrer plus dans le détail..."
      },
      {
        title: 'Les tests système : un œil extérieur sur le produit ',
        place: 'Medium (EN) / AT Internet blog (FR)',
        date: '2019',
        type: 'Publication',
        links: [{
          title: 'l\'article (EN)',
          url: 'https://medium.com/swlh/system-tests-an-objective-look-at-the-product-8779d7a0bd69'
        }, {
          title: 'l\'article (FR)',
            url: 'https://blog.atinternet.com/fr/les-tests-systeme-un-oeil-exterieur-sur-le-produit/'}],
        description: "Je vais traiter dans cet article des tests logiciels que l'on peut pratiquer au niveau système. Ces tests constituent un maillon essentiel de la chaîne d'intégration continue, ils peuvent être fonctionnels ou non et ont des caractéristiques bien précises. J'aborderai les bonnes pratiques à respecter et les problématiques de mise en œuvre, en me basant sur l'exemple de tests système d'une API.\n\nVoyons donc ce que sont les niveaux de tests et ce qu'on appelle un test système."
      },
      {
        title: '[Backstage R&D] Test et Agilité : comment les combiner ?',
        place: 'Medium (EN) / AT Internet blog (FR)',
        date: '2018',
        type: 'Publication',
        links: [{
          title: 'l\'article (EN)',
          url: 'https://medium.com/at-internet/how-to-combine-testing-and-agile-method-2a990d70108f'
        }, {
          title: 'l\'article (FR)',
            url: 'https://blog.atinternet.com/fr/backstage-rd-test-et-agilite-comment-les-combiner/'}],
        description: "Comment concilier pratiques de tests et méthodes Agile lors du développement d'une solution Web Analytics ? Nos ingénieurs travaillent depuis plusieurs années sur des cycles de développement axés sur l'amélioration continue.\n\nPetite immersion dans les coulisses de la R&D d'AT Internet."
      },
      {
        title: '[R&D] La qualité, les tests logiciels et nous',
        place: 'Medium (EN) / AT Internet blog (FR)',
        date: '2019',
        type: 'Publication',
        links: [{
          title: 'l\'article (EN)',
          url: 'https://medium.com/at-internet/quality-and-software-testing-at-at-internet-27e83de72b8f'
        }, {
          title: 'l\'article (FR)',
            url: 'https://blog.atinternet.com/fr/r-et-d-la-qualite-les-tests-logiciels-et-nous/'}],
        description: "rrêtons-nous un instant sur l'un des fondamentaux du test logiciel : la notion de qualité.\n\nComment la définir ? Comment la mesurer ?1"
      },
      {
        title: 'Les tests système : 10 pièges à éviter ',
        place: 'Medium (EN) / AT Internet blog (FR)',
        date: '2020',
        type: 'Publication',
        links: [{
          title: 'l\'article (EN)',
          url: 'https://medium.com/swlh/system-tests-10-traps-to-avoid-6bd8bc9ae94f'
        }, {
          title: 'l\'article (FR)',
            url: 'https://blog.atinternet.com/fr/les-tests-systeme-10-pieges-a-eviter/'}],
        description: "Ces pièges peuvent avoir différents effets, de la perte de qualité dans le produit à la baisse de rentabilité des investissements en test.\n\nDans tous les cas, ces pratiques peuvent rapidement se montrer contre-productives pour les entreprises."
      },
      {
        title: 'Le job de testeur logiciel (chez AT Internet)',
        place: 'Medium (EN) / AT Internet blog (FR)',
        date: '2019',
        type: 'Publication',
        links: [{
          title: 'l\'article (EN)',
          url: 'https://medium.com/at-internet/software-testers-at-at-internet-86f5524551f'
        }, {
          title: 'l\'article (FR)',
            url: 'https://blog.atinternet.com/fr/le-job-de-testeur-logiciel-chez-at-internet/'}],
        description: "Le métier de testeur logiciel est en pleine évolution, et possède de multiples facettes.\n\nLes postes dans les entreprises sont variés et les titres cachent des profils très différents : analystes, concepteurs, testeurs, automaticiens, ingénieurs de test, ingénieur qualité, testeur agile etc… avec parfois et pour chacun de nous une compréhension différente de ce qui se cache derrière ces intitulés."
      },
      {
        title: 'Déploiement continu DevOps',
        place: 'CESI - Bordeaux',
        date: '2019 - 2025',
        type: 'Enseignement',
        links: [],
        description: "Comprendre le mouvement DevOps, maîtriser les valeurs/principes et pratiques DevOps, comprendre l'automatisation du déploiement d'application avec Docker/Kubernetes, pratiquer le SRE, aborder des pratiques de développement étendues (mutation testing, refactoring…)"
      },
      {
        title: "Recette d'un projet informatique",
        place: 'CESI - Bordeaux',
        date: '2019 - 2025',
        type: 'Enseignement',
        links: [],
        description: "Qualité logicielle et tests : définitions, types et niveaux de tests, définir et implémenter une stratégie de test dans un projet informatique, techniques de conception des scenarii de tests, implémentation des tests, les tests unitaires et la notion de dette technique / refactoring."
      },
      {
        title: 'Industrialisation des développements JavaScript',
        place: 'CESI - Bordeaux',
        date: '2019 - 2025',
        type: 'Enseignement',
        links: [],
        description: "Comprendre la plateforme NodeJS et maîtriser ses fondamentaux, connaître les outils d'industrialisation des projets JavaScript., savoir intégrer un projet JavaScript dans une chaîne d'intégration continue existante (gestion des dépendances, lignes de commandes), savoir écrire, automatiser et évaluer les tests d'une application JavaScript."
      },
      {
        title: 'Analyse et conception logiciels',
        place: 'CESI - Bordeaux',
        date: '2019 - 2025',
        type: 'Enseignement',
        links: [],
        description: "Techniques de conception des scenarii de tests, les tests unitaires et la notion de dette technique, implémentation des tests automatisés (unitaires / interface web)"
      }
    ]
  }

  constructor() { }
}
