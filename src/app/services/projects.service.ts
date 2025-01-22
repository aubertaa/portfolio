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
        documents: [{title: 'la présentation', url:'assets/documents/orga_unfix.pptx'}],
        description: 'Réflexions et mise en place d\'une réorganisation des équipes de développement pour favoriser la résilience, la responsabilité et la performance des équipes. Certaines équipes sont regroupées en 3 pôles de développement, chacun ayant une mission claire et des objectifs spécifiques, en opposition à l\'organisation historique en équipe "composants".\n\nCette organisation permet d\'avoir des équipes mieux résilientes (avec plus de membres) et plus dynamiques pour accueillir les incréments fonctionnels. L\'orientation vers une "chaîne de valeur client" est inspirée des Team Topologies et les réflexions ont été" soutenues par les éléments et la philosophie unFix (Jürgen Appelo). Ces changements ont été reçus positivement par les équipes historiques concernées et donnent satisfaction aux membres qui les composent.',
        presentation:"",
        lancement:"",
        steps: "",
        results: {
          for_me:"",
          for_the_company: ""
        },
        stakeholders: "",
        next_steps: "",
        my_analysis: ""
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
        documents: [],
        description: 'Extraction et suivi des métriques du cycle de développement logiciel (DORA) pour mesurer l\'efficacité de notre chaîne de production logicielle.\n\nLes métriques sont extraites des outils de la chaîne de production logicielle (JIRA, Gitlab, Sonarqube) via des scripts python, et sont agrégées et visualisées via PowerBI. Les métriques sont suivies sur le long terme pour mesurer l\'impact des actions d\'amélioration continue. Les points de contention du workflow sont identifiés et des actions d\'amélioration peuvent être mises en place.',
        presentation: "",
        lancement: "",
        steps: "",
        results: {
          for_me: "",
          for_the_company: ""
        },
        stakeholders: "",
        next_steps: "",
        my_analysis: ""
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
        image: 'assets/images/Efficiency.png',
        documents: [{ title: 'l\'article interne', url: 'assets/documents/Measuring our efficiency.pdf' }],
        description: "Définition des indicateurs de l'efficacité de la production logicielle de l'entreprise autour de 4 axes principaux : la vitesse de production, la qualité de nos livrables, les cadences des équipes, la prédictabilité des livraisons.\n\nLe suivi de ces indicateurs est assuré via PowerBI (rapports non publics), exploitant de la donnée issue des outils de la chaine de production logicielle via des scripts python.",
        presentation: "",
        lancement: "",
        steps: "",
        results: {
          for_me: "",
          for_the_company: ""
        },
        stakeholders: "",
        next_steps: "",
        my_analysis: ""
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
        documents: [],
        description: 'Nombreux scripts de backoffice pour automatiser des tâches récurrentes: suppression de projets obsolètes (sonarqube), archivage automatique de repositories / contrôle des expirations de tokens (gitlab), alerting quotidien / hebdomadaire (respect des pratiques ISO27001, surveillance des environnements internes)...',
        presentation: "",
        lancement: "",
        steps: "",
        results: {
          for_me: "",
          for_the_company: ""
        },
        stakeholders: "",
        next_steps: "",
        my_analysis: ""
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
        documents: [{ title: 'l\'article interne', url: 'assets/documents/ISO27001.pdf' }],
        description: 'Accompagnement des équipes dans la mise en place des pratiques de sécurité nécessaires pour obtenir la certification ISO 27001.\n\nDéfinition des objectifs, des pratiques et des outils à mettre en place : gestion des risques, des vulnérabilités, des configurations, des changements. Déploiement et contrôle des pratiques de sécurité, adaptations du processus de développement et formation des développeurs. Participation aux audits internes et externes, suivi des actions correctives et préventives.',
        presentation: "",
        lancement: "",
        steps: "",
        results: {
          for_me: "",
          for_the_company: ""
        },
        stakeholders: "",
        next_steps: "",
        my_analysis: ""
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
        image: 'assets/images/volatileEC2.png',
        documents: [{ title: 'le dépôt', url: 'https://github.com/aubertaa/volEC2/' }],
        description: 'Environnement pédagogique en InfraAsCode utilisé pour la formation des alternants aux pratiques et outils de la CI et DevOps. Déploiement d\'une infrastructure de développement logiciel en un clic.',
        presentation: "",
        lancement: "",
        steps: "",
        results: {
          for_me: "",
          for_the_company: ""
        },
        stakeholders: "",
        next_steps: "",
        my_analysis: ""
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
        documents: [],
        presentation: "Hit-maker est un outil de génération de données de tests simulant des flux de données réalistes. Les données sont utilisées par les équipes de développement pour les phases de R&D, développement et tests. Ces envois de données 'intelligents' permettent de ne pas utiliser de données clients réelles, et de ne pas dépendre de jeux de données statiques qui seraient trop figés et peu réalistes. La conformité RGPD de l'activité de l'entreprise est ainsi respectée.",
        lancement: "Les pratiques de test s'étendent dans l'entreprise et l'usage des environnements internes est devenu une étape incontournable dans le cycle de développement. Certaines équipes utilisent des données de test figées, jeux de données statiques qui ne sont pas toujours représentatifs des données réelles et ne sont pas forcément activement maintenues. D'autres équipes procèdent à des envois de données spécifiques pour certains tests mais ces données ne suffisent pas à 'activer' l'ensemble des fonctionnalités que l'entreprise propose. J'ai donc décidé de mettre en place un outil de génération de données de tests aléatoires, qui permettrait de simuler des flux de données réalistes, de manière à ce que les équipes puissent tester l'ensemble des fonctionnalités de l'application, sans avoir à dépendre de données réelles et sans avoir à maintenir des jeux de données statiques.",
        steps: "La première étape a été menée conjointement avec un collège, alors en charge de certaines présentations fonctionnelles de démonstration à de potentiels futurs clients. Nous avons constaté que nos besoins pouvaient converger : disposer de données complètes (au sens de la complétude) et réalistes, lui pour des démos client et moi pour les besoins de test et de R&D. Nous avons donc allié nos forces pour faire naître le hit-maker.\n\n\n\nLa contribution de mon collègue a été riche au niveau du contenu des données, leur définition métier, leur modélisation et la génération de leur contenu. Pour ma part, j'ai assuré le développement, en python de la mécanique d'envoi elle-même. De nombreux challenges se sont présentés, parmi lesquels la reproduction d'une saisonnalité (quotidienne, hebdomadaire, annuelle) des données simulées, sans pour autant générer des schémas qui se reproduisent simplement au cours du temps. Les algorithmes permettant ces simulations sont assez complexes et ont nécessité de nombreux ajustements pour être réalistes. La simulation de cas d'usage réalistes, simulant un internaute véritable qui dispose de quelques périphériques (tablette, ordinateur, mobile par ex) et qui accède à un ensemble de sites Web et procède à des visites cohérente a également été un challenge. Pour ne pas subir le poids de régressions éventuelles, j'ai fait le choix d'investir largement dans des tests unitaires, mais aussi des tests d'intégration très fournis, avec une couverture de plus de 98% des modules métier de l'application. L'architecture de code est pensée pour être maintenable et testable facilement.\n\n\n\nJe pratique régulièrement des évolutions et ces choix d'investissement me permettent de ne pas subir le poids de demandes de corrections urgentes. J'investis du temps dans ce produit pourtant à l'origine de toutes les données sur lequelles l'entreprise appuie sa phase de développement et de validation, seulement pour y ajouter des fonctionnalités qui me sont parfois demandées. La dernière fonctionnalité ajoutée est la simulation d'une nouveau type de données que nous allons prochainement permettre à nos clients de nous envoyer. Les équipes peuvent alors tester leurs implémentations et restitutions avec des données réalistes, avant même que les clients ne nous les envoient.\n\n\n\nLe hit-maker initialement exécuté dans Jenkins est aujourd'hui déployé dans un conteneur Docker et les exécutions sont orchestrées sous forme de cronjobs dans Kubernetes : j'ai implementé cette transition technique et un monitoring adapté qui permet de suivre les envois de données en continu et d'être automatiquement alerté en cas de défaillance. Cet outil bénéficie du déploiement continu et est déployé en production (interne) automatiquement si tous les tests passent avec succès.",
        results: {
          for_me: "Ce projet m'a permis d'implémenter un produit complexe en python, de le maintenir et de l'améliorer au fil du temps. J'ai pu investir dans des pratiques de tests unitaires python avancées et dans des technologies favorisant le déploiement continu (docker / kubernetes).",
          for_the_company: "J'ai pu contribuer à répondre à cette problématique d'entreprise qui était de disposer de données de test réalistes et complètes, sans pour autant dépendre de données réelles. Les équipes de développement utilisent aujourd'hui ces données pour leurs tests, c'est devenu tout à fait naturel alors que cette question était un véritable point de blocage il y a quelques années."
        },
        stakeholders: "Mes interlocuteurs sur le projet ont été les différentes équipes de développement qui me font part de leurs besoins de données supplémentaires et les équipes produit qui m'informent des nouveautés et m'aident à alimenter la mécanique au plus tôt pour représenter les nouveautés dans le cadre de la validation des nouveaux développements.",
        next_steps: "Le projet est constitué d'environ 1000 lignes de code aujourd'hui et est en régulière évolution, au gré des évolutions fonctionnelles de la solution et des besoins de données représentatives qui permettent d'actionner les nouveautés. La fusion avec le groupe Piano Software a ouvert de nouvelles perspectives et de nouveaux besoins en données de test. J'étends donc progressivement le périmètre de données simulées pour répondre à ces nouveaux besoins.",
        my_analysis: "Ce produit me semble essentiel pour servir la stratégie d'automatisation et d'accélération de l'entreprise, dans un respect total de la conformité RGPD. Je suis satisfait de l'outil que j'ai développé et je suis toujours prêt à le faire évoluer pour continuer à répondre aux besoins des équipes de développement."
      },
      {
        title: 'MaCaveAMoi',
        date: '2019',
        domaine: 'Développement',
        involved_competencies: [
          "QuasarJS",
          "Alexa Skills"
        ],
        image: 'assets/images/mcam.png',
        documents: [{ title: 'le site web', url: 'https://www.macaveamoi.fr' }],
        presentation: "MaCaveAMoi est un logiciel de gestion de cave en ligne : disponible sur le web, mobile (Android Play Store) et sur Alexa (assistant vocal Amazon). Il permet de gérer sa cave à vin, de suivre ses dégustations, de partager ses découvertes et de découvrir de nouveaux vins.\n\nLes outils proposés sont simples et répondent aux besoins des amateurs de vin. Le Front est codé en QuasarJS, le Back en NodeJS/PHP, et l'API Alexa en NodeJS.",
        lancement: "L'idée m'est venue en 2014, alors que je cherchais un outil simple pour gérer ma cave à vin. Ne trouvant pas d'outil qui me convenait vraiment, après en avoir essayé quelques-uns, j'ai décidé de créer le mien. J'ai commencé par des développements simple sous Joomla puis mes besoins de customatisation et de traitements spécifiques m'ont poussé à développer un outil complet et sur mesure.",
        steps: "Je commence le développement du site web en 2014, sous Joomla et je suis rapidement amené à coder moi-même un certain nombre de traitements pour lesquels je ne trouve pas de plugin adapté (partage automatique des étiquettes, des notes, des cotations, etc.). Je code certaines fonctionnalités directement en base de données, sous forme de triggers SQL et m'appuyant sur des vues et le modèle de données. Je développe également des scripts planifiés 'crons', qui me permettent de procéder à des traitements asynchrones et à l'extraction de statistiques spécifiques.\n\n\n\nAprès quelques années de développement 'loisir', je fais face, sans surprise à la problématique suivante : j'ai développé du code spécifique à différents endroits dans l'ensemble des fichiers 'joomla' et je subis des régressions à chaque mise à jour du framework et/ou de PHP, lorsque mon hébergeur décide d'en mettre à jour la version. Le passage en PHP 8 apporte son lot de difficultés...\n\n\n\nEn 2019, je décide donc de refondre complètement le site avec plusieurs objectifs : sortir de Joomla et autres CMS, passer sur une architecture plus moderne et plus évolutive, pouvoir produire une application mobile sans devoir tout recoder à nouveau et pourquoi pas en profiter pour apprendre une nouvelle technologie. Après quelques recherches, je décide d'opter pour le framework QuasarJS qui me semble cocher toutes les cases. Je conserve un backend en PHP exposant des routes API. Après quelques semaines de travail (sur mon temps personnel et à mes heures perdues), je mets en ligne la nouvelle version de MaCaveAMoi. Le site est disponible en deux langues, français et anglais, et est responsive. Le framework me permet aussi de faciler builder la version Android sous forme d'une application mobile.\n\n\n\nEn 2020, je décide de développer une skill Alexa pour permettre aux utilisateurs de gérer leur cave à vin par la voix. Les interactions vocales m'intriguent et un meetup auquel j'assiste me donne envie de tester l'implémentation d'une skill. Je découvre les outils de développement Alexa et je me lance dans le développement de la skill. Après quelques semaines de travail, l'implémentation de phonex associée au calcul des distances de Levenstein (algorithme qui définit la proximité phonétique de différents mots) pour les recherches phonétiques en base de données, la skill est en ligne et permet d'interagir avec sa cave à vin par la voix, de demander des informations sur un vin ou encore effectuer une sortie de cave en y ajoutant des notes de dégustation.",
        results: {
          for_me: "Je dispose aujourd'hui et avant tout, d'un service en ligne qui me permet de gérer ma cave à vin comme je le souhaite ! J'ai appris de nombreuses choses dans le cadre de ce projet : de l'implémentation d'une interface en VueJS (via le framework QuasarJS) à la gestion d'une architecture client/serveur, en passant par la diffusion d'une appli mobile Android. J'ai également découvert les outils de développement Alexa et j'ai pu me familiariser avec les contraintes liées à l'usage de la voix dans l'interaction homme-machine.",
          for_the_company: "-"
        },
        stakeholders: "J'interagis avec certains utilisateurs 'historiques' qui me font part de leurs impressions et besoins éventuels, mais je n'ai pas de réel 'client' pour ce projet. Je suis donc à la fois le client et le développeur, ce qui me permet une totale liberté.",
        next_steps: "J'ai en tête de développer ce service et de le promouvoir pour en faire un outil de référence pour les amateurs de vin, tant francophones qu'anglophones. J'ai aussi beaucoup d'idées d'évolutions et de fonctionnalités mais je n'ai pas vraiment le temps que je souhaiterais y consacrer.",
        my_analysis: "Je ne ressens pas aujourd'hui d'urgence à investir plus dans les développements de ce projet, qui constitue pour moi tout de même un point d'appui pour différents apprentissages et découvertes. Je suis satisfait de l'outil que j'ai développé et je ne perds de vue d'y investir plus de temps quand j'en aurai la possibilité."
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
        image: 'assets/images/CI.png',
        documents: [{ title: 'la présentation du bilan', url: 'assets/documents/2018 bilan with first steps.pptx' }],
        presentation: "J'ai sensibilisé les équipes de développement à l'importance d'investir dans la mise en place de l'intégration continue pour pouvoir ensuite accélérer. Les objectifs de cette mise en place étaient clairs : réduire les délais de livraison, augmenter la qualité des livrables, réduire les coûts de maintenance et améliorer la satisfaction des clients.",
        lancement: "J'ai défini en 2015 une stratégie de test claire et un processus de développement structuré pour permettre à l'entreprise d'améliorer son efficacité et la qualité de ses livraisons. En 2017, la mise en place d'un serveur centralisé Jenkins pour orchestrer des tâches marque le début de la mise en place à grande échelle de l'intégration continue. Les équipes de développement sont formées à l'utilisation de cet outil et à l'orchestration automatisée des tâches de build, test, validation, déploiement.",
        steps: "En 2016, plusieurs équipes ont un serveur Jenkins qui leur est propre, pour 'essayer' ce genre d'outils, sans stratégie globale et de façon isolée. En 2017, j'ai proposé de centraliser ces serveurs pour en faire un outil commun à toutes les équipes de développement. J'ai défini les premières étapes de la mise en place de l'intégration continue et je mets à disposition de chaque équipe des machines dédiés (runners) pour exécuter les tâches de build, de test et de déploiement. Je décide de ne pas fournir moi-même les scripts et méthodes à utiliser dans les premiers pipelines, je fais plutôt le pari de former chaque équipe à la mise en place de ces pipelines. Les équipes sont autonomes et développent une expertise certaine dans la mise en place de ces pipelines : c'est le début, par des actions concrètes et impliquantes pour les équipes, de la diffusion d'une culture DevOps dans l'entreprise.\n\n\n\nUne fois les principes fondamentaux compris et acceptés par le plus grand nombre, les premiers pipelines scriptés (scripted pipelines) apparaissent. Je suis référent sur les principent à appliquer, je produis les documentations et tutoriaux nécessaires, je m'implique en pair programming pour les mises en place et j'assure l'entretien et l'administration de l'outil.\n\n\n\nEn 2019, toutes les équipes disposent de leur propre bibliothèque de méthodes (jenkins shared library) qui répond exactement à ses besoins, alors que ces besoins sont très différents d'une équipe à une autre : technologies, langages différents, contraintes de déploiement différentes, etc... Les équipes sont devenues autonomes et peuvent déployer leurs livrables en production en quelques clics, sans intervention humaine. Les livraisons sont plus fréquentes.",
        results: {
          for_me: "Ce projet a été pour moi un véritable projet de partage : partage des mes compétences techniques par la formation et l'accompagnement des équipes mais aussi partage de ma passion pour l'automatisation et l'accélération des développements logiciels, dans un cadre le plus fiable et confortable pour les développeurs. J'ai pu étendre mes compétences en faisant face à des situations et contextes très variés, en m'adaptant à chaque équipe et en apprenant de chacune d'entre elles.",
          for_the_company: "Les livraisons manuelles sont devenues automatisées, le risque d'erreur humaine et le stress associé aux déploiements en production se sont transformés en réflexions sur les axes d'amélioration qui peuvent se présenter au quotidien."
        },
        stakeholders: "J'ai mené ce déploiement de l'intégration continue avec l'ensemble des développeurs de l'entreprise. Il a aussi fallu convaincre et sensibiliser les product owners et les managers sur le bien fondé de ces investissements.",
        next_steps: "Les étapes suivantes ont été (et sont encore) de renforcer cette culture DevOps et de viser des objectifs de déploiement continu lorsque cela est rendu possible par un outillage et des pratiques de tests suffisamment étendues et fiables. Ce n'est pas toujours possible aujourd'hui mais cela reste un objectif à atteindre.",
        my_analysis: "De \"nous n'avons pas le temps de mettre ça en place\" à \"Comment faisait-on avant ? on ne peut plus s'en passer\", le chemin parcouru me semble exceptionnel. Les énergies et le professionnalisme des équipes a permis de transformer totalement la façon de travailler et de produire des logiciels de l'entreprise, en seulement quelques années, sans jamais abandonner les clients et les livraisons de nouveautés."
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
        documents: [],
        presentation: "Ce projet traite de la mise en place de tests de non régression sur une API avec des remontées de bugs en production déjà importantes : fiabilisation des développements et des évolutions, correction et amélioration de l'existant.",
        lancement: "En arrivant chez AT Internet en 2015, je découvre rapidement que les équipes de développement ont des difficultés à fiabiliser les développements et les évolutions de l'API de données Analytics. Les remontées de bugs en production sont nombreuses et l'équipe a besoin de tests de non régression rapidement mais n'a pas les compétences pour les mettre en place. Il n'est pas question à ce moment de recruter un profil adapté pour cette mise en place. Je me propose donc pour l'implémentation de premiers tests, en axant les priorités sur les éléments les plus critiques ou sur lesquelles les anomalies sont les plus fréquentes. Je m'appuie sur les développeurs pour cette priorisation initiale, afin d'obtenir le maximum d'efficacité dans un délai court.",
        steps: "Je mets en place les premiers tests sous SOAP UI, outil que je connais et qui est alors une référence pour les tests d'API. Je définis les premiers cas de test et la question des données de test se pose naturellement assez rapidement. Des jeux de données sont donc définis et mis en place comme contexte de base pour l'exécution des tests. Je définis des plans de tests qui couvrent rapidement les usecases de 'premiers contacts' des clients avec l'API de données : validation des paramètres, aspects de sécurité, détection des combinaisons de params/options invalides. Les premiers résultats permettent de fiabiliser l'accueil de nouveaux clients par une première expérience plus confortable.\n\n\n\nLa question de la surcharge que génère la détection de ces anomalies est rapidement posée : l'effort de test (détection interne) engendre en effet le besoin d'investir dans un effort de correction (coût interne des défaillances), pour limiter l'impact client et ses conséquences sur l'entreprise (coût externe des défaillances).\n\n\n\nEn accord avec les développeurs, je mets en place un processus de priorisation des anomalies détectées et saisies dans l'outil interne (Redmine). L'équipe traite alors progressivement et selon un flux choisi les tickets que je crée, tout en assurant le traitement des tickets clients en priorité et le développement de nouvelles fonctionnalités autant que possible. Après quelques mois, la densité des anomalies détectées diminue.\n\n\n\nJe forme les développeurs de l'équipe au lancement des tests en autonomie et aide à l'analyse des anomalies. Les tests en place font alors partie intégrante du processus de validation des développements déclenché par Jenkins. Petit à petit l'équipe alimente elle-même la batterie de tests en nouveaux usecases mais cet effort reste limité par le temps disponible pour les développeurs.\n\n\n\nEn 2017, l'équipe de développement est renforcée par un profil de testeur qui prend en charge la maintenance des tests et leur extension.",
        results: {
          for_me: "La mise en oeuvre de tests automatisés de l'API de données m'a permis de partager vraiment les problématiques des développeurs, de conserver une implication très opérationnelle, au plus proche des équipes. Je suis convaincu que cette proximité est un ingrédient important de l'atteinte des bons résultats de ce projet. J'ai pu également renforcer mes compétences en tests d'API par la mise en place de scripts avancés, y compris pour valider la qualité et l'intégrité des données retournées aux clients.",
          for_the_company: "L'API de données a été stabilisée et les anomalies en production ont été fortement réduites. Les clients ont pu bénéficier d'une meilleure qualité de service et les équipes de développement ont pu se concentrer sur les évolutions et les nouvelles fonctionnalités. L'investissement dans les tests a été rentabilisé par la réduction des coûts de maintenance et des coûts de non-qualité.",
        },
        stakeholders: "J'ai travaillé dans le cadre de cette mise en place, avec les développeurs de l'équipe API, le Product Owner également pour les questions plus fonctionnelles mais aussi le Directeur Technique pour les aspects organisationnels et les équipes de support client qui m'ont apporté des informations précieuses et un suivi de l'évolution des retours clients.",
        next_steps: "Certaines défaillances architecturales ont été mises en évidence au cours de ce travail d'amélioration et de stabilisation de cette API. Elle a été refondue en 2020 pour donner naissance à une nouvelle version fondamentalement différente: les tests de non régression en place ont constitué une base solide pour la validation de cette nouvelle version. Les tests ont été réécrits pour s'adapter à la nouvelle version et les anomalies détectées sont désormais traitées en amont de la mise en production.",
        my_analysis: "Après des débuts pas évidents avec l'équipe car le constat était surtout que je créais du travail supplémentaire en détectant des anomalies, j'ai pu progressivement gagner la confiance des développeurs en les aidant à traiter ces anomalies et en les accompagnant dans la mise en place de tests de non régression. L'expérience individuelle de chacun a rapidement montré que les tests automatisés constituaient avant tout un élément de confort tout au long de la vie d'un produit.",
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
        documents: [{
          title: 'la stratégie de tests interne', url: 'assets/documents/Stratégie de tests.pdf'},
          {
            title: 'la politique de tests interne', url: 'assets/documents/Politique de tests.pdf'}],
        presentation: "Je décris ici mon rôle dans la définition, la mise en place et le suivi de la politique de tests chez AT Internet, leader mondial du Digital Analytics. Cette politique de test  ou 'Comment combiner pratiques de test et Agilité' est appuyée sur une stratégie de tests détaillée qui a permis de réduire de manière significative le nombre de régressions en production et d'améliorer la qualité des livrables.",
        lancement: "Juin 2015, salon du numérique à Bordeaux : l'entreprise AT Internet, leader européen de la mesure d'audience sur Internet, est en pleine croissance et doit faire face à des problèmes de qualité de ses livrables. Les régressions en production sont nombreuses, les coûts de maintenance sont assez élevés. Les équipes de développement sont passées récemment à l'Agilité, mais aucune pratique de test véritable n'est en place. Le succès du produit, bien réel, est le fruit du travail d'équipes de développement très compétentes, mais qui doivent faire face à des évolutions de plus en plus rapides et ne disposent pas d'autre moyen de validation que les tests manuels réalisés par les développeurs eux-mêmes.\n\n\n\nJe suis recruté sur la base d'une proposition de mise en place d'une stratégie de tests et d'actions court / moyen et long terme que je présente à l'entreprise, en détaillant les objectifs et risques associés. C'est le début d'une collaboration très riche, tant sur des aspects humains que techniques.",
        steps: "Ma première action est de mener un audit des pratiques de test en vigueur dans les équipes de développement, ce qui me permet aussi de faire connaissance avec les développeurs : à part quelques actions isolées, je découvre que rien n'est en place côté tests et que la culture même du test est très faible malgré des compétences certaines et un professionnalisme important chez les développeurs. Une formation aux développeurs, par un intervenant externe, a déjà été planifiée par la Direction : je réoriente le programme prévu pour mettre l'accent au maximum sur les tests unitaires et la qualité du code.\n\n\n\nJ'organise rapidement des formations par petits groupes sur les fondamentaux du test, la qualité logicielle et les normes qui y sont associées.\n\n\n\nAprès seulement quelques semaines, une politique de test d'entreprise est validée par le Directeur Technique : elle définit les objectifs que l'entreprise souhaite atteindre par la mise en place de tests et les indicateurs qui pourront permettre d'assurer le suivi de ces investissements, en pleine cohérence avec les méthodes Agile en place. Les modalités de mise en oeuvre sont décrites dans la stratégie de test que je produis : une double stratégie de tests, anticipative pour éviter de nouvelles régressions en production et réactive pour gérer au mieux les régressions déjà présentes en production. Cette dernière est validée par la direction et sa mise en oeuvre démarre progressivement.\n\n\n\nDe 2015 à 2018, je mène une série d'actions pour accompagner les équipes dans la mise en place de cette stratégie : formation, accompagnement, mise en place de tests et bases de l'intégration continue. Les premiers résultats sont visibles : les régressions en production diminuent, les coûts de maintenance baissent, la satisfaction des clients augmente. Les équipes de développement sont plus sereines et les engagements de livraison sont mieux tenus. Il reste cependant assez difficile d'engager des actions plus coûteuses, en parallèle de la production de fonctionnalités logicielles. La concurrence entre 'qualité' et 'fonctionnalités' est un sujet récurrent.\n\n\n\nEn 2018, après présentation d'une analyse de risques et d'aspect financiers du coût de la non-qualité, j'obtiens le soutien de la direction pour investir plus fortement pas la définition d'objectifs clairs de mise en place d'éléments structurants dans les équipes. Ces objectifs sont définis suivant 4 éléments principaux à atteindre en une année : le déclenchement d'un build automatisé avec exécution de tests unitaires à chaque modification de code (intégration continue), la construction et l'identification des livrables suivant le SemVer (Sementic Versioning), le déploiement automatisé des livrables produits sur un environnement interne et l'application du principe de promotion (respect du Build Once). Ces objectifs constituent principalement un cap clair pour les équipes et une obligation de moyens pour l'entreprise. Ces investissements, que j'accompagne activement auprès de chaque équipe, permettent de franchir un cap supplémentaire : disposer des bases d'une chaîne de build et de livraison automatisés.\n\n\n\nA partir de 2019, les équipes sont plus autonomes, les pratiques de tests et surtout une certaine culture de la qualité sont en place. Il devient plus rare d'opposer qualité et fonctionnalités même si la tentation est parfois grande de 'sauter' certaines étapes ou prendre certains raccourcis pour gagner du temps.\n\n\n\nEn 2021, la fusion avec Piano nous renvoie une image positive de notre process de développement et de la qualité de nos produits. Notre 'usine logicielle' est reconnue pour sa qualité et sa fiabilité. Les équipes ont une culture de la qualité bien installée et sont entrées dans une démarche d'amélioration continue proactive.",
        results: {
          for_me: "Ce projet a été passionnant pour moi : j'ai pu mettre en oeuvre mes compétences en tests logiciels et en qualité logicielle et mettre en application également mes certifications ISTQB. J'ai pu découvrir les enjeux de la qualité logicielle dans une entreprise de taille moyenne, en pleine croissance, et les difficultés à investir dans la mise en place des pratiques de qualité dans un contexte de production de fonctionnalités exigeant. Les aspects politiques et stratégiques ont été des éléments clés de la réussite de ce projet, parfois pas évidents mais qui pour sûr m'ont permis de grandir et d'avancer dans mes considérations et mes prises de recul.",
          for_the_company: "L'entreprise qui a cru en moi et m'a soutenu dans mes actions a pu cueillir les fruits de ces investissements : le nombre de bugs ouverts par les clients a été divisé par 10 entre 2016 et 2024, le ratio de temps passé en maintenance par les équipes a été fortement réduit et les équipes peuvent aujourd'hui se consacrer au développement de fonctionnalités de qualité."
        },
        stakeholders: "L'ensemble des employés du département technique ont été mes interlocuteurs mais également les représentants des autres départements qu'il a parfois fallu convaincre mais surtout à qui il était important d'expliquer pourquoi ces investissements étaient nécessaires. La direction a été un soutien constant et un interlocuteur privilégié pour la validation des actions et des orientations.",
        next_steps: "Là où les problématiques subies de qualité se sont transformées en recherche active d'efficacité de notre chaine de production logicielle, nous savons qu'il reste beaucoup de leviers à actionner pour aller encore plus vite, sans perte de qualité. Les prochaines étapes seront probablement de continuer à investir dans l'automatisation, de renforcer la culture de l'amélioration continue et de la qualité, de continuer à former les équipes et d'optimiser nos façons de faire à chaque fois que l'occasion se présentera.",
        my_analysis: "Avec au départ un potentiel conséquent qui ne demandait qu'à s'exprimer dans l'entreprise, le pilotage de cette stratégie de test a été un franc succès malgré tous les obstacles, petits ou grands, que j'ai pu rencontrer. Ce travail d'amélioration, d'industrialisation et d'accélération ne se termine pas, il est toujours en cours et je suis fier d'avoir pu y contribuer."
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
        documents: [],
        presentation: "Le projet consiste en la mise en place d'une mécanique de tests automatisés pour valider les fonctionnalités d'un Add-In Excel. L'objectif est de sécuriser les livraisons de nouvelles versions de l'outil de calcul statistique XLSTAT d'Addinsoft, qui est un Add-In Excel très utilisé dans le monde académique et professionnel.",
        lancement: "En 2013, l'entreprise AddinSoft est déjà largement reconnue pour son Add-In Excel XLSTAT, qui propose des fonctionnalités de calculs statistiques avancés directement intégrés dans Excel. L'entreprise souhaite renforcer la qualité de ses livrables et sécuriser les évolutions de son produit. Les tests sont réalisés manuellement par les experts statisticiens et prennent beaucoup de temps. La fiabilité des calculs et des fonctionnalités proposées est essentiel pour cet outil utilisé dans la recherche, l'industrie et des domaines de pointe exigeants.",
        steps: "Je commence par être formé aux différentes méthodes statistiques de premier niveau (moyenne, variance, écart-type, régression linéaire, ANOVA, analyse des correspondances, régressions linéaires etc...) pour comprendre les enjeux des tests à réaliser. Je découvre les fonctionnalités et les différents boutons et menus de l'Add-In Excel ainsi que les interactions possibles avec Excel. Je m'immerge dans le code VBA de l'Add-In pour prendre en main toute la partie liée au Ribbon proprement dit.\n\n\n\nJe démarre alors la phase d'implémentation des premiers tests automatisés. Je m'appuie sur les experts statisticiens pour les aspects métier : ils me fournissent les jeux de données et valident les résultats attendus que je peux intégrer en tant que références dans les tests de non régression que j'implémente. Les cas de tests sont implémentés sous forme de scripts VBA (macros) interprétés par Excel, dans des classeurs dédiés et exécutables en ligne de commande. Les résultats sont comparés aux valeurs de référence via du code VBA.\n\n\n\nLa phase d'industrialisation des tests et d'extension de la couverture fonctionnelle se poursuit : je mets en place des tests de non régression graphiques avec Sikuli, outil qui permet de simuler des interactions avec l'interface graphique d'Excel par reconnaissance de portions affichées à l'écran. L'utilisation graphique automatisée d'Excel est en route, ce qui permet de couvrir un périmètre jusqu'à lors non couvert !\n\n\n\nEn charge d'un petit parc de machines servant à l'exécution des tests, j'organise le déclenchement, depuis un serveur Jenkins que je mets en place, de l'exécution des tests sur différentes versions d'Excel (2003, 2007, 2010, 2013 (Win) mais aussi Excel 2011 (Mac OSX) et donc, sur différents OS. Je définis un processus de test et de traitement des anomalies structuré (voir image simplifiée) qui est validé par la direction et qui permet d'assurer les livraisons du produit dans de bonnes conditions de qualité.",
        results: {
          for_me: "Cette expérience m'a permis de découvrir les profondeurs d'Excel et la puissance du VBA mais aussi les difficultés liées à ces technologies pour la mise en place de tests automatisés. Je prends alors véritablement conscience que la stratégie de tests est un élément essentiel dans la maîtrise de l'activité d'une entreprise de développement logiciel. Cette stratégie doit tenir compte du contexte métier, technique et produit de l'entreprise et ne peut être portée telle quelle dans n'importe quel autre contexte.",
          for_the_company: "Les livraisons de l'entreprise ont été efficacement fiabilisées et le recrutement ultérieur de nouveaux développeurs pour étendre les équipes a pu se faire dans de bonnes conditions. L'outil est toujours aujourd'hui reconnu pour ses qualités et sa fiabilité, et est utilisé par des milliers de clients dans le monde entier.",
        },
        stakeholders: "Mes interlocuteurs principaux ont été les experts statisticiens et fondateurs de l'entreprise, puis les premiers développeurs recrutés, que j'ai formés à l'exécution, la maintenance et l'alimentation des tests automatisés que j'avais mis en place.",
        next_steps: "Mon rôle de Responsable Qualité chez Addinsoft m'a permis de confirmer par une expérience concrète ma capacité à accompagner une entreprise dans son approche stratégique du processus de test et du process de développement. Les compétences acquises en VBA m'ont permis également de développer un ribbon Excel à usage interne (ATTools) lors d'un hackathon interne, organisé chez AT Internet, quelques années plus tard. J'ai conservé de bonnes notions statistiques qui m'ont servi, par exemple, dans l'exploration efficace de différentes données plus tard dans mon parcours.",
        my_analysis: "Au délà des aspects techniques de l'implémentation de tests sur une solution de ce type, cette première expérience en tant que Responsable Qualité a marqué une étape importante dans mon parcours professionnel. J'y ai découvert les différents aspects de la définition d'un processus de développement et de test adapté, au niveau de l'entreprise ainsi que l'accompagnement et la formation des autres intervenants du développement logiciel."
      },
      {
        title: 'Automatisation de tests de non régression backend de stockage de données dans le cloud',
        date: '2009',
        domaine: 'Tests logiciels',
        involved_competencies: [
          "Membre d'équipe Agile",
          "Pratiques de tests logiciels"
        ],
        image: 'assets/images/galathee.png',
        documents: [],
        presentation:"Le projet consiste en l'implémentation initiale de tests de non régression avec l'objectif de sécuriser les livraisons d'un backend de stockage de données dans le cloud à portée internationale.",
        lancement:"Juillet 2008 : la direction de la startUp bordelaise Steek décide de renforcer la qualité de son coeur de solution, un backend de stockage de données dans le cloud. Les produits de l'entreprise permettent aux fournisseurs d'accès à Internet (FAI) de proposer les premières offres de stockage de données dans 'le cloud' à leurs clients (9Giga, Orange Cloud, SFR Cloud, Virgin par ex). La gamme est composée de différents logiciels : des clients lourds Windows/Mac OS, une interface Web, un 'drive' (point de montage local direct vers le stockage cloud), une 'portable App' (sur clé USB) qui contactent un backend qui accueillent les données, en assure le stockage et la mise à disposition, en gérant également tout ensemble de métadonnées associées (tags, labels, droits, liens de partages, déduplication etc...). Le backend, offrant déjà un large panel de fonctionnalités et en pleine expansion, souffre de trop nombreuses régressions et de bugs récurrents lors des mises à jour qui sont fréquentes.\n\nSur recommandation, je suis recruté dans ce contexte, avec pour mission de mettre en place des tests automatisés sur l'API exposée par ce backend. L'objectif est de pouvoir détecter le plus tôt possible les régressions introduites par les évolutions du produit, et ainsi mieux sécuriser les livraisons. Aucune stratégie n'est encore définie, un outil de test 'maison' Galathee a été récemment développé en interne en C++ et est proposé pour simuler quelques appels à l'API et vérifier les réponses reçues par des assertions simples.",
        steps: "Je commence par une immersion dans l'équipe de développement pour comprendre le métier global de la solution, le rôle des différents endpoints de l'API (qui n'est pas documentée) et je cherche à découvrir les contextes d'utilisation de chaque route (user/admin par exemple, type de données nécessaires...). Cette première phase permet également aux développeurs de l'équipe de redécouvrir certains aspects fonctionnels de la solution. La collaboration est lancée...\n\n\n\nJe démarre alors la phase d'implémentation des premiers tests. Je m'appuie sur les retours des développeurs, les bugs remontés par les utilisateurs, les évolutions en cours et les évolutions à venir pour définir mes priorités. Les cas de tests sont implémentés sous forme de fichiers XML interprétés par l'outil Galathee. Les versions candidates du backend sont déployées sur un environnement interne et je reçois le 'go' pour lancer les tests dont l'exécution est automatisée. J'analyse les résultats et remonte les anomalies détectées dans l'outil de ticketing interne (Mantis). Petit à petit, le périmètre (et le nombre) de tests devient très important et les temps d'exécution deviennent une vrai question, un frein même pour les livraisons : l'entreprise me dote d'une nouvelle machine beaucoup plus performante.\n\n\n\nEn parallèle les besoins de fonctionnalisés de l'outil Galathee se font sentir : il est nécessaire de pouvoir gérer différents types de données, des assertions plus complexes, de paralléliser les exécutions, d'améliorer les rapports en sortie, de disposer de possibilités de rejeu des tests en erreur... Je participe donc à la rédaction des spécifications de ces évolutions, en fonction de mes besoins. Le développement de l'outil est externalisé et je mène la recette complète des fonctionnalités lorsqu'une version m'est livrée (environ une fois par mois).\n\n\n\nEn 2010, plus de 100 000 assertions de tests sont implémentées, les tests demandent à être exécutés plus fréquemment, sans monopoliser mon poste : c'est l'arrivée du lancement de Galathee en ligne de commande sur des machines virtuelles prévues à cet effet. Je suis alors en charge de l'administration de ces environnements.\n\n\n\nL'entreprise est alors rachetée par F-Secure, entreprise internationale de sécurité informatique. Le passage aux méthodes Agile se fait et les tests automatisés, ainsi que la qualité du backend devenu beaucoup plus stable permettent d'intégrer un cycle de livraison itératif sans difficultés ni soucis de qualité. Les tests automatisés sont alors intégrés dans le processus de build et de déploiement continu (Jenkins). L'automatisation des environnements se poursuit, avec des moyens plus importants et les VMs se multiplient. Je continue à assurer l'implémentation et le suivi de la couverture fonctionnelle des tests au fil des évolutions du backend. J'ai alors posé les bases de mon expertise en tests automatisés, en Agilité et en gestion de la qualité logicielle.",
        results: {
          for_me:"J'ai découvert par cette expérience le monde des tests automatisés d'une API, des pratiques de non régression et les différents aspects de gestion de la qualité logicielle d'un produit à court/moyen/long terme. Cette expérience m'a également apporté ma première véritable reconnaissance en tant qu'expert du domaine, grâce à la direction technique de l'entreprise qui a cru en moi et m'a laissé carte blanche une fois l'objectif de qualité fixé.",
          for_the_company: "La startUp a pu bénéficier, par cette mise en place de tests automatisés, d'une meilleure qualité de ses livraisons, d'une meilleure réactivité face aux bugs et aux évolutions. La qualité du backend a été grandement améliorée, les livraisons sont devenues plus fréquentes et plus fiables. L'entreprise a pu croître très rapidement et acquérir une notoriété internationale auprès de grands F.A.I. avant d'être rachetée (signe de succès également) par un acteur majeur du marché de la sécurité informatique : F-Secure.",
        },
        stakeholders: "Mes interlocuteurs dans le cadre de cette mission étaient les développeurs du produit, mais aussi la direction technique. J'ai également été en contact avec l'entreprise (commerciaux, développeurs) qui assurait les évolutions de l'outil de test Galathee. Dans la deuxième phase, après l'acquisition de l'entreprise par F-Secure, j'ai été en contact avec les équipes de développement des différents produits qui se trouvaient en interaction avec notre backend et la direction Finlandaise de F-Secure, sur des aspects stratégiques liés à la qualité des développements.",
        next_steps: "Cette aventure s'est poursuivie pour moi, en tant que Chief QA sur des projets impliquant des équipes de différents pays. J'ai également été à l'initiative et au coeur de la mise en place de l'environnement d'intégration multi-produits qui a permis à l'entreprise d'assurer avec succès les livraisons de ses produits sur les différents marchés internationaux. Malheureusement, le choix a été fait en 2012 par la direction finlandaise de F-Secure de rapatrier les développements en Finlande, et de fermer le site de Bordeaux.",
        my_analysis: "Je garde un excellent souvenir de cette première expérience dans l'automatisation de tests logiciels. J'ai pu y découvrir les enjeux de la qualité logicielle, les pratiques de tests, les méthodes de travail en équipe et aussi l'Agilité. La grande équipe que nous étions est toujours en contact régulier, et je suis fier de voir que chacun a su rebondir et continuer à évoluer dans le monde du développement logiciel. Cette expérience m'a également permis de découvrir le monde des startUp, de la croissance rapide, des rachats et des évolutions stratégiques."
      }
    ];

  }

}
