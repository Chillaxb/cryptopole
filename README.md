# Cryptopole.fr

Site web professionnel pour l'activité de consulting freelance en AI, Blockchain et XR.

## Stack Technique

- **Framework**: React 19 + Vite 7
- **Styling**: Tailwind CSS 4
- **Routing**: React Router 7
- **Icons**: Lucide React
- **Deployment**: Vercel / Railway

## Développement

```bash
# Installation des dépendances
npm install

# Lancement du serveur de développement
npm run dev

# Build production
npm run build

# Preview du build
npm run preview
```

## Structure

```
src/
├── components/     # Composants réutilisables
│   ├── Navigation.jsx
│   └── Footer.jsx
├── pages/          # Pages de l'application
│   ├── Landing.jsx
│   ├── Blog.jsx
│   ├── Creations.jsx
│   └── About.jsx
├── data/           # Données statiques
│   └── content.js
├── App.jsx         # Router principal
├── main.jsx        # Entry point
└── index.css       # Styles globaux + Tailwind
```

## Déploiement

Le site est configuré pour Vercel avec le fichier `vercel.json` pour le routing SPA.

## Contact

contact@cryptopole.fr
