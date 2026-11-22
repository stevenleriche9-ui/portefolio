# Portfolio – Steven Sie

Site portfolio personnel de **Pale Sie Steven Leriche Hervé**, étudiant en Licence 1 Informatique (Réseaux & Télécoms) à l'Institut Ivoirien de Technologie, Grand-Bassam (Côte d'Ivoire).

Il présente mon parcours, mes compétences, mes projets académiques, mon CV et un formulaire de contact.

## Contenu du site

| Page | Description |
|------|-------------|
| `index.html` | Accueil : présentation, à propos, formations, projets, CV, contact |
| `gestion.html` | Projet **Gestion Universitaire** (C#, Windows Forms, SQL) |
| `comparaison.html` | Projet **Comparateur de prix** (Python, Pandas, openpyxl, pytest) |
| `app.html` | Projet **Manga Reader** (Flutter, Dart, API MangaDex) |

## Fonctionnalités

- Design sombre et responsive (menu burger sur mobile)
- Animation de texte dynamique sur l'accueil (désactivée si l'utilisateur préfère réduire les animations)
- Apparition progressive des blocs au défilement et mise en surbrillance du lien de navigation actif
- Téléchargement et consultation du CV au format PDF
- Formulaire de contact envoyé par e-mail via [FormSubmit](https://formsubmit.co), avec champ anti-spam (honeypot)
- Gestion des zones sûres des téléphones (encoche) et attributs d'accessibilité (`aria-*`)

## Technologies

- HTML5
- CSS3 (variables CSS, grid, flexbox)
- JavaScript natif (sans framework ni dépendance)
- Police [Poppins](https://fonts.google.com/specimen/Poppins) via Google Fonts

## Structure du projet

```
Portefolio/
├── index.html
├── gestion.html
├── comparaison.html
├── app.html
├── style.css            # Styles communs à toutes les pages
├── script.js            # Menu, animations, formulaire de contact
├── CV_Sie_Steven.pdf
├── photo.jpeg
├── projet1.png          # Capture du projet Gestion Universitaire
└── icons/               # Icônes (GitHub, LinkedIn, Gmail, CV, etc.)
```

## Lancer le site en local

Aucune installation n'est nécessaire. Deux options :

1. Ouvrir `index.html` directement dans un navigateur.
2. Ou lancer un petit serveur local (par exemple avec Python) :

   ```bash
   python -m http.server 8000
   ```

   puis ouvrir <http://localhost:8000>.

> Le formulaire de contact a besoin d'une connexion Internet. Au tout premier envoi, FormSubmit envoie un e-mail d'activation à l'adresse du destinataire, qu'il faut confirmer.

## Projets présentés

- **Gestion Universitaire** : application de bureau pour gérer étudiants, enseignants, cours et notes.
- **Comparateur de prix** : programme Python qui compare les prix de trois enseignes d'Abidjan à partir de sources JSON, CSV et Excel. Code : [github.com/stevenleriche9-ui/comparaison](https://github.com/stevenleriche9-ui/comparaison)
- **Manga Reader** : application mobile de lecture de mangas avec Flutter. Code : [github.com/Hiemmel-boop/Manga-Reader](https://github.com/Hiemmel-boop/Manga-Reader)

## Contact

- GitHub : [stevenleriche9-ui](https://github.com/stevenleriche9-ui)
- LinkedIn : [linkedin.com/in/stevensie](https://linkedin.com/in/stevensie)
- E-mail : siestevenlericheherve@gmail.com
- Localisation : Grand-Bassam, Côte d'Ivoire

## Licence

© 2026 Pale Sie Steven Leriche Hervé. Tous droits réservés.
