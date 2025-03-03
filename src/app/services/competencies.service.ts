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
        definition: "L'intégration continue (CI) est constituée d'un ensemble de pratiques utilisées en développement logiciel consistant à vérifier à chaque modification de code source que le résultat des modifications ne produit pas de régression dans l'application développée. Parmi ces pratiques, on trouve principalement l'automatisation des builds et des tests.\n\nIl est important, pour garantir la qualité des livraisons et une bonne maîtrise du cycle de développement, d'identifier correctement les livrables par une politique de versionning adaptée. Une bonne gestion des livrables et des configurations sont également essentielles.\n\nLa livraison continue (CD) est une extension de la CI qui permet de déployer automatiquement les livrables en production, après validation des tests et des contrôles qualité. Cette pratique n'est possible que lorsque les livraisons sont fiables et de qualité, ce qui nécessite une CI bien définie, bien mise en place et bien utilisée.\n\nCet outillage est une des clés pour livrer vite et bien des incréments logiciels, en toute confiance et en toute sécurité.",
        facts: "Depuis de nombreuses années, je mets en place des pipelines de CI/CD dans les entreprises où je travaille, pour garantir la qualité des livraisons et la réduction des risques de régression.\n\nJ'ai commencé en 2009, chez Steek, avec la mise en place de tests de non régression automatisée d'une API comportant de nombreux endpoints et combinaisons de paramètres/options. J'ai fait mes premiers pas sous Jenkins à la même époque, avec mes premiers pipelines de builds automatisés.\n\nDe 2009 à 2012, chez F-Secure, j'ai répondu à des besoins grandissants d'automatisation et d'intégration sur des projets d'envergure internationale : automatisation des déploiements, de la mise à disposition d'environnements de test et des exécutions de tests d'intégration inter-équipes, pour des équipes situées dans différents pays (France, Finlande, Malaisie).\n\nEn 2013, chez Addinsoft, j'ai mis en place un gestionnaire de code source (SVN), un serveur d'intégration continue (Jenkins) et formé les équipes de développement à leur utilisation. J'ai défini un processus de validation continue des logiciels, ce qui a permis de fiabiliser les livraisons tout en accélérant leur rythme.\n\nDepuis 2015, je suis responsable, référent et formateur sur les questions afférentes à l'intégration et au déploiement continu. J'ai formé et accompagné les équipes de développement dans la mise en place de pipelines de CI/CD, et permis à chaque équipe de devenir autonome sur ces sujets.\nJ'enseigne aujourd'hui aussi ces pratiques en école (Bac +2 / Bac +3).",
        evaluation: "J'ai pu démontrer mes compétences dans ce domaine lors de mes différentes missions en entreprise, ce qui m'a permis de gagner la confiance de mes collègues et de mes supérieurs. Reconnu comme un expert sur le domaine et les pratiques CI/CD, je suis l'interlocuteur privilégié dans mon entreprise à ce sujet. Conscient que l'évolution et les améliorations doivent être constantes, pour répondre à des problématiques sans cesse changeantes, je suis toujours prêt à étendre et renouveler mes compétences en ce domaine. Je pense qu'il est important de ne pas se reposer sur ses acquis qui peuvent très vite devenir obsolètes.",
        certification: ""
      },
      {
        title: 'DevOps',
        category: 'Ingénierie Logicielle',
        logo: 'logos/devops.png',
        level: 5,
        definition: "Le mot DevOps peut englober différentes choses, d'un état d'esprit à un ensemble de pratiques, en passant par des outils et des méthodes de travail. Pour moi, c'est avant tout une culture de l'automatisation, de la collaboration entre 'Devs' et 'Ops', par les pratiques d'observabilité, le monitoring métier ou encore les pratiques S.R.E.(Site Reliability Engineering).\n\nIl est important d'automatiser au maximum, monitorer tout ce qu'on fait pour appuyer nos décisions et nos évolutions.\n\nSavoir où sont les points d'amélioration et faire des petites évolutions successives permet de garantir la stabilité et la performance de nos services, tout en progressant continuellement : c'est ça l'esprit DevOps !",
        facts: "J'ai découvert l'esprit DevOps en 2010, chez Steek, alors que j'étais membre actif (en tant que développeur de tests automatisés) d'une équipe de développement d'un backend logiciel. Nous subissions les critiques des équipes d'exploitation ('team hosting') qui étaient souvent confrontés à des problèmes de déploiement et de mise en production de nos livrables alors que nous pensions que nos livrables étaient vraiment de grande qualité et nos procédures de déploiement documentées correctement.\n\nJ'ai alors commencé à m'intéresser à ces problématiques, à chercher des solutions, à proposer de collaborer avec les équipes d'exploitation pour mieux comprendre leurs contraintes et leurs besoins. J'ai organisé une journée d'immersion pour notre équipe de dev, dans l'équipe 'hosting' : nous avons alors vraiment pris la mesure de leurs contraintes et du décalage entre leurs besoins réels et notre perception de ceux-ci. Ce fut le début d'une collaboration très productive mais aussi de liens humains importants, à l'inverse de l'opposition que nous ressentions tous jusqu'à lors.\n\nC'est depuis ce jour que j'applique au quotidien et que je diffuse autour de moi deux principes fondamentaux : 'Il est important de prendre connaissance des contraintes de l'autre avant de le juger' et 'Rien ne vaut une communication directe pour envisager d'avancer efficacement ensemble'.\n\nDepuis 2015, au delà de cet état d'esprit, je contribue activement au développement des deux grands axes des pratiques DevOps chez AT Internet : automatiser (les tests, les builds, les pipelines) et monitorer/observer (nos produits mais aussi notre cycle de développement).\n\nJ'enseigne aujourd'hui aussi cette culture et les pratiques associées en école (Bac +2 / Bac +3).",
        evaluation: "Je me sens complètement imprégné de la culture DevOps, avec une bonne connaissance des outils et des pratiques qui y sont souvent associées comme la conteneurisation, l'intégration continue, la recherche d'efficacité.",
        certification: ""
      },
      {
        title: 'FinOps',
        category: 'Ingénierie Logicielle',
        logo: 'logos/finops.png',
        level: 3,
        definition: "Le FinOps est une discipline assez nouvelle mais essentielle, il s'agit de suivre et maîtriser les coûts liés à l'activité de développement de logiciels. Cela inclut la gestion des coûts dans le cloud (AWS par ex.), leur optimisation et le dashboarding qui sert à piloter ces coûts.\n\nLe FinOps permet de garantir la pérennité de l'activité, de réduire les coûts inutiles et de garantir la rentabilité des projets.\n\nC'est un aspect très important de la gestion de projet et de l'activité de l'entreprise, qui doit être pris en compte dès le début du projet.",
        facts: "En 2017, chez AT Internet, l'entreprise a engagé une migration de ses systèmes vers le cloud AWS. Les premières factures ont montré que tout est disponible dans le cloud, avec pour simple effet de s'appliquer sur la facture en fin de mois ! J'ai été très rapidement impliqué pour assurer le suivi et la maîtrise des coûts sur les périmètres qui étaient les miens : les activités de test et l'outillage lié à l'intégration continue. Par la mise en place de dashboards adaptés et une montée en compétences sur les aspects financiers de la consommation de ressources cloud, j'ai pu réduire de plus de moitié les coûts initiaux constatés, en influant sur le type de machines utilisées, les périodes de consommation, les volumes de stockage, etc.\n\nDepuis 2018, j'assure le suivi des coûts des outils de la CI et des exécutions de tests dans l'entreprise, et je contribue à sensibiliser les équipes à ces suivis.\n\nJ'ai pu porter par exemple le coût de l'ensemble des machines de build/test à moins de 400$/mois pour servir une centaine de développeurs et de testeurs, en garantissant une qualité de service et une disponibilité des ressources très satisfaisante.",
        evaluation: "Je pense aujourd'hui être à l'aise sur le suivi des coûts d'utilisation des différents services dans le cloud AWS. Mes compétences sur le sujet pourraient se parfaire par la pratique sur d'autres clouds (Azure, GCP par exemple). Je suis conscient que la maîtrise des coûts est un enjeu majeur pour les entreprises. Les tarifs, typologies de machines, services disponibles évoluant en permanence, je suis prêt à continuer à me former et à me perfectionner sur ces sujets pour garantir la pérennité de l'activité de l'entreprise et la rentabilité de chaque projet.",
        certification: ""
      },
      {
        title: 'Gestion de projet',
        category: 'Ingénierie Logicielle',
        logo: 'logos/project_management.png',
        level: 4,
        definition: "La gestion de projet est une discipline qui consiste à organiser, planifier, coordonner et contrôler les ressources (humaines, matérielles, financières) d'un projet, dans le but de le mener à bien, en respectant les délais, les coûts et la qualité attendue.\n\nJe pense qu'il est important d'avoir une vision globale du projet, et il me parait essentiel de savoir transmettre le sens du projet à l'équipe, pour qu'elle adhère à la vision et s'investisse pleinement dans sa réalisation.\n\nLa communication, la transparence, l'écoute et l'adaptabilité sont des qualités essentielles pour un chef de projet, qui doit savoir fédérer les équipes autour d'un objectif commun, et les accompagner dans leur progression et leur montée en compétences.",
        facts: "En 2011 chez F-Secure, j'ai défini et accompagné avec succès la mise en place d'une plateforme d'intégration continue sur laquelle différentes équipes internationales livraient leurs composants respectifs pour les soumettre à des tests d'intégration automatisés. C'était une première dans l'entreprise qui souffrait de problèmes découverts après les livraisons en production, d'équipes ne travaillant pas ensemble au quotidien. \n\nEn 2012, j'ai mené le projet de déploiement et de formation en interne (Addinsoft) d'un serveur de gestion de code source (SVN). J'ai assuré la mise en place technique, la formation et le suivi des premières étapes d'utilisation de l'outil, ce qui a permis le succès de ce projet.\n\nEn 2018, j'ai conduit le projet de déploiement global des pratiques d'intégration dans l'entreprise : de la validation de l'investissement en ce sens au suivi de l'atteinte des objectifs, en passant par l'accompagnement et la formation des équipes. Ce projet a été une réussite.\n\nEn 2020, j'ai piloté le projet de mise en conformité à l'ISO 27001 chez AT Internet : de l'identification des actions de mise en conformité, à la participation aux audits de contrôle obligatoires, j'ai pu garantir la conformité de l'entreprise à cette norme par la définition d'un plan adapté et le suivi des actions à mettre en oeuvre. J'ai du, encore une fois, porter efficacement le sens et les enjeux de ce projet pour garantir l'adhésion des équipes et la réussite de la mise en conformité, en un délai très court (moins d'un an).",
        evaluation: "J'ai mené avec succès des projets d'envergure dans des contextes internationaux divers, avec des équipes multiculturelles et des contraintes de délais et d'investissement parfois peu confortables. Je pense avoir une marge de progression sur la gestion de projets car je n'ai pas mené de projet de plus grand envergure, au niveau global de l'entreprise par exemple, tous départements confondus. Je suis conscient que la gestion de projet est une discipline complexe, qui nécessite des compétences variées et complémentaires, que je suis prêt à acquérir et à développer pour mener à bien des projets toujours plus ambitieux.",
        certification: ""
      },
      {
        title: 'ISO 27001',
        category: 'Ingénierie Logicielle',
        logo: 'logos/iso.png',
        level: 4,
        definition: "L'ISO 27001 est une norme liée à la sécurité de l'information. Elle définit un cadre de management de la sécurité de l'information, qui permet de garantir la confidentialité, l'intégrité et la disponibilité des informations de l'entreprise.\n\nLa mise en place de cette norme nécessite de définir un système de management de la sécurité de l'information, de mettre en place des mesures de sécurité adaptées, de sensibiliser les collaborateurs aux enjeux de la sécurité de l'information et de réaliser des audits de sécurité réguliers.\n\nL'objectif de cette norme est de garantir la sécurité de l'information de l'entreprise, de protéger les données sensibles et de réduire les risques de fuite ou de perte de données.\n\nC'est un élément aujourd'hui essentiel (voire un prérequis) dans la relation de confiance avec les clients et les partenaires de l'entreprise, qui attendent des garanties sur la sécurité de leurs données.",
        facts: "Depuis 2021, je suis en charge de la mise en place initiale et du suivi de la conformité ISO 27001 du processus de développement / livraison chez Piano : 4-eyes principle, moindre privilège, revues de code croisées et analyses statiques de code (SAST).\n\nJe participe à l\'audit annuel de renouvellement de la certification de l\'entreprise et je suis officiellement porteur de certains risques (et des actions de mitigation) liés à notre cycle de développement, parmi lesquels : les risques de non conformité lors du processus de développement, le respect des pratiques collectives pendant les périodes de congés ou d\'absence.\n\nJe surveille de façon hebdomadaire, par le biais d'automatismes que j'ai mis en place, les non conformités potentielles détectées dans les pratiques de développement des équipes. J'analyse les causes et les impacts de ces non conformités, et je propose des actions correctives et préventives pour les résoudre.\n\nJe suis en charge de la formation des équipes aux pratiques ISO 27001 dans le développement",
        evaluation: "Je pense être totalement opérationnel sur la mise en place et le suivi de la conformité ISO 27001 dans le processus de développement / livraison de l'entreprise. Je pourrais parfaire ma compétence en ce domaine par une meilleure connaissance des aspects organisationnels et matériels de la gestion de la sécurité. Mon périmètre se limite en effet au développement logiciel et à la livraison des produits, alors que la norme ISO 27001 couvre un périmètre plus large, incluant les aspects organisationnels, humains et matériels de la sécurité de l'information, dont je ne suis pas en charge.",
        certification: ""
      },
      {
        title: 'Management',
        category: 'Ingénierie Logicielle',
        logo: 'logos/manager.png',
        level: 4,
        definition: "Selon moi, la mission principale d'un manager est de garantir le bien-être de ses collaborateurs, de les aider à progresser et à s'inscrire dans une dynamique d'amélioration continue.\n\nSi parfois cela peut passer par des décisions et actions difficiles ou délicates, je pense qu'il est important de toujours garder à l'esprit l'intérêt de l'équipe et de l'entreprise.",
        facts: "Je suis devenu manager en 2017, d'une équipe de développeurs de tests logiciels (une personne d'abord puis 2, puis 3 en 2019). Mes compétences en management m'ont permis d'évoluer rapidement : je suis actuellement manager de 22 personnes (3 testeur.se.s, 1 profil CI/DevOps, 4 profils Infra/DevOps, 13 développeur.se.s, 1 Product Owner).",
        evaluation: "J'ai pu démontrer mes capacités de management dans les missions qui m'ont été confiées : j'ai toujours été reconnu pour ma capacité à fédérer les équipes, à les motiver et à les accompagner dans leur progression. Les personnes dont je suis manager expriment des retours positifs sur mon management, et je pense être à l'écoute de leurs besoins et de leurs attentes. L'entreprise semble également satisfaite de mes compétences en management, puisqu'elle me confie aujourd'hui la responsabilité de 22 personnes.",
        certification: ""
      },
      {
        title: 'Management de tests logiciels',
        category: 'Ingénierie Logicielle',
        logo: 'logos/test_manager.png',
        level: 5,
        definition: "Le management de tests logiciels regroupe tous les aspects stratégiques et les décisions liées à la mise en place et à l'organisation des tests dans une entreprise de développement logiciel. Cela inclut la définition d'une politique de test, la mise en place d'une stratégie de test, la gestion des risques liés aux tests, l'évaluation des investissements en test, la supervision de la qualité des livrables, la formation et l'accompagnement des équipes de développement dans les pratiques de test.",
        facts: "Lorsque je me suis présenté chez AT Internet en 2015, j'ai procédé à un état des lieux et ai proposé un plan d'action court/moyen/long terme pour améliorer la qualité des livrables et la satisfaction des clients.\n\nCe plan a été validé et mis en place progressivement, avec des résultats très positifs pour l'entreprise et les équipes de développement : les tests automatisés mis en place assurent un 'filet de sécurité' devenu indispensable pour assurer nos livraisons. Les tests font aujourd'hui partie intégrante de la culture de l'entreprise et permettent de relever les défis qui se présentent plus sereinement.\n\nSur ma proposition, les pratiques de test font aujourd'hui partie intégrante des attendus des équipes de développement, et sont intégrées dans les processus de développement et de livraison des produits.\n\nJe suis également en charge de l'évaluation stratégique des investissements et des risques liés aux tests, à court, moyen et long terme.",
        evaluation: "Certifié en 2014, je suis totalement opérationnel sur la définition et l'implémentation d'une politique de test, d'une stratégie de test dans une entreprise de développement logiciel.\n\nC'est une compétence essentielle pour une bonne gestion des risques et des investissements en test, dépendant des contraintes et du contexte de l'entreprise. Je fais attention à me renouveller sans cesse pour m'adapter efficacement aux évolutions des pratiques, des outils de test mais aussi des ecosystème d'équipes, humains et organisationnels.",
        certification: 'ISTQB Test manager'
      },
      {
        title: 'Membre d\'équipe Agile',
        category: 'Ingénierie Logicielle',
        logo: 'logos/agile_team_member.png',
        level: 5,
        definition: "Le membre d'équipe Agile est un contributeur au développement logiciel, qu'il soit développeur, testeur, analyste, etc. Il participe à la définition et au développement de produits logiciels. Il est impliqué dans les différentes cérémonies Agile (daily stand-up, sprint planning, sprint review, sprint retrospective) et contribue à la livraison de valeur incrémentale à chaque itération (sprint). Il partage la responsabilité de la qualité des livrables avec les autres membres de l'équipe et contribue à l'amélioration continue des pratiques de développement.",
        facts: "J'ai découvert l'Agilité chez F-Secure, en 2010 alors que j'étais développeur de tests automatisés dans une équipe de développement. J'ai alors expérimenté les pratiques de l'Agilité (mêlée quotidienne, sprint planning, sprint review, sprint retrospective) mais j'ai surtout développé le sentiment de responsabilité partagée avec les autres membres de l'équipe, de devoir prendre des engagements et les respecter sur chaque itération, pour garantir la livraison de valeur à nos clients.\n\nJ'ai pris part ensuite, en 2011-2012, à la vie de deux autres équipes, au fil des évolutions des besoins dans l'entreprise.",
        evaluation: "Par mon expérience en tant que contributeur actif dans des équipes Agile, j'ai pu démontrer mes compétences dans ce domaine, qui me permettent aujourd'hui de mieux comprendre les enjeux et les contraintes des équipes de développement, et de mieux les accompagner dans leur progression et leur montée en compétences. Je pense être totalement opérationnel sur les pratiques et les travers de l'Agilité, dans la multitude de contextes et de déclinaisons qui peuvent se présenter.",
        certification: ""
      },
      {
        title: 'Pratiques de tests logiciels',
        category: 'Ingénierie Logicielle',
        logo: 'logos/test_automation.png',
        level: 5,
        definition: "Les pratiques de test logiciel sont vastes : du respect de la stratégie de tests de l'entreprise à l'implémentation de campagnes de test, l'écriture et l'exécution de tests logiciels automatisés en passant par le choix d'outils de test en fonction des contextes projets.\n\nLa priorisation, l'évaluation des risques et la détection au plus tôt des régressions sont des points clés pour moi dans la mise en place de tests automatisés.",
        facts: "J'ai défini mes premiers plans de tests et implémenté mes premiers tests logiciels automatisés en 2008, chez Steek, avec la mise en place d'environ 90 000 assertions dans des cas de test d'API en deux ans. L'outil utilisé était 'maison' (Galathee), j'en assurais la roadmap en fonction de mes besoins fonctionnels.\n\nEn 2010, chez F-Secure, j'ai mis en place de nouveaux tests automatisés pour moi : des évaluations de performance et de charge avec JMeter et Neoload. Ces tests m'ont permis d'exprimer des recommandations de configurations optimales (RAM/CPU) et de scaling à l'équipe en charge des infrastructures pour répondre au mieux aux problématiques de charge et de performance du produit. \n\nEn 2013, chez Addinsoft, j'ai mis en place des tests automatisés de non régression sur les interfaces graphiques des logiciels de la suite XLSTAT, avec Selenium, Sikuli et des scripts VBA 'maison'. Ces tests m'ont permis de garantir la qualité des livraisons et de réduire efficacement le nombre de régressions.\n\nDepuis 2015, je suis responsable, référent et formateur sur les questions afférentes aux pratiques de test logiciel. J'ai formé et accompagné les équipes de développement dans la mise en place de tests automatisés.\n\nJ'ai également formé les développeurs de test de l'entreprise, qui ne disposaient pas de toutes les compétences requises, ce qui est très courant dans le domaine, faute de formation initiale disponible (le plus courant est de recruter des développeurs et de les former au test logiciel ou des testeurs 'manuels' qu'il faut former au développement).\n\nJ'enseigne aujourd'hui les pratiques de tests logiciels en école (Bac +2 / Bac +3).",
        evaluation: "Certifié en 2015, j'ai pu démontrer mes compétences dans ce domaine lors de mes différentes missions en entreprise. Je pense être totalement opérationnel en ce domaine et je cherche à maintenir mes connaissances à jour, dans un domaine en évolution constante.",
        certification: 'ISTQB Fondation'
      },
      {
        title: 'Product Owner',
        category: 'Ingénierie Logicielle',
        logo: 'logos/product_owner.png',
        level: 4,
        definition: "Le Product Owner est le représentant des clients et des utilisateurs finaux au sein de l'équipe de développement. Il est responsable de la définition et de la priorisation du Product Backlog, de la validation des livrables et de la garantie de la satisfaction des clients et des utilisateurs finaux.\n\nJ'aime bien l'expression anglophone qui décrit le Product Owner comme à la fois le 'Goal Donor' et le 'Gold Owner' : il est celui qui définit les objectifs et qui en garantit la valeur.",
        facts: "De 2010 à 2013, j'ai participé à des interactions directes avec différents Product Owners, cela m'a permis d'acquérir une bonne connaissance de ce rôle en Agilité.\n\nDepuis 2015, j'ai des interactions régulières avec les Product Owners de l'entreprise, dans le cadre de la stratégie de test des différents projets qu'ils portent. Cette relation m'a permis de ressentir de plus près les contraintes d'équilibre entre risques et investissements qui sont les leurs.\n\nJe suis actuellement, et depuis plusieurs années (2018), en charge de la gestion, de l'alimentation et de la priorisation du Product Backlog du périmètre CI / Outils internes de l'entreprise : j'anime grooming et refinements qui permettent d'évaluer la valeur ajoutée, l'urgence et la complexité de chaque développement.\n\nMa collaboration en tant Product Owner du périmètre CI avec l'équipe permet de garantir des livraisons régulières de valeur à nos clients : les membres des équipes de développement de l'entreprise.\n\nDepuis 2024, je suis également manager d'un Product Owner ce qui me donne encore un angle de vue différent sur ce rôle.",
        evaluation: "Je me sens en bonne connaissance des attendus du rôle de Product Owner dans le processus Agile. Je pourrais étendre mes compétences par la pratique de ce rôle dans un contexte plus large, en dehors du périmètre CI / Outils internes de l'entreprise, comme par exemple pour mener à bien un projet client, en collaboration avec une ou plusieurs équipes de développement.",
        certification: ""
      },
      {
        title: 'RGPD',
        category: 'Ingénierie Logicielle',
        logo: 'logos/rgpd.png',
        level: 5,
        definition: "Le RGPD (Règlement Général de Protection des Données) est un règlement européen qui encadre la protection des données personnelles des citoyens européens. Il définit les droits des individus sur leurs données personnelles, les obligations des entreprises qui collectent et traitent ces données, et les sanctions en cas de non respect de ces obligations.\n\nLe RGPD impose aux entreprises de mettre en place des mesures de protection des données personnelles, de garantir la confidentialité, l'intégrité et la disponibilité des données, de respecter les droits des individus sur leurs données, et de notifier les autorités en cas de violation de données.\n\nLe RGPD est un enjeu majeur pour les entreprises qui collectent et traitent des données personnelles, car il garantit la confiance des individus dans le traitement de leurs données et évite les risques de sanctions financières et de réputation en cas de non respect des règles.",
        facts: "Je supervise depuis 2020, le respect du cadre règlementaire en vigueur dans le cadre des activités de test et de développement. Cela consiste principalement en la protection des données personnelles dans notre produit et nos pratiques (données client / intégrité / complétude / rétention / consentement éclairé / finalités).\n\nEn 2020, j'ai implémenté une mécanique d'envoi de données 'maison' (en python) à destination des activités de test et de développement de nos produits. Ces données permettent de ne pas utiliser des données d'internautes réels à des fins de test et ainsi garantir une complète conformité avec le RGPD, tout en permettant aux développeurs d'actionner l'ensemble des fonctionnalités des produits logiciels de l'entreprise en bénéficiant de données réalistes.",
        evaluation: "Le sujet des données de test m'a toujours intéressé, et je pense être totalement opérationnel sur le respect du RGPD dans le cadre des activités de test et de développement. Malgré les points de vue parfois divergeants de mes interlocuteurs sur le sujet, je suis parvenu à démontrer la pertinence de l'usage de données 'simulées' qui atteignent un niveau de réalisme très satisfaisant qui permet de garantir la qualité des tests, tout en respectant la confidentialité et l'intégrité des données des internautes et des clients.",
        certification: ""
      },
      {
        title: 'Scrum master',
        category: 'Ingénierie Logicielle',
        logo: 'logos/scrum_master.png',
        level: 5,
        definition: "Les différents aspects du rôle de Scrum Master (accompagnement, coaching, soutien des pratiques d'amélioration continue, suivi des indicateurs Agile (vélocité, burndowns, WIP, cycle time, lead time)) me paraissent essentiels pour garantir la bonne marche de l'équipe et la livraison de valeur.\n\nCe rôle parfois méconnu, souvent mal compris, est pourtant essentiel dans une équipe Agile. Le Scrum Master est le garant de la bonne application des pratiques Agiles, de la cohésion de l'équipe, de la résolution des conflits et des problèmes, de la communication et de la transparence. Il est le facilitateur des cérémonies Agile (daily stand-up, sprint planning, sprint review, sprint retrospective) et le garant de la qualité des livrables mais aussi la personne suscitant au quotidien la proactivité et le professionnalisme de chaque membre de l'équipe.",
        facts: "J'ai été membre d'équipe Agile, de 2010 à 2013, accompagné et coaché par un Scrum Master très expérimenté. J'ai alors pu découvrir l'importance de ce rôle à la fois au service des autres mais aussi à l'action pour entretenir et développer la proactivité de chacun.\n\nEn 2012, j'ai été moi même Scrum Master d'une équipe de 7 personnes, ce qui m'a permis de totalement valider l'importance de ce rôle et le travail à fournir pour l'accomplir efficacement.",
        evaluation: "Certifié en 2011 (CSM), je connais bien la mission du Scrum Master, tant pour avoir été moi même accompagné par un Scrum Master expérimenté que pour avoir exercé ce rôle. Si certains pensent que le rôle se limite principalement à l'organisation de cérémonies et de réunions, je sais qu'il s'agit d'un rôle bien plus complexe et essentiel pour garantir la bonne marche de l'équipe et la livraison de valeur.",
        certification: 'CSM'
      },
      {
        title: 'Alexa Skills',
        category: 'Langages/frameworks',
        logo: 'logos/alexa.png',
        level: 3,
        definition: "Alexa est l'assistant vocal intelligent développé par Amazon. Il permet aux utilisateurs d'interagir avec des appareils connectés par la voix, en utilisant des commandes vocales pour effectuer des tâches, poser des questions, écouter de la musique, contrôler des appareils domotiques, etc.\n\nLes 'skills' Alexa sont des applications vocales qui permettent d'étendre les fonctionnalités de l'assistant vocal en ajoutant de nouvelles fonctionnalités et de nouveaux services. Les développeurs peuvent créer des skills Alexa en utilisant le Alexa Skills Kit, un ensemble d'outils et de ressources fournis par Amazon pour développer des applications vocales pour Alexa.",
        facts: "En 2014, je me suis lancé dans le développement d'une skill Alexa, en lien avec mon site de gestion de cave en ligne, MaCaveAMoi. Cette skill permet aux utilisateurs d'interagir avec leur cave par la voix : gestion des stocks, sorties de cave par exemple.\n\nCette implémentation inclut différents aspects techniques : prise en main du Alexa Skills Kit, implémentation d'un algorithme 'phonex', des algorithmes d'évaluation de distance de Levenshtein pour permettre le traitement des demandes vocales via des requêtes SQL et des évaluations de correspondances phonétiques.\n\nCette skill a été très bien accueillie par les utilisateurs de MaCaveAMoi, qui ont apprécié la facilité d'utilisation et les fonctionnalités proposées.\n\nLa skill a été implémentée, accompagnée de ses tests unitaires, exemples de dialogues et de tests de validation de la qualité de la reconnaissance vocale. Les tests sont exécutés via le framework dédié 'bst' (bespoken tools).",
        evaluation: "La découverte du framework Alexa Skills Kit m'a permis d'atteindre un niveau acceptable pour assurer le développement en autonomie d'une skill Alexa. Je pourrais approfondir mes connaissances sur ce framework pour être plus à l'aise dans le développement de skills plus complexes et plus avancées, avec par exemple l'utilisation de devices proposant des contenus visuels.",
        certification: ""
      },
      {
        title: 'Angular',
        category: 'Langages/frameworks',
        logo: 'logos/angular.png',
        level: 3,
        definition: "Angular est un framework JavaScript développé par Google. Il permet de créer des applications web dynamiques et interactives en utilisant des composants réutilisables. Angular est basé sur le langage TypeScript, un sur-ensemble de JavaScript qui ajoute des fonctionnalités de typage statique et de programmation orientée objet.\n\nAngular propose une architecture basée sur des composants, des modules, des services et des directives, qui permet de structurer et d'organiser le code de manière modulaire et réutilisable. Angular offre également des fonctionnalités avancées comme le routage, la gestion des formulaires, la communication avec des API distantes, la gestion de l'état de l'application, etc...",
        facts: "Dans le cadre scolaire en 2024, j'ai développé des interfaces utilisateurs en Angular pour différents projets : Project Management Tool, Innotech Votes, Portfolio personnel. Ces interfaces devaient répondre à des besoins spécifiques (gestion de projets, vote électronique, présentation de compétences).\n\nJ'ai obtenu, sur ces créations, des retours très positifs de la part des évaluateurs, qui ont apprécié la qualité du travail fourni.\n\nCes projets m'ont permis de développer mes compétences en Angular, de découvrir les bonnes pratiques de développement front-end et d'acquérir une expérience concrète dans la création d'interfaces utilisateurs modernes et interactives.\n\nCes réalisations ont été accompagnées de tests unitaires et d'intégration, pour garantir la qualité du code et la fiabilité des fonctionnalités développées ainsi que de pipelines de CI/CD pour garantir la qualité des livraisons.",
        evaluation: "J'ai fait mes premiers pas récemment sous Angular, après le suivi de cours complets et riches en pratique. Je pense être opérationnel sur le développement d'interfaces utilisateurs en Angular, mais je pourrais approfondir mes connaissances pour maîtriser les aspects plus avancés du framework et être plus à l'aise dans des projets de plus grande envergure, dans un cadre professionnel par exemple.",
        certification: ""
      },
      {
        title: 'Java Spring Boot',
        category: 'Langages/frameworks',
        logo: 'logos/spring.png',
        level: 3,
        definition: "Java Spring Boot est un framework Java qui permet de créer des applications web et des services web de manière rapide et efficace. Spring Boot facilite le développement en proposant des fonctionnalités prêtes à l'emploi (auto-configuration, gestion des dépendances, intégration de serveurs d'applications, etc...) et en suivant les bonnes pratiques de développement (architecture MVC, injection de dépendances, inversion de contrôle, etc...). Spring Boot est basé sur le framework Spring, qui est un des frameworks Java les plus populaires pour le développement d'applications d'entreprise. La surcouche Spring Boot Security permet de sécuriser les applications web et les services web en implémentant par exemple des mécanismes d'authentification et d'autorisation.",
        facts: "J'ai procédé en 2024 au développement et à la maintenance de différents backends dans le cadre scolaire (Project Management Tool, Innotech Votes, Games Up).\n\nJ'ai obtenu, sur ces créations, des retours très positifs des évaluateurs. Ces créations m'ont permis de développer mes compétences en Java Spring Boot, de découvrir les bonnes pratiques de développement backend et d'acquérir une expérience concrète dans la création de services web sécurisés et performants.\n\nCes réalisations ont été accompagnées de tests unitaires et d'intégration, pour garantir la qualité du code et la fiabilité des fonctionnalités développées ainsi que de pipelines de CI/CD pour garantir la qualité des livraisons.",
        evaluation: "J'ai fait mes premiers pas récemment sous Java Spring Boot, après le suivi de cours complets et riches en pratique. Je pense être opérationnel sur le développement de backend dans ce, mais je pourrais approfondir mes connaissances pour maîtriser les aspects plus avancés du framework et être plus à l'aise dans des projets de plus grande envergure, dans un cadre professionnel par exemple.",
        certification: ""
      },
      {
        title: 'NodeJS',
        category: 'Langages/frameworks',
        logo: 'logos/nodejs.png',
        level: 4,
        definition: "NodeJS est un environnement d'exécution JavaScript. NodeJS permet de développer des applications web et des services web en JavaScript, en utilisant des modules et des packages disponibles sur le gestionnaire de paquets npm. NodeJS est basé sur une architecture orientée événements et non bloquante (asynchrone), ce qui le rend très performant pour les applications nécessitant une grande réactivité et une grande scalabilité. C'est un framework très populaire aujourd'hui, très développé dans des architectures microservices par exemple.",
        facts: "J'ai découvert NodeJS en 2015 chez AT Internet, alors que je cherchais un outil plus souple et plus moderne en remplacement de SOAP UI pour développer des tests automatisés d'API.\n\nEn 2016, j'ai utilisé NodeJS dans AWS pour coder des fonctions 'Lambda' permettant de mesurer les indicateurs de service (SLI) de notre collecte de données, en vue de valider le respect de nos engagements commerciaux (SLA).\n\nE 2019, j'ai développé un projet d'extraction et de suivi des dépendances d'autres projets NodeJS, lui même en NodeJS également. Ce projet m'a permis de mieux comprendre les mécanismes de gestion des dépendances en NodeJS et de garantir la cohérence et la fiabilité des dépendances utilisées dans les différents projets de l'entreprise.\n\nJ'ai moi même formé deux personnes débutantes à l'utilisation de NodeJS, mochaJS et Jest pour le développement de tests automatisés.",
        evaluation: "Je pense avoir une bonne connaissance de NodeJS et de ses possibilités. Je développe et maintiens en autonomie totale de nombreux projets en NodeJS, mais je pourrais approfondir mes compétences pour maîtriser des aspects plus avancés du framework. Je suis également intéressé par Deno, le successeur de NodeJS, qui apporte des améliorations significatives en termes de sécurité et de performances, comme l'annonce Ryan Dahl, fondateur de ces deux languages.",
        certification: ""
      },
      {
        title: 'Python',
        category: 'Langages/frameworks',
        logo: 'logos/python.png',
        level: 4,
        definition: "Python est un langage de programmation polyvalent, qui est utilisé dans de nombreux domaines : développement web, développement logiciel, data science, intelligence artificielle, etc... Python est apprécié pour sa simplicité, sa lisibilité et sa flexibilité. Python est un langage très populaire aujourd'hui, qui est utilisé par de nombreuses entreprises et développeurs pour créer des applications et des services de qualité. J'apprécie dans ce language la facilité de lecture et d'écriture, la richesse des librairies disponibles et la communauté très active qui permet de trouver rapidement des solutions à ses problèmes. Même s'il est souvent associé à des projets de data science, il est très polyvalent et peut être utilisé dans de nombreux domaines. Les contraintes de syntaxe qu'il impose sont un gage de qualité et de lisibilité du code.",
        facts: "Après de nombreux petits scripts, mon premier grand projet python a été l'écriture du 'hit-maker', en 2020 : un peu plus de 1000 lignes de code, une couverture en tests unitaires des modules métier supérieure à 95% (56% de couverture globale du projet). Ce projet sert aujourd'hui à la génération en temps réelle de données de test, simulant toute la variété métier de l'activité de l'ensemble de nos clients. Les algorithmes implémentés reproduisent également la saisonnalité qu'on peut constater dans les audiences réelles de sites web et applications mobiles, mais aussi les comportements de navigation et de consommation de contenus.\n\nDepuis 2021, j'ai développé différents outils d'alerting/monitoring en python, qui permettent de détecter et de signaler automatiquement des non respects de la conformité ISO du processus de développement, par l'appel aux APIs de nos outils de CI/CD (Sonarqube, Gitlab) et de gestion de projet (Jira). C'est aussi en python que j'ai codé les récupérations et traitements de données de ces outils (traitements parallèles via l'usage de Futures) pour les intégrer dans des tableaux de bord de suivi de la qualité de nos développements, de l'efficacité de notre usine logicielle.",
        evaluation: "Je me sens totalement à l'aise avec l'écriture de scripts en python et l'implémentation des tests unitaires qui y sont associés. Je pourrais approfondir mes connaissances pour maîtriser des aspects plus avancés du langage, comme la manipulation avancée du multithreading ou de datasets plus complexes.",
        certification: ""
      },
      {
        title: 'QuasarJS',
        category: 'Langages/frameworks',
        logo: 'logos/quasar.png',
        level: 4,
        definition: "QuasarJS est un framework basé sur VueJS qui permet de créer des applications web et mobiles multiplateformes. QuasarJS propose une architecture basée sur des composants réutilisables, des plugins et des directives, qui permet de structurer et d'organiser le code de manière modulaire et réutilisable. QuasarJS offre également des fonctionnalités avancées comme le routage, la gestion des formulaires, la communication avec des API distantes, la gestion de l'état de l'application, etc... Le framework me parait intéressant par les possibilités qu'il offre en termes de développement multiplateforme, avec un code unique pour plusieurs plateformes (web, mobile, desktop).",
        facts: "A la recherche d'un framework moderne pour la refonte du site web MaCaveAMoi en 2019 (anciennement sous joomla/PHP), j'ai découvert QuasarJS, un framework basé sur VueJS que je ne connaissais pas.\n\nJ'ai opté pour ce framework que je ne connaissais pas pour sa simplicité de prise en main et sa richesse en fonctionnalités. J'ai re-développé le site web MaCaveAMoi en QuasarJS (version actuelle), en utilisant les composants et les plugins fournis par le framework pour créer une interface utilisateur moderne et réactive. Le choix de ce framework m'a permis de générer l'application mobile Android MaCaveAMoi, en utilisant les fonctionnalités de compilation multiplateforme du framework pour générer des applications mobile natives à partir d'un code unique",
        evaluation: "Après une découverte et une prise en main appliquée de QuasarJS, je me sens à l'aise avec ce framework et j'ai développé une version complète de mon application web et mobile 'MaCaveAMoi'. Je pourrais approfondir mes connaissances pour maîtriser des aspects plus avancés du framework.",
        certification: ""
      },
      {
        title: 'Shell',
        category: 'Langages/frameworks',
        logo: 'logos/shell.png',
        level: 4,
        definition: "Shell est un langage de script qui permet d'automatiser des tâches système et d'interagir avec le système d'exploitation Unix/Linux. Shell est très utilisé dans l'administration système, le développement logiciel, le déploiement d'applications, la gestion des serveurs, etc... Shell est un langage très polyvalent, qui permet de réaliser des tâches simples comme des tâches complexes, en utilisant des commandes système et des scripts pour automatiser des processus et des opérations.",
        facts: "Je dispose de nombreux scripts shell qui me permettent de faciliter mon quotidien : génération de tokens de connexion aux services clouds, copies / synchros massives de fichiers, 'briques' utilisées dans les mécaniques de CI (déploiement, tests, exécution de commandes distantes...).\n\nJ'ai également développé une library complète de méthodes en shell pour faciliter un certain nombre d'interactions le cloud (utilisation du aws cli). Cette library contient aujourd'hui 57 fonctions spécifiquement implémentées pour abstraire certaines opérations récurrentes. Toutes ces méthodes sont testées unitairement via le framework ShellSpec, choisi pour sa simplicité de mise en oeuvre et ses possibilités de Mocking.",
        evaluation: "J'ai un usage quotidien et régulier du shell, pour automatiser des tâches système, des opérations de déploiement, des interactions avec le cloud AWS, etc... Je me sens à l'aise avec le shell. Je partage mes connaissances et mes scripts avec mes collègues pour les aider à automatiser leurs tâches et à gagner en efficacité. J'aide également à résoudre des problèmes rencontrés par les équipes dans l'écriture de leurs propres scripts. Je sais cependant que je pourrais étendre mes compétences en shell pour maîtriser des aspects plus avancés comme par exemple les différents contextes d'interprétation (bash, sh, zsh, ksh...) qui ont chacun parfois leur lot de petits mystères...",
        certification: ""
      },
      {
        title: 'Adaptabilité',
        category: 'Soft skills',
        logo: 'logos/adaptation.png',
        level: 5,
        definition: "L'adaptabilité est la capacité à pouvoir ajuster son comportement, ses actions, ses décisions en fonction des circonstances, des événements, des personnes et des environnements. C'est la capacité à s'adapter rapidement et efficacement à des situations nouvelles qu'elles soient complexes ou non. Elle permet de faire face efficacement à de nouveaux défis. Au delà des acquis, l'adaptabilité est une qualité qui permet de s'ouvrir à de nouvelles expériences, de s'enrichir de nouvelles connaissances et de développer de nouvelles compétences.",
        facts: "Mes premières expériences d'adaptation datent de mes débuts dans le monde professionnel, à partir de 2001. Entre 2001 et 2004, je me suis adapté à de nombreux contextes de 'petits boulots' étudiants dans des contextes très variés, avec entre autres : le travail en usine, la restauration, la champagnisation, la manutention, les pompes funèbres et bien d'autres...\n\nLe secteur des développements logiciels demande une adaptation constante : en 2004-2006, lors de mon volontariat internal en administration (VIA) je me suis très rapidement adapté au monde diplomatique et au fonctionnement de l'Ambassade de France en Turquie, pourtant aux codes très spécifiques et dans un pays étranger que je ne connaissais pas.\n\nEn 2008, je me suis adapté rapidement et je suis devenu référent expert en moins d'un an sur les questions de comptabilité/paye pour les clients de l'entreprise Apibat.\n\nEn 2010, j'ai été amené à m'adapter à un contexte de travail très différent, en intégrant une équipe de développement logiciel chez F-Secure, où j'ai dû apprendre de nouveaux langages, de nouvelles méthodes de travail et de nouvelles technologies, dans un contexte international et multiculturel.\n\nEn 2015, lors de mon arrivée chez AT Internet, je me suis adapté au contexte de l'entreprise, à ses outils, à ses méthodes de travail et à ses processus : j'ai commencé par un audit global des méthodes en place et problématiques existantes pour proposer rapidement des solutions adaptées et personnalisées.\n\nEn 2021, l'arrivée du groupe Piano a nécessité également de m'adapter à nouveau à un contexte de travail international. L'évolution de mes missions de management et de mon périmètre de responsabilités m'a demandé, depuis 2017, de m'adapter à différents profils humains et à des situations professionnelles variées, dans des contextes parfois délicats.",
        evaluation: "Je pense avoir de très bonnes capacités d'adaptation qui me permettent de m'intégrer rapidement dans une nouvelle équipe, de m'adapter à un nouvel environnement, de nouvelles méthodes de travail, de nouveaux outils ou processus ou encore à de nouveaux interlocuteurs.\n\nJ'ai pu le démontrer lors de mes différentes missions en administration ou en entreprise.\n\nUne phase d'audit et d'observation me permet de considérer les éléments et dynamiques en place pour pouvoir m'y adapter et y apporter une contribution la plus pertinente possible.",
        certification: ""
      },
      {
        title: 'Assertivité',
        category: 'Soft skills',
        logo: 'logos/assertivité.png',
        level: 4,
        definition: "Indispensable pour une bonne communication et la prise en compte du cadre propre de notre interlocuteur, l'assertivité est une notion très importante pour moi.\n\nL'assertivité consiste à savoir respecter l'autre tout en se respectant soi-même dans l'échange.\n\nDans le milieu professionnel, cela est très utile pour se retrouver rapidement entre collègues sur un terrain constructif et efficace. L'assertivité permet de s'exprimer clairement, de défendre ses idées et ses opinions, de poser des limites, de dire non, de demander de l'aide, de donner des feedbacks constructifs, de résoudre des conflits, etc... sans agressivité ni passivité.",
        facts: "J'ai découvert la notion d'assertivité en tant que telle en 2018, lors d'une formation en management et communication. J'ai alors pris conscience de l'importance de cette compétence pour une communication efficace et constructive en entreprise.\n\J'ai suivi, en 2019, une formation sur la communication non violente qui m'a permis d'étendre mes connaissances théoriques sur le sujet.\n\n En 2020, une nouvelle formation sur le management avancé, que j'ai suivie avec intérêt, a également abordé la notion d'assertivité en détail.\n\nDès 2020, je me suis intéressé à la Process Communication avec la lecture d'ouvrages de références comme 'Comment leur dire... : la process communication' de Gérard Collignon et 'S'entraîner à la Process Communication au quotidien' de Jérôme Lefeuvre qui m'ont permis de mieux comprendre les mécanismes de communication et de relation interpersonnelle.",
        evaluation: "Je pense avoir de très bonnes capacités d'assertivité qui me permettent d'exprimer et de défendre mes idées et mes opinions, de manière claire et respectueuse, en tenant compte des besoins et des attentes de mes interlocuteurs. J'espère étendre, avec les années, cette compétence par l'expérience de situations multiples et variées, pour être plus à l'aise dans des contextes complexes et délicats qui peuvent avoir tendance à me déstabiliser.",
        certification: ""
      },
      {
        title: 'Autonomie',
        category: 'Soft skills',
        logo: 'logos/autonomie.png',
        level: 5,
        definition: "L'autonomie est la capacité à mener seul une mission qui nous est confiée, voire même à définir soi même ses objectifs, une fois le cap, les enjeux ou la vision déclinée. Etre autonome ne signifie pas forcément travailler seul.\n\nJe pense en effet que l'autonomie, c'est aussi demander de l'aide quand on a besoin, pour avancer et progresser efficacement.",
        facts: "En 2007, je me suis formé seul à une nouvelle suite logicielle (Apibat) et aux pratiques de comptabilité / gestion des devis et facture / paye des employés. Je me suis également formé sur les aspects légaux de la loi TEPA et je suis devenu référent expert sur le sujet pour les clients de l'entreprise.\n\nEn 2008, j'ai abordé seul la mise en place de tests automatisés d'une API déjà en place, avec succès.\n\nMes différentes expériences ensuite (Addinsoft, AT Internet, Piano) et les retours de mes managers ont toujours souligné ma capacité à être autonome dans mes missions, à mener à bien des projets de bout en bout, à prendre des initiatives et à m'organiser efficacement pour atteindre mes objectifs.",
        evaluation: "Je sais mener un projet à bien, de la conception à la livraison, en passant par la mise en place des outils et des processus nécessaires.\n\nJ'ai pu le démontrer lors de mes différentes missions en entreprise, où j'ai toujours été reconnu pour la qualité de mon travail et mon autonomie dans l'accomplissement des tâches pour atteindre l'objectif fixé. je pense être également parfaitement autonome dans la gestion de mon temps et de mes priorités, ou encore dans la proposition de solutions innovantes et efficaces au service de l'entreprise.",
        certification: ""
      },
      {
        title: 'Esprit d\'initiative',
        category: 'Soft skills',
        logo: 'logos/initiative.png',
        level: 5,
        definition: "L'esprit d'initiative est pour moi la capacité à prendre des décisions et à agir de manière proactive, sans attendre que les choses se fassent d'elles-mêmes. C'est la capacité à proposer des idées et à envisager des solutions avant même que des demandes soient formulées. C'est savoir être à l'origine de l'innovation, de la disruption, de la recherche de solutions à des problèmes parfois même qu'on est le premier à identifier.",
        facts: "Parmi des nombreuses initiatives prises au quotidien, en voici quelques unes particulièrement notables.\n\nEn 2010, chez F-Secure, alors que l'entreprise rencontrait des difficultés lors de la livraison des produits de mon équipe en production, j'ai proposé un échange croisé entre membres de l'équipe de développement et de l'équipe 'hosting' alors en place, ce qui a permis de mieux se connaitre, partager nos problématiques et trouver des solutions efficaces pour collaborer. C'est à la même époque que Patrick Debois faisait naître le mouvement DevOps en Belgique.\n\nEn 2015, je me suis présenté spontanément chez AT Internet avec une proposition de stratégie de mise en place d'un processus de développement structuré afin d'atteindre des objectifs de qualité. Cette initiative a permis d'engager une collaboration toujours en cours. J'ai engagé de nombreuses actions dans l'entreprise depuis, parmi lesquelles : la diffusion de pratiques d'intégration continue, la formation active des développeurs aux pratiques de test, l'organisation d'évènements en équipe, la mise en place de nouveaux indicateurs de suivi de l'activité (métriques DORA), l'expérimentation de pratiques innovantes quant à la définition des objectifs individuels ou encore la mise en place d'environnements et de données de test pour répondre aux besoins de R&D de l'entreprise.",
        evaluation: "Je suis reconnu pour mon esprit d'initiative et ma capacité à proposer des idées et à être moteur pour aider l'entreprise à progresser. J'ai pu le démontrer lors de mes différentes missions en entreprise. Je sais également évaluer les risques et le coût d'engager ou non certaines actions : je ne me lance pas dans des aventures sans issue, je sais rester pragmatique dans mes choix et mes propositions.",
        certification: ""
      },
      {
        title: 'Polyvalence',
        category: 'Soft skills',
        logo: 'logos/polyvalence.png',
        level: 5,
        definition: "La polyvalence est la capacité à être compétent dans plusieurs domaines, à pouvoir assumer différentes tâches à tout moment et en fonction des besoins, à être capable de changer de rôle temporairement, le cas échéant. On parle souvent d'être un 'couteau suisse' et pouvoir répondre à des problématiques variées, de manière efficace et pertinente.",
        facts: "Mon parcours montre ma polyvalence : j'ai été tour à tour développeur, administrateur réseau, chef de projet, manager, formateur, consultant, expert technique, testeur logiciel etc... J'ai été amené à travailler sur des projets dans des contextes variés (gestion financière, stockage de données cloud, traitement de flux temps réel par ex.), avec des technologies et des méthodes de travail très diverses. Je suis prêt à exécuter de nomnbreuses tâches, même en dehors de mon périmètre initial, au service de l'entreprise et de mes collègues. Cela va de l'implémentation de code, la rédaction de documentation, le constitution de dossiers et formulaires RH, la définition de procesus, la formation aux apprenants, la gestion de l'environnement de travail et je suis intéressé par toute nouvelle tâche qui pourrait m'être confiée. Si je ne sais pas déjà le faire, je suis toujours prêt à apprendre et acquérir une nouvelle compétence.",
        evaluation: "Je me sens très polyvalent et en capacité complète de mener à bien des missions et tâches très variées. Je pense parvenir à gérer les risques de dispersion et de perte de focus que cela peut engendrer, en me fixant des objectifs clairs et en priorisant les tâches en fonction de leur importance et de leur urgence.",
        certification: ""
      },
      {
        title: 'Rigueur',
        category: 'Soft skills',
        logo: 'logos/rigueur.png',
        level: 5,
        definition: "La rigueur est pour moi la capacité à faire les choses bien, dans les règles de l'art et dans le respect du cadre et des procédures en place. C'est aussi le souci du détail, de la précision et du travail terminé, sans manquement ou approximation. La rigueur engendre la confiance et la garantie de la qualité du travail réalisé.",
        facts: "Dès 2008, la rigueur m'a permis d'aborder avec méthode et structure, la mise en place de tests automatisés depuis zéro sur une solution pourtant déjà large, en production, et soumise à de nombreux problèmes de régressions régulières.\n\nEn 2013, cette même rigueur m'a permis de mener avec succès, en quelques mois, l'accompagnement de l'industrialisation des développements chez Addinsoft par une stratégie adaptée de formation, déploiement et évolution progressive des processus en place.\n\nEn 2016, cette compétence m'a permis de convaincre la direction de l'entreprise d'investir progressivement dans les méthodes de travail des équipes, en présentant des faits et des chiffres précis sur les gains de qualité et de productivité que cela pourrait apporter.\n\nEn 2021, ma rigueur m'a permis de mener à bien la mise en conformité ISO 27001 de nos pratiques de développement, en un délai pourtant très court (moins d'un an).",
        evaluation: "Je suis rigoureux dans mon travail, j'aime que les choses soient bien faites, dans les règles de l'art.\n\nCela me permet de garantir la qualité de mon travail, de respecter les délais et les engagements pris, de ne pas laisser de place à l'imprévu.\n\nJe suis très attaché à la qualité de mon travail, et je m'efforce de toujours donner le meilleur de moi-même.\n\nCela m'a permis de gagner la confiance de mes collègues et de mes supérieurs, qui savent qu'ils peuvent compter sur moi pour mener à bien les missions qui me sont confiées. Mes évaluations annuelles soulignent régulièrement ma rigueur, qui est une qualité très appréciée par mes interlocuteurs.",
        certification: ""
      },
      {
        title: 'S.S.T.',
        category: 'Soft skills',
        logo: 'logos/SST.png',
        level: 4,
        definition: "Le S.S.T. est Sauveteur Secouriste du Travail : il est formé aux premiers secours en entreprise et peut également intervenir aux côtés de la sécurité civile pour assurer la protection des personnes lors d'évènements.",
        facts: "En 2021, je n'ai pas hésité à me porter volontaire pour suivre cette formation quand elle a été proposée par mon entreprise, car je pense qu'il est important de savoir réagir en cas d'urgence, pour soi-même, pour ses collègues, pour ses proches.\n\nCela m'a permis d'apprendre les premiers gestes en matière de secourisme, et de pouvoir intervenir efficacement en cas d'accident ou de malaise en entreprise. J'ai été certifié S.S.T. et le renouvellement de cette certification est prévu cette année.",
        evaluation: "J'ai obtenu la certification officielle mais je n'ai pas encore eu l'occasion de mettre en oeuvre ces compétences. Il me manque en effet l'expérience d'interventions réelles pour valider pleinement cette compétence de premiers secours. J'espère ne pas avoir à le faire en situation grave mais je suis prêt à intervenir si nécessaire.",
        certification: 'S.S.T. Niveau 1'
      },
      {
        title: 'Sens de l\'organisation',
        category: 'Soft skills',
        logo: 'logos/organisation.png',
        level: 5,
        definition: "Le sens de l'organisation est pour moi la capacité à structurer et à planifier son travail de manière efficace, à prioriser les tâches en fonction de leur importance et de leur urgence, à respecter les délais et les engagements pris, à être méthodique et rigoureux dans l'exécution des tâches, à anticiper les problèmes et à trouver des solutions pour les résoudre. Etre bien organisé est un gage de succès et de fiabilité dans le travail.",
        facts: "La variété de mes missions depuis mes débuts dans la vie professionnelle m'a amené à développer un sens de l'organisation très aiguisé. Je suis reconnu comme très bien organisé par mes pairs et par ma hiérarchie. Je respecte les délais et les priorités qui me sont fixés.\n\nMon organisation est également démontrée par la reprise de mes études,combinée à la vie de famille avec deux enfants de 7 et 12 ans, tout en assurant mes missions à plein temps en entreprise et des interventions en école pour donner des cours.",
        evaluation: "Je suis quelqu'un de très organisé, j'aime que les choses soient bien rangées, bien classées, bien ordonnées.\n\nCela me permet de gagner du temps, de ne pas me laisser déborder par les tâches à accomplir, de ne pas oublier des choses importantes.\n\nJ'évalue l'urgence, l'importance et la complexité des tâches à accomplir, pour les traiter dans le bon ordre, en respectant les délais et les priorités.\n\nCela m'a permis de mener à bien de nombreux projets, de respecter les engagements pris et les délais.",
        certification: ""
      },
      {
        title: 'AWS',
        category: 'Outils',
        logo: 'logos/aws.png',
        level: 5,
        definition: "AWS (Amazon Web Services) est un ensemble de services de cloud computing proposés par Amazon. AWS propose une large gamme de services cloud, qui permettent de déployer des applications, de stocker des données, de gérer des ressources informatiques, de sécuriser des environnements, de surveiller des performances, etc... AWS est un leader mondial du cloud computing, qui propose des services fiables, sécurisés et évolutifs, utilisés par des millions de clients dans le monde. La transition des infrastructures d'entreprise vers le cloud permet de mieux gérer l'élasticité des ressources et de choisir ses investissements sous réserve d'un suivi appliqué et avisé.",
        facts: "Certifié AWS Developer Associate en 2021, j'ai une utilisation professionnelle quotidienne des services AWS : infra as code (Cloudformation), messaging (SQS/SNS), aspects réseau et sécurité (VPC, IAM, Security Groups), stockage (S3, EBS), compute (EC2, Lambda), gestion des coûts (Cost Explorer, Budgets).\n\nJ'accompagne également les équipes sur leur usage de ces services.",
        evaluation: "A l'aise dans l'écosystème AWS pour un usage professionnel complet, je sais qu'il est important de se maintenir à jour compte de la vitesse d'évolution importante des technologies et services proposés. La maîtrise des coûts dans le cloud AWS requiert également une attention toute particulière.",
        certification: 'AWS Developer Associate'
      },
      {
        title: 'Cypress',
        category: 'Outils',
        logo: 'logos/cypress.png',
        level: 5,
        definition: "Cypress est un framework de test d'interface automatisé pour les applications web. Il permet de réaliser des tests de non-régression end-to-end, en simulant le comportement de l'utilisateur, en vérifiant le bon fonctionnement des fonctionnalités. L'outil s'est imposé ces dernières années comme une alternative sérieuse à l'historique Selenium. L'architecture simplifiée qu'il propose est bien plus simple à manipuler que les composants associés à Selenium (WebDriver, Selenium Server, etc...).",
        facts: "J'ai développé mes premiers tests automatisés sous Cypress en 2016, chez AT Internet, dans le cadre de la mise en place de tests de non régression pour l'application web principale de l'entreprise à l'époque : Explorer. Depuis, j'ai formé 6 personnes à l'utilisation de l'outil.\n\nJ'interviens également en école (Bac +2 / Bac +3) pour former les étudiants à l'utilisation de Cypress pour les tests d'interface.",
        evaluation: "Je pense avoir une certaine expertise de l'outil : je procède moi-même et j'accompagne les équipes sur l'implémentation de tests d'interface automatisés avec Cypress : simulation de parcours utilisateur, non régression fonctionnelle.\n\nJe guide aussi sur les évolutions à venir, les bonnes pratiques et les pièges à éviter.",
        certification: 'Advanced Cypress Professional'
      },
      {
        title: 'Datadog',
        category: 'Outils',
        logo: 'logos/datadog.png',
        level: 4,
        definition: "Datadog est une plateforme de monitoring et qui permet d'assurer l'observabilité des applications. L'outil se base sur les logs, traces et métriques qui lui sont transmises pour assurer en temps réel la surveillance des applications et des services. Datadog permet de détecter les problèmes, de les analyser et d'alerter rapidement, pour garantir la disponibilité et le bon fonctionnement des applications.",
        facts: "L'outil a été adopté en 2018 dans l'entreprise (AT Internet). J'ai alors été formé à son utilisation et j'ai rapidement pris en charge la création de dashboards spécifiques parmi lesquels : le suivi de l'activité métier des clients ou le suivi des exécutions de tests automatisés de non régression.\n\nJ'ai également codé en 2023, l'envoi de métriques personnalisées depuis les outils de la CI afin de pouvoir suivre les fréquences de déploiement et les métriques associées (DORA).\n\nJ'enseigne également un premier usage de l'outil et de ses fonctionnalités d'alerting (monitors) en école (Bac +2 / Bac +3).",
        evaluation: "Je me sens pleinement opérationnel sur l'utilisation de Datadog. J'en ai une pratique profesionnelle quotidienne. Les fonctionnalités proposées par l'outil évoluent rapidement et je pense qu'il est important de se maintenir à jour pour en tirer le meilleur parti. Je sais que je peux parfaire mes connaissances sur les aspects plus avancés de l'outil, en particulier quant à son administration elle-même.",
        certification: ""
      },
      {
        title: 'Docker',
        category: 'Outils',
        logo: 'logos/docker.png',
        level: 4,
        definition: "Docker est un outil de conteneurisation qui permet de créer, de déployer et de gérer des conteneurs logiciels. Les conteneurs sont des environnements isolés qui contiennent une application et toutes ses dépendances, pour garantir la portabilité et la reproductibilité des environnements de développement, de test et de production. Docker permet de simplifier le déploiement des applications et permet la promotion de livrables jusqu'en production, dans de très bonnes conditions de reproductibilité et de sécurité.",
        facts: "J'ai découvert docker en 2017 avec la création de mes premiers conteneurs pour un usage principalement local au départ. Les conteneurs me permettaient de facilement disposer d'outils différents commme python ou encore nodejs, dans des versions choisies, en assurant l'économie de l'installation de l'outil en lui même sur la machine hôte.\n\nEn 2020, j'ai créé ma première application totalement conteneurisée : le hit-maker. Cette application en python sert à la génération de données en temps réels à des fins de test pour les équipes de développement. Dans le cadre de ce même projet, j'ai également utilisé des conteneurs pour l'exécution des tests unitaires du projet.\n\nJe maintiens aujourd'hui différentes application internes qui sont exécutées sous le forme de conteneurs docker : sonarqube, gitlab, jenkins par exemple.\n\nEn 2024, j'ai également utilisé docker et docker-compose dans le cadre de projets scolaires comme Project Management Tool (PMT), ou encore Innotech votes.\n\nJ'enseigne également cet outil et les notions associées en école (Bac +2 / Bac +3).",
        evaluation: "Je pense être considéré aujourd'hui comme un expert de l'utilisation de docker. J'en ai un usage quasi quotidien et professionnel, y compris dans le cadre d'applications critiques pour l'entreprise. L'étendue de mes connaissances et de mes compétences me permettent de répondre à des besoins très variés et complexes, en matière de conteneurisation mais je sais cependant que certaines spéficités de l'outil me sont encore inconnues.",
        certification: ""
      },
      {
        title: 'GitHub',
        category: 'Outils',
        logo: 'logos/github.png',
        level: 4,
        definition: "Github est la plateforme de gestion de code source de Microsoft. C'est un standard utilisé par des millions de développeurs dans le monde pour collaborer sur des projets. L'outil héberge non seulement le code source mais propose aussi un ensemble de fonctionnalités comme la gestion des issues, les pull requests, les actions, les workflows, les pages statiques, etc... Github est un outil incontournable pour les développeurs et les équipes de développement.",
        facts: "Je suis propriétaire de 20 repositories dans Github, dont 8 sont publics. J'utilise l'outil dans le cadre de mes projets personnels et scolaires uniquement.\n\nJ'ai, dans le cadre scolaire en 2024, implémenté des pipelines complets de Github Actions pour valider, builder, et livrer différents projets",
        evaluation: "Je suis à l'aise dans l'utilisation de la plateforme Github. J'en ai une utilisation complète même si je n'ai pas eu l'occasion de l'utiliser dans un cadre professionnel. Je pourrais affiner mes connaissance par l'usage des github Pages et de github Actions plus variées.",
        certification: ""
      },
      {
        title: 'Gitlab',
        category: 'Outils',
        logo: 'logos/gitlab.png',
        level: 5,
        definition: "Gitlab est une plateforme de gestion de code source qui propose un ensemble de fonctionnalités pour les développeurs et les équipes de développement. L'outil permet de gérer le code source, de suivre les issues, de créer des merge requests, de définir des pipelines CI/CD, de gérer des secrets, de déployer des applications, etc... Gitlab s'est rapidement définie comme une 'plateforme DevOps' qui propose une intégration complète des outils et des processus de développement, contrairement à Github. Gitlab propose ainsi des fonctionnalités de gestion de projets plus fournies et plus intégrées que Github.",
        facts: "J'utilise Gitlab dans un cadre professionnel depuis mon arrivée chez AT Internet, en 2015. Je suis aujourd'hui et depuis 2016, administrateur de l'outil et référent sur son usage pour les équipes de développement. J'assure la veille sur différents aspects comme le renouvellement et les expirations de tokens utilisateurs, les fermetures de compte en cas de départ d'employés de l'entreprise mais aussi le suivi des coûts de l'outil et la gestion des montées de version régulières.\n\nJe m'occupe également de l'intégration de l'outil avec les autres outils du cycle de développement de l'entreprise (Jenkins, JIRA, Sonarqube par exemple).",
        evaluation: "Certifié GitLab Git Associate en 2021, j'ai une pratique complète et professionelle de l'usage de l'outil et de son administration. Je pense maîtriser complètement l'outil et être capable de répondre à des besoins très variés et complexes. Je suis également en mesure d'accompagner et de former les utilisateurs de l'outil.",
        certification: 'GitLab Certified Git Associate'
      },
      {
        title: 'Jenkins',
        category: 'Outils',
        logo: 'logos/jenkins.png',
        level: 5,
        definition: "Jenkins est un outil d'intégration continue open source qui existe depuis très longtemps (2004). C'est un outil de référence dans les entreprises pour automatiser les tâches de build, de test et de déploiement des applications. Jenkins permet de créer des pipelines CI/CD, de gérer des secrets, de déclencher des jobs à la demande ou de manière planifiée, de surveiller des métriques, de déployer des applications, etc... Jenkins est un outil très puissant et très flexible, qui permet de répondre à des besoins très variés et complexes.",
        facts: "J'ai fait mes premiers pas sous Jenkins chez Steek, en 2009 alors que l'outil s'appelait encore Hudson. On retrouve d'ailleurs ce nom dans un certain nombre de classes et dans les documentations de l'outil. J'ai alors mis en place mes premiers 'jobs jenkins' pour automatiser les builds et les runs de test dans l'équipe de développement dans laquelle je me trouvais.\n\nJ'ai étendu mes connaissances de l'outil chez F-Secure, de 2010 à 2012 et suis rapidement devenu référent sur son utilisation.\n\nEn 2016, j'ai formé les équipes chez AT Internet à son utilisation et j'ai accompagné les développeurs dans l'écriture des premiers 'scripted pipelines' en 2018, dans le cadre de l'atteinte des objectifs de mise en place de l'intégration continue de façon globale dans l'entreprise.\n\nJe suis aujourd'hui le plus expérimenté dans l'entreprise sur l'usage et l'administration de cet outil. Je contribue à la mise à disposition de scripts groovy, sous forme de 'Jenkins Shared libraries' pour faciliter l'écriture des pipelines par les équipes de développement.\n\nJ'ai produit une cinquataine de tutoriels à destination des développeurs pour assurer un bon usage et l'application de bonnes pratiques dans l'outil.\n\nJe forme également les étudiants en école (Bac +2 / Bac +3) à l'utilisation de Jenkins pour l'intégration continue.\n\nJe gère également activement les montées de version de l'outil et la gestion des plugins associés, ainsi que les secrets et le parc de runners dynamiques (sous AWS).",
        evaluation: "Je suis reconnu comme un expert de l'outil Jenkins dans l'entreprise. J'ai une pratique complète, professionnel et je bénéficie d'une expérience de plus de 15 ans sur son usage, ce qui me permet d'apporter une aide efficace et pertinente aux équipes de développement.",
        certification: ""
      },
      {
        title: 'JetBrains Suite',
        category: 'Outils',
        logo: 'logos/jetbrains.png',
        level: 4,
        definition: "La suite JetBrains est constituée d'un ensemble d'IDEs (Integrated Development Environment) qui couvrent un large spectre de langages de programmation et de technologies. Les IDEs de JetBrains sont reconnus pour leur qualité, leur ergonomie et leur richesse fonctionnelle. La suite comprend des outils comme IntelliJ IDEA, WebStorm, PyCharm et bien d'autres... Ces outils sont très utilisés par les développeurs dans mon entreprise.",
        facts: "J'ai commencé à utiliser JetBrains Pycharm en 2011, dans le cadre du développement d'un backend en python chez F-Secure (nom de code 'Morpheus'). J'ai tout de suite apprécié l'outil et son ergonomie.\n\nDepuis mon arrivée chez AT Internet, j'utilise alternativement et suivant les langages de programmation utilisés, IntelliJ IDEA (Java / groovy), WebStorm (nodeJS, TS) ou PyCharm (Python).",
        evaluation: "Je pense être un utilisateur avancé de la suite d'IDEs JetBrains, dans un cadre professionnel. Je sais également qu'il y a probablement un certain nombre de fonctionnalités ou de raccourcis clavier dont je n'ai même pas connaissance. C'est pour cela que je consulte les 'tips' au démarrage de l'application qui me permettent encore de découvrir des fonctionnalités insoupçonnées.",
        certification: ""
      },
      {
        title: 'JIRA',
        category: 'Outils',
        logo: 'logos/jira.png',
        level: 5,
        definition: "JIRA est un outil de gestion de projets et de suivi des tâches, qui permet de planifier, de suivre et de gérer les projets de développement logiciel. JIRA propose toutes les fonctionnalités utiles à la gestion de projet, y compris en Agilité : gestion des sprints et kankans, gestion du backlog, des tickets d'exploitation mais propose aussi des fonctionnalités personnalisables avec des champs custom et des workflows paramétrables en fonction des besoins de chaque équipe.",
        facts: "Mon entreprise Piano a transité vers JIRA en 2022 (après avoir utilisé Redmine pendant des années). J'ai directement été impliqué dans l'utilisation de l'outil, en tant que Product Owner du périmètre 'CI - Outils internes'. Je suis également utilisateur en tant que contributeur à des développements projet, en charge de l'exécution de certaines tâches associées à des EPIC de l'entreprise, comme par exemple pour la mise en place de la conformité ISO 27001.\n\nJe suis aujourd'hui administrateur de l'outil et je m'occupe de l'extraction de données depuis l'API de JIRA puis de leur traitement. Je mets ces données à disposition des équipes et de la direction, elles sont utilisées comme leviers de suivi et d'amélioration de notre efficacité.",
        evaluation: "J'ai une compétence complète de l'utilisation de JIRA en entreprise, tant dans son utilisation que dans son administration. Je pratique régulièrment les requêtes JQL et l'usage de l'API de l'outil.",
        certification: ""
      },
      {
        title: 'Kubernetes',
        category: 'Outils',
        logo: 'logos/kubernetes.png',
        level: 4,
        definition: "Kubernetes est un orchestrateur de conteneurs open source qui permet de déployer, de gérer et de scaler des applications conteneurisées. Kubernetes est un outil très puissant qui permet de gérer de manière automatisée l'exécution, la scalabilité et la disponibilité d'applications conteneurisées. Kubernetes est un outil très utilisé dans les entreprises qui ont adopté le cloud et les conteneurs pour leurs applications.",
        facts: "Kubernetes est arrivé en 2017 chez AT Internet. J'ai été formé à son utilisation et j'ai pris en charge la création de mes premiers pods et deployments un peu plus tard, en 2019.\n\nMes premiers déploiements dans le cluster 'k8s' de l'entreprise ont été réalisées dans le but de déployer des grids Selenium, avant que l'outil Cypress ne vienne totalement les remplacer. J'ai pris en main les notions de réservation de ressources (limits/requests) mais aussi les notions d'affinité et antiaffinités qui permettaient de répartir les charges et les différents nodes des grids selenium correctement dans le cluster.\n\nEn 2024, j'ai porté certaines mécaniques d'injection de données sous la forme de cronjobs Kubernetes qui s'exécutent régulièrement. J'assure leur monitoring au quotidien depuis Datadog.\n\nJ'utilise régulièrement kubectl pour interagir avec le cluster et je suis capable de déployer des applications de manière autonome.\n\nJ'enseigne également l'utilisation de l'outil en école (Bac +2 / Bac +3).",
        evaluation: "Je pense avoir de bonnes compétences sur l'usage de l'outil Kubernetes. J'ai une pratique régulière et professionnelle de l'outil, qui me permet de répondre à des besoins variés et complexes. Je n'ai cependant qu'une connaissance partielle de l'administration proprement dite du cluster et des middlewares associés.",
        certification: ""
      },
      {
        title: 'OWASP Dependency Track',
        category: 'Outils',
        logo: 'logos/dtrack.png',
        level: 4,
        definition: "Dependency Track est un outil open source de gestion des dépendances logicielles, qui permet de suivre les dépendances, les vulnérabilités et les licences des composants logiciels utilisés dans les applications. L'outil est assez récent et est mis à disposition par l'OWASP. Contrairement à son prédécesseur historique (Dependency Check), il permet des analyses asynchrones et régulières de projets qu'on y référence par l'envoi de fichiers SBOM (Software Bill Of Materials). C'est ainsi plus un serveur actif de gestion des dépendances que l'outil de scan de dépendances qu'était Dependency Check.",
        facts: "Après avoir déployé en interne l'usage de Dependency Check suite à un Hackathon en 2017, j'ai prototypé l'usage de Dependency Track en 2023. Début 2024, j'ai été en charge de déployer l'outil et de mettre à disposition tous les éléments pour permettre aux équipes de développement d'intégrer les analyses de vulnérabilités dans leurs pipelines de CI.\n\nJe suis aujourd'hui administrateur de l'outil, en charge des montées de version, de la gestion des projets et des utilisateurs.\n\nJ'ai développé des scripts (en python) utilisant l'API de DTrack pour automatiser certaines tâches de maintenance des projets (suppression d'analyses obsolètes par exemple).",
        evaluation: "J'ai une bonne connaissance de l'outil et de son fonctionnement. Je peux accompagner efficacement les équipes sur son utilisation mais il me reste des aspects à découvrir quant à la gestion des vulnérabilités détectées en elles-mêmes.",
        certification: ""
      },
      {
        title: 'Piano Analytics',
        category: 'Outils',
        logo: 'logos/ATInternet.png',
        level: 5,
        definition: "Piano Analytics est l'outil de mesure de l'audience et de l'activité des sites web et des applications mobiles de l'entreprise Piano. L'outil propose des fonctionnalités avancées pour l'analyse des données, la création de rapports et de tableaux de bord personnalisés, la segmentation des audiences, la mesure des performances, etc...\n\nPiano Analytics est un outil essentiel pour la prise de décision et l'optimisation des sites web et des applications mobiles. Contrairement à ses principaux concurrents, l'outil est guidé par le respect des données personnelles des internautes, by design. Il est donc très utilisé en Europe et les problématiques afférentes à la protection des données dans de nombreux pays font de lui une alternative de qualité à d'autres grandes enseignes historiques, aux pratiques parfois moins étiques.",
        facts: "J'ai découvert la suite Piano Analytics en 2015, chez AT Internet. J'ai été formé, en tant qu'employé, à son utilisation, et j'ai présenté la certification utilisateur, telle qu'elle est proposée aux experts analystes en poste chez nos clients. J'ai obtenu cette certification avec le niveau 'Gold' et un très bon score de plus de 95%.",
        evaluation: "Ma participation active aux développements de l'outil m'a permis de le connaître en profondeur. Je suis capable de répondre à des besoins très variés et complexes, en matière d'analyse de données et de mesure de l'audience. Je suis également en mesure de former et d'accompagner les utilisateurs de l'outil ainsi que les développeurs sur de nombreux aspects fonctionnels.",
        certification: 'Analytis Suite Gold User'
      },
      {
        title: 'PowerBI',
        category: 'Outils',
        logo: 'logos/powerbi.png',
        level: 5,
        definition: "PowerBI est un outil de Business Intelligence de Microsoft, qui permet de créer des rapports et des tableaux de bord interactifs, à partir de données provenant de différentes sources. PowerBI propose des fonctionnalités avancées pour la visualisation des données, la création de graphiques mais est également très confortable et puissant pour l'exploration et la fouille de données.",
        facts: "J'ai découvert PowerBI en 2017 alors que l'entreprise cherchait un remplaçant à SSRS, qui se montrait un peu trop rigide pour la création de rapports personnalisés. Je me suis formé à l'outil et ai pu rapidement proposer un 'Tableau de bord du service' exposant les principales métriques associées à l'activité de l'entreprise : nombre d'utilisateurs, de sites mesurés, de hits collectés et autres indicateurs de respect des SLA par exemple. Le sources de données étaient alors principalement des bases de données SQL alimentées par d'autres mécaniques.\n\nJ'ai poursuivi mon utilisation de l'outil et produit de nombreux rapports au fil des années.\n\nLe dernier rapport en date que j'ai produit, en 2024, expose les indicateurs du workflow des équipes de développement, de la création de l'EPIC à la livraison en production. Ce rapport est consulté par les membres du département technique et par la direction. Les données sont alimentées par une mécanique en python qui récupère les données depuis Gitlab, Sonarqube et JIRA et les combine en un modèle de données que j'ai défini, qui nous permet d'avoir une visibilité à 360° sur nos pratiques de développement.",
        evaluation: "Je pense être un utilisateur avancé de PowerBI. J'ai une pratique régulière et professionnelle de l'outil. Je suis également en mesure de former et d'accompagner les utilisateurs en interne, que cela soit pour consulter ou pour créer des rapports.",
        certification: ""
      },
      {
        title: 'SOAP UI',
        category: 'Outils',
        logo: 'logos/soap_ui.png',
        level: 5,
        definition: "SOAP UI est un outil de test automatisé d'API, qui permet de réaliser tant des tests fonctionnels que des tests de performance et de sécurité sur des services web. C'est un outil historique et une référence dans le domaine mais qui tend à être remplacé par des outils plus modernes et plus simples à utiliser.",
        facts: "J'ai commencé à utiliser SOAP UI en 2011, chez F-Secure, principalement dans le cadre de la mise en place de tests de sécurité d'une API. J'ai, à la même période, utilisé aussi l'outil pour des tests de performance (avant de passer sous Neoload pour ce besoin). \n\nEn 2015, j'ai implémenté les premiers tests d'API chez AT Internet avec cet outil. L'usage de la version gratuit m'a contraint à coder moi-même un certain nombre de choses, directement en groovy dans l'outil, comme par exemple les boucles de test, dans le cadre de l'exécution de tests dits 'data driven'.",
        evaluation: "J'ai un niveau 'expert' de l'usage de SOAP UI. J'ai développé mon expérience par la mise en place de nombreux tests au fil des années.",
        certification: ""
      },
      {
        title: 'Sonarqube',
        category: 'Outils',
        logo: 'logos/sonarqube.png',
        level: 5,
        definition: "Sonarqube est devenu un outil de référence pour l'analyse statique de code source. L'outil permet de détecter les problèmes de qualité du code, les bugs, les vulnérabilités, les duplications, les mauvaises pratiques, etc... Sonarqube permet à la fois de répondre à des contraintes réglementaires (ISO 27001 par exemple) mais est aussi un très bon outil pour aider les développeurs à améliorer la qualité de leur code et à respecter les bonnes pratiques de développement.",
        facts: "J'ai lancé mes premières analyses de code dans Sonarqube en 2016 et j'ai diffusé son utilisation dans l'entreprise la même année. J'ai accompagné et formé les développeurs aux pratiques et aux enjeux de l'analyse statique de code. J'ai également pris en charge la mise en place des premiers 'Quality Gates' pour garantir un niveau de qualité minimum sur les projets de l'entreprise.\n\nJe suis aujourd'hui le référent sur l'usage de l'outil pour les équipes de développement. J'assure également la veille sur les nouvelles versions et les nouvelles fonctionnalités de l'outil.",
        evaluation: "Je pense être un expert de Sonarqube, tant sur l'utilisation que sur la partie administration. C'est un outil que j'apprécie tout particulièrement pour les bénéfices qu'il apporte aux équipes de développement, sans pour autant exécuter le code. Il apporte donc dès les premières phases du cycle une grande valeur, sans avoir besoin d'environnement d'exécution. C'est toute la force de l'analyse statique !",
        certification: ""
      },
      {
        title: 'VSCode',
        category: 'Outils',
        logo: 'logos/vscode.png',
        level: 3,
        definition: "VSCode est un éditeur de code source open source, développé par Microsoft. C'est un outil très populaire auprès des développeurs et des étudiants. VSCode est un outil très complet, très ergonomique et très extensible, qui permet de travailler efficacement sur des projets de développement de toutes tailles et de toutes natures. Attention toutefois à la constellation de plugins disponibles qui peuvent parfois ralentir l'outil et ne sont pas forcément du niveau d'utilité annoncé : à consommer avec modération donc !",
        facts: "J'ai découvert VSCode assez tardivement, en 2019, dans le cadre de mon projet personnel de refonte du site macaveamoi.fr. Je cherchais un IDE gratuit et simple d'utilisation. De nombreuses personnes dans l'entreprise utilisaient cet outil : c'était l'occasion pour moi d'en faire l'expérience aussi !\n\nJ'ai également utilisé cet outil dans le cadre scolaire pour la réalisation de mes projets Angular.",
        evaluation: "Je pense utiliser correctement cet outil mais suis moins à l'aise à son usage que sur la suite JetBrains dont j'ai plus l'habitude et que j'utilise dans un cadre professionnel.",
        certification: ""
      },
      {
        title: 'Allemand',
        category: 'Langues',
        logo: 'logos/DE.png',
        level: 3,
        definition: "-",
        facts: "J'ai appris l'allemand dès la 6ème et j'ai toujours apprécié la pratique de cette langue. J'ai eu l'occasion de la pratiquer à l'occasion de nombreuses rencontres d'étudiants Allemands ou Suisses allemands logés dans ma famille, qui venaient en France pour apprendre le français.\n\nAu lycée j'écoutais des musiques punk/rock en Allemand (Die Ärzte, Wizo, Rammstein) mais aussi des classiques moins agressifs (Camillo Felgen, Nena, Vico Toriani par ex.).",
        evaluation: "Après un très bon niveau scolaire et une pratique quasi-courante à l'oral, je pense avoir aujourd'hui un niveau correct en Allemand. Je pourrais cependant améliorer ma pratique de la langue et retrouver tout le vocabulaire oublié au fil des années en la pratiquant plus régulièrement.",
        certification: ""
      },
      {
        title: 'Anglais',
        category: 'Langues',
        logo: 'logos/UK.png',
        level: 4,
        definition: "-",
        facts: "Après avoir appris l'Anglais à l'école et toujours obtenu de bons résultats, j'ai eu l'occasion de pratiquer la langue dans un contexte professionnel dès 2010, chez F-Secure. J'ai participé à des réunions internationales, rédigé des mails, des rapports et de la documentation en Anglais.\n\nMes managers ne parlaient pas Français et l'Anglais était donc le seule langue disponible pour communiquer avec eux.\n\nAprès une pause de la pratique professionnelle de la langue, j'ai repris en 2021 chez AT Internet, devenue membre du groupe international Piano, où l'Anglais est redevenue ma langue de travail principale. J'ai à nouveau participé à des réunions internationales, rédigé des mails, des rapports et de la documentation en Anglais. J'ai également produit des articles et bilans en Anglais pour la direction.\n\nA ma demande, j'ai pu bénéficier en 2022 de cours de perfectionnement, ce qui m'a permis de valider un niveau officiel de la langue par un organisme agréé: 'C1 > C1+'.\n\nDepuis plusieurs je lis des ouvrages professionnels en Anglais, parmi lesquels : Refactoring (M. Fowler), Measure What Matters (J. Doerr), Accelerate (N. Forsgren) ou encore mon dernier en date (en cours actuellement) : Learning to scale at Theodoro group (Regis Medina).",
        evaluation: "Je me sens très à l'aise en Anglais. Je suis complètement opérationnel, tant à l'oral qu'à l'écrit dans le cadre professionnel. Je peux parfois avoir quelques difficultés à comprendre certains accents et je ne peux pas prétendre à une pratique totalement courante, par manque de vocabulaire parfois, sans que cela ne constitue vraiment un frein dans mes échanges avec des anglophones.",
        certification: 'C1 > C1+'
      },
      {
        title: 'Turc',
        category: 'Langues',
        logo: 'logos/TR.png',
        level: 3,
        definition: "-",
        facts: "Arrivé en Turquie en 2004, j'ai rapidemnt appris le turc pour communiquer avec la population et vivre au quotidien. Ankara (où se trouve l'Ambassade de France où je travaillais) n'est en effet pas une ville touristique et la langue turque est donc indispensable pour communiquer avec les commerçants, les administrations, les voisins, etc...\n\nJ'ai atteint un niveau tout à fait acceptable qui m'a permis de me débrouiller seul dans la vie quotidienne et même de passer pour un Turc dans certaines situations.\n\nAprès avoir quitté le pays en fin de mission en 2006, j'ai eu l'occasion lors de voyage ultérieurs de constater que je n'avais pas perdu la langue et que je pouvais encore prendre part à des échanges assez fluides.",
        evaluation: "Je suis à l'aise dans mes échanges dans la langue turque. Je pourrais cependant améliorer ma pratique de la langue en développant l'usage d'un vocabulaire plus large et de tournure plus soutenues pour une pratique plus professionnelle.",
        certification: ""
      }
    ];

  }

  constructor() { }
}
