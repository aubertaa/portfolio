import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class LibraryService {
  getBooks () {
    return [
      {
        title: 'Accelerate', 
        author: 'Nicole Forsgren, Jez Humble, Gene Kim',
        description: "Livre sur l'ingénierie logicielle et les pratiques DevOps, basé sur une étude de plusieurs années et de plusieurs milliers de participants. Il met en avant les pratiques qui permettent d'atteindre des performances exceptionnelles en matière de déploiement logiciel, de qualité et de sécurité.",
        image: 'books/Accelerate.png',
        category: 'Ingénierie logicielle',
        avis: 'j\'ai apprécié cet ouvrage, principalement pour l\'originalité de son approche. Il est un des rares ouvrages dans lequel les indicateurs d\'efficacité de l\'ingénierie logicielle ne sont pas considérés comme des objectifs mais comme des corollaires découlant directement d\'autres pratiques, comme la mise en place d\'une culture propice adaptée ou des pratiques d\'automatisation vertueuses. Cela permet de se concentrer sur les causes plutôt que sur les conséquences, et de s\'assurer que les efforts d\'amélioration sont bien orientés. C\'est un ouvrage qui m\'a donné envie de creuser davantage dans cette direction.'
      },
      {
        title: 'Dynamic Reteaming', 
        author: 'Heidi Helfand',
        description: "Livre sur la gestion des équipes et des organisations, qui met en avant l'importance de la flexibilité et de l'adaptabilité des équipes pour faire face aux changements. Il propose des outils et des pratiques pour accompagner les équipes dans ces transitions, et pour les aider à rester performantes et épanouies malgré les bouleversements.",
        image: 'books/Dynamic Reteaming.png',
        category: 'Management / organisation',
        avis: 'très bon livre plein d\'ingrédients concrets pour accompagner les aspects humains des changements dans les organisations, donnant de nombreux outils pour servir les disruptions et les réorganisations qui sont nécessaires pour conserver un certain dynamisme dans l\'entreprise.'
      },
      {
        title: 'Team Topologies', 
        author: 'Matthew Skelton, Manuel Pais, Ruth Malan',
        description: "Livre sur l'organisation des équipes et des services, qui met en avant l'importance de l'architecture organisationnelle pour la performance des équipes. Il propose des modèles d'organisation et des pratiques pour accompagner les équipes dans leur évolution. Le lien entre l'architecture logicielle et l'architecture organisationnelle est particulièrement mis en avant.",
        image: 'books/Team Topologies.png',
        category: 'Management / organisation',
        avis: 'la réflexion qui suit la lecture de cet ouvrage est très intéressante, car elle permet de se poser des questions sur l\'adéquation entre l\'organisation actuelle et l\'architecture logicielle, et de se demander si les choix d\'organisation sont bien adaptés aux besoins des équipes et des services. Cela permet de remettre en question certaines pratiques et de chercher des solutions plus adaptées.'
      },
      {
        title: 'Scrum Guide',
        author: 'Ken Schwaber, Jeff Sutherland',
        description: 'Le guide officiel de Scrum, qui présente les principes et les pratiques de ce framework agile. Il est court et facile à lire, et donne une bonne introduction à Scrum pour ceux qui ne le connaissent pas encore. L\'édition 2020 inclut des mises à jour mineures par rapport à l\'édition précédente parmi lesquelles la suppression de la notion de "chef de projet" et l\'ajout de la notion de "Scrum Master servant-leader".',
        image: 'books/scrum_guide.png',
        category: 'Ingénierie logicielle',
        avis: 'c\'est toujours une bonne chose de revenir aux sources, et de se replonger dans les principes de base de Scrum. Cela permet de se rappeler les fondamentaux, et de s\'assurer que les pratiques mises en place sont bien en accord avec les valeurs et les principes de Scrum. C\'est un ouvrage court et facile à lire, qui peut être utile pour les débutants comme pour les praticiens expérimentés.'
      },
      {
        title: 'Refactoring',
        author: 'Martin Fowler',
        description: 'Livre technique sur le refactoring, qui présente les principes et les pratiques de cette technique de nettoyage du code. Il propose des exemples concrets et des conseils pour appliquer le refactoring de manière efficace, et pour maintenir un code propre et lisible. C\'est un ouvrage de référence pour les développeurs qui souhaitent améliorer la qualité de leur code.',
        image: 'books/Refactoring.png',
        category: 'Ingénierie logicielle',
        avis: 'je fais souvent référence à ce livre, je m\'en sers comme d\'un dictionnaire du code : on y recherche un code smell ou une problématique et on découvre le pattern de refactoring associé. C\'est un ouvrage très pratique, qui permet de passer de la théorie à la pratique de manière très concrète, je le recommande à tous les développeurs qui souhaitent améliorer la qualité de leur code.'
      },
      {
        title: 'Measure what matters',
        author: 'John Doerr',
        description: 'L\'ouvrage présente le concept d\'Objectifs et de Résultats Clés (OKR), une méthode de management qui permet de fixer des objectifs ambitieux et de mesurer leur réalisation. Il propose des exemples concrets et des conseils pour mettre en place les OKR dans une organisation, et pour les utiliser comme levier de performance et de motivation.',
        image: 'books/Measure What Matters.png',
        category: 'Ingénierie logicielle',
        avis: 'j\'ai particulièrement apprécié les aspects humains de cette méthode, qui met l\'accent sur l\'importance de la transparence, de l\'alignement et de l\'engagement des équipes. C\'est une méthode qui permet de donner du sens au travail, et de s\'assurer que les efforts de chacun sont bien orientés vers les objectifs stratégiques de l\'entreprise. C\'est un ouvrage qui m\'a aussi apporté des pistes de réflexion concernant l\'évaluation de la performance et la motivation des équipes.'
      },
      {
        title: 'Management 3.0',
        author: 'Jurgen Appelo',
        description: 'Un très bon livre sur le management agile, qui propose des outils et des pratiques pour accompagner les équipes dans leur développement. Il met en avant l\'importance de la confiance, de la transparence et de l\'autonomie des équipes, et propose des modèles d\'organisation et de leadership pour favoriser l\'innovation et la performance.',
        image: 'books/Management 3.0.png',
        category: 'Management / organisation',
        avis: 'une mine d\'informations pour orienter son management vers un cadre efficace de confiance et de responsabilisation des équipes. Les outils et les pratiques proposés sont très concrets et peuvent être mis en place rapidement.'
      },
      {
        title: 'L\'entreprise libérée', 
        author: 'Isaac Getz', 
        description: 'Ce livre propose une vision alternative de l\'organisation du travail, basée sur la confiance et l\'autonomie des collaborateurs. Il met en avant des exemples d\'entreprises qui ont adopté ce modèle, et propose des pistes pour accompagner les transformations nécessaires. C\'est un ouvrage qui invite à la réflexion sur les modèles de management traditionnels, et qui propose des alternatives pour favoriser l\'épanouissement des individus et la performance des organisations.',
        image: 'books/L\'Entreprise libérée.png', 
        category: 'Management / organisation', 
        avis: 'l\'horizontalité des organisations est un sujet qui me tient à cœur, et ce livre m\'a permis de découvrir des exemples concrets d\'entreprises qui ont réussi à mettre en place des modèles alternatifs de management. Cet ouvrage m\'a conforté dans l\'idée que l\'entreprise est avant tout faite des collaborateurs qui y travaillent.'
      },
      {
        title: 'How to change the world', 
        author: 'Jurgen Appelo', 
        description: 'Petit ouvrage qui propose des pistes pour changer le monde à son échelle, en commençant par soi-même. Il met en avant l\'importance de la bienveillance, de l\'empathie et de l\'action pour faire évoluer les choses. C\'est un livre qui invite à la réflexion et à l\'action, et qui propose des outils pour passer de la réflexion à la réalisation.',
        image: 'books/How to Change the World.png', 
        category: 'Management / organisation', 
        avis: 'un déclic pour moi, qui m\'a permis de prendre conscience de l\'importance de l\'action individuelle pour changer les choses. C\'est un ouvrage qui m\'a donné envie de m\'engager davantage ou au contraire de fuir certains contextes toxiques.'
      }
    ]
  }


  constructor() { }
}
