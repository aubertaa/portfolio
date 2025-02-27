import { Component, HostListener } from '@angular/core';

export interface ParcoursItem {
  poste: string;
  periode: string;
  lieu: string;
  entreprise: string;
  image: string;
  documents: {
    title: string;
    url: string;
  }[];
  details: string;
  responsabilite: string;
  statut: string;
  category: string;
}

@Component({
  selector: 'app-parcours',
  templateUrl: './parcours.component.html',
  styleUrl: './parcours.component.scss'
})
export class ParcoursComponent {

  projects: ParcoursItem[] = [
    {
      poste: "Directeur de l'ingénierie logicielle",
      periode: "12/2024 - Aujourd'hui",
      entreprise: "Piano",
      lieu: "FR - Bordeaux (33)",
      image: "assets/logos/piano.png",
      documents: [],
      details: "- Définition et suivi du cycle de développement logiciel (SDLC)\n- Tests automatisés et stratégie qualité\n- Pratiques CICD / DevOps\n- Suivi d'indicateurs et visibilité\n- conformité ISO 27001 du SDLC\n- Accompagnement des équipes (environ 80 personnes) aux pratiques detests / Quality engineering (méthodologie, processus, techniques, devops)\n- Management des spécialistes du test, de l'infrastructure et de la CI dans leséquipes de développement (8 personnes)\n- Management d'équipes de développement (14 personnes)\n- Mise en place d'une organisation d'équipe dynamique, basé sur le focus et laflexibilité",
      responsabilite: "Responsable / Manager",
      statut: "CDI",
      category: "experience"
    },
    {
      poste: "Responsable ingénierie de tests et intégration continue / Dev manager",
      periode: "06/2015 - 12/2024",
      entreprise: "Piano",
      lieu: "FR - Bordeaux (33)",
      image: "assets/logos/piano.png",
      documents: [],
      details: "- Définition de la politique de tests\n- Définition et mise en place d'une stratégie de tests globale\n- Tests automatisés, flux de développement\n- Validation/intégration continue - DevOps\n- Indicateurs Qualité et visibilité\n- conformité ISO 27001 du SDLC\n- Accompagnement des équipes (environ 80 personnes) aux pratiques detests / Quality engineering(méthodologie, processus, techniques, devops) \n- Management des spécialistes du test, de l'infrastructure et de la CI dans leséquipes de développement (8 personnes)\n- Management d'équipes de développement(14 personnes) \n- Mise en place d'une organisation d'équipe dynamique, basé sur le focus et laflexibilité",
      responsabilite: "Responsable / Manager",
      statut: "CDI",
      category: "experience"
    },
    {
      poste: "Formateur",
      periode: "06/2019 - Aujourd'hui",
      entreprise: "CESI École Supérieure de l’Alternance",
      lieu: "FR - Bordeaux (33)",
      image: "assets/logos/cesi.png",
      documents: [],
      details: "- Tests et qualité logicielle\n- DevOps / intégration continue\n- Industrialisation et automatisation\n- Cycle de développement",
      responsabilite: "Formateur",
      statut: "Intervenant",
      category: "experience"
    },
    {
      poste: "Autoentrepreneur",
      periode: "05/2015 - 06/2018",
      entreprise: "Alexandre Aubert",
      lieu: "FR - Bordeaux (33)",
      image: "",
      documents: [],
      details: "Travaux informatiques divers, tests, conseil en qualité et méthodes,validation/intégration continue, formation et accompagnement des utilisateurs (bureautique, web, photo, video...)",
      responsabilite: "",
      statut: "Indépendant",
      category: "experience"
    },
    {
      poste: "Responsable Qualité Logicielle",
      periode: "01/2013 - 06/2014",
      entreprise: "Addinsoft",
      lieu: "FR - Bordeaux (33)",
      image: "assets/logos/addinsoft.png",
      documents: [],
      details: "- Définition de la stratégie qualité : niveaux de tests / responsabilités\n- Mise en place de l’infrastructure de validation/intégration continue\n- Analyse, conception, implémentation et exécution des tests multi-environnements\n- Mise en place de la gestion de configuration (SVN) / Formation auxutilisateurs\n- Amélioration/automatisation du process de packaging / livraison du produit (1 click delivery)",
      responsabilite: "Responsable",
      statut: "CDI",
      category: "experience"
    },
    {
      poste: "Ingénieur Test Logiciel Confirmé",
      periode: "09/2010 - 12/2012",
      entreprise: "F-Secure Corporation",
      lieu: "FR - Bordeaux (33)",
      image: "assets/logos/fsecure.png",
      documents: [],
      details: "- Projet multi-site international : Définition de stratégies de test, cibles qualité,conception/mise en place d'une plateforme d'intégration continue descomposants\n- Tests unitaires, TDD, pair programming\n- Mise en place d’indicateurs qualité et reporting projet régulier\n- Conception, Implémentation et Automatisation de tests de charge/stress/performance",
      responsabilite: "Membre d'équipe Agile",
      statut: "CDI",
      category: "experience"
    },
    {
      poste: "Scrum Master",
      periode: "01/2012 - 06/2012",
      entreprise: "F-Secure Corporation",
      lieu: "FR - Bordeaux (33)",
      image: "assets/logos/fsecure.png",
      documents: [],
      details: "- Animation des réunions (daily stand up, sprint planning, story mapping,demo, retrospective)\n- Reporting/visibilité (burn up/burn down, vélocité, allocation des resources)\n- Scrum of Scrum : dépendances entre équipes à l’international, évaluationdes risques\n- Gestion des obstacles/Amélioration continue : A3, Root Cause Analysis,Remember the future\n- Equipe de 7 personnes",
      responsabilite: "Membre d'équipe Agile",
      statut: "CDI",
      category: "experience"
    },
    {
      poste: "Testeur logiciel",
      periode: "08/2008 - 09/2010",
      entreprise: "Steek/Agematis",
      lieu: "FR - Bordeaux (33)",
      image: "assets/logos/steek.png",
      documents: [],
      details: "- Mise en place d'indicateurs qualité pour les livraisons\n- Définition des plans de tests puis réalisation et exécution des scripts de tests\n- Automatisation de tests (non régression)/bonnes pratiques\n- Gestion de la roadmap/recettes de l’outil de test interne (galathee)\n- Management de 2 testeurs",
      responsabilite: "Membre d'équipe Agile",
      statut: "CDI",
      category: "experience"
    },
    {
      poste: "Technicien Support",
      periode: "09/2007 - 06/2008",
      entreprise: "APIBAT",
      lieu: "FR - Bordeaux (33)",
      image: "assets/logos/apibat.png",
      documents: [],
      details: "- Assistance technique sur les logiciels APIBAT auprès des revendeurs\n- Spécialisation comptabilité / paye : formation sur site ou en ligne auxutilisateurs\n- Expertise juridique : application logicielle des lois sur la Paye (TEPA,DADSU)\n- Documentations et supports de formation\n- Détection et remontée de bugs, alimentation des roadmaps",
      responsabilite: "Technicien",
      statut: "CDI",
      category: "experience"
    },
    {
      poste: "Responsable informatique",
      periode: "02/2007 - 08/2007",
      entreprise: "Ministère de l'éducation nationale, de la jeunesse et de la vie associative",
      lieu: "FR - Joué-les-tours (37)",
      image: "assets/logos/ministère.png",
      documents: [],
      details: "Administration du réseau administratif et de l’Intranet pédagogique du collège de l'Arche du Lude (37)\n- Formation et assistance aux utilisateurs\n- Gestion du parc, relations fournisseurs et commandes de matériel",
      responsabilite: "Responsable",
      statut: "CAE",
      category: "experience"
    },
    {
      poste: "Adjoint au chef de service du Chiffre et des communications",
      periode: "11/2004 - 07/2006",
      entreprise: "Ministère français des affaires étrangères",
      lieu: "TR - Ankara/Istanbul",
      image: "assets/logos/ministère.png",
      documents: [],
      details: "- Gestion du réseau interne, du parc informatique et téléphonique (PABX)\n- Développement d'applications à usage interne\n- Création et maintenance du site internet officiel de l’ambassade (SPIP)\n- Formation et aide aux utilisateurs 24/24 (Ankara/Istanbul)\n- Communications diplomatiques sécurisées",
      responsabilite: "Responsable adjoint",
      statut: "VIA",
      category: "experience"
    },
    {
      poste: "Baccalauréat Scientifique, Mathématiques (mention Bien)",
      periode: "1997 - 2000",
      entreprise: "Lycée Léonard de vinci",
      lieu: "FR - Amboise (37)",
      image: "assets/logos/ministère.png",
      documents: [{ url: "https://www.lyc-vinci-amboise.fr/site/", title: "le site du lycée" }],
      details: "Le lycée Léonard de Vinci d'Amboise est un établissement important, lycée public d'enseignement général et technologique.",
      responsabilite: "Filière scientifique option Mathématiques",
      statut: "Lycéen",
      category: "formation"
    }
  ];

  selectedProject: any = null;
  showDescription: boolean = false;

  constructor(
  ) { }

  getProjects () {
    return this.projects;
  }

  onCardClick (project: any) {
    // Toggle description visibility
    this.showDescription = !this.showDescription;
    this.selectedProject = project;

  }


  closeModal () {
    // Close the modal by resetting selectedCompetency
    this.showDescription = false;
    this.selectedProject = null;
  }


  // Close modal if clicked outside
  @HostListener('document:click', ['$event'])
  onDocumentClick (event: MouseEvent) {
    const modalElement = document.querySelector('.popin-modal');
    if (modalElement && !modalElement.contains(event.target as Node)) {
      this.closeModal();
    }
  }


}
