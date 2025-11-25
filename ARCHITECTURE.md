# Architecture de l'application Callimaps

## Vue d'ensemble

Callimaps est une application web progressive (PWA) développée avec React et TypeScript, permettant aux utilisateurs de découvrir le patrimoine calligraphique urbain en créant des parcours personnalisés.

## Structure du projet

```
callimaps/
├── public/                 # Fichiers statiques
│   └── callimaps-icon.svg
├── src/
│   ├── components/        # Composants réutilisables
│   │   ├── BottomNavigation.tsx
│   │   ├── TranslationScanner.tsx
│   │   └── EducationalResources.tsx
│   ├── pages/            # Pages de l'application
│   │   ├── HomePage.tsx
│   │   ├── MapPage.tsx
│   │   ├── RoutePlanningPage.tsx
│   │   ├── RouteActivePage.tsx
│   │   ├── CommunityPage.tsx
│   │   ├── ProfilePage.tsx
│   │   └── POIDetailPage.tsx
│   ├── stores/           # Gestion d'état (Zustand)
│   │   └── appStore.ts
│   ├── types/            # Types TypeScript
│   │   └── index.ts
│   ├── utils/            # Utilitaires
│   │   ├── mockData.ts
│   │   ├── routeGenerator.ts
│   │   └── educationalResources.ts
│   ├── styles/           # Styles globaux
│   │   └── index.css
│   ├── App.tsx           # Composant racine
│   └── main.tsx          # Point d'entrée
├── package.json
├── tsconfig.json
├── vite.config.ts
├── tailwind.config.js
└── README.md
```

## Architecture technique

### Stack technologique

- **React 18** : Framework UI
- **TypeScript** : Typage statique
- **Vite** : Build tool et dev server
- **React Router** : Navigation
- **Zustand** : Gestion d'état légère
- **Leaflet** : Cartes interactives
- **Tailwind CSS** : Styling utilitaire
- **Lucide React** : Icônes

### Gestion d'état

L'application utilise **Zustand** pour gérer l'état global. Le store principal (`appStore.ts`) contient :

- **Utilisateur actuel** : Informations et statistiques
- **Points d'intérêt (POI)** : Liste des lieux calligraphiques
- **Publications** : Posts de la communauté
- **Parcours actif** : Route en cours
- **Filtres** : Type de calligraphie sélectionné

### Flux de données

```
User Action → Component → Store Update → UI Re-render
```

1. L'utilisateur interagit avec un composant
2. Le composant appelle une fonction du store
3. Le store met à jour l'état
4. Les composants souscrits se mettent à jour automatiquement

## Fonctionnalités principales

### 1. Moteur de parcours personnalisés

**Fichier** : `src/pages/RoutePlanningPage.tsx`, `src/utils/routeGenerator.ts`

- **Génération d'itinéraire** : Algorithme basé sur la distance de Haversine
- **Filtrage** : Par type de calligraphie et durée maximale
- **Optimisation** : Sélection des POI le long du trajet avec déviation maximale de 500m

**Algorithme de génération** :
1. Calcul de la distance directe entre départ et arrivée
2. Filtrage des POI par type de calligraphie (si spécifié)
3. Sélection des POI situés le long du trajet (avec marge de déviation)
4. Tri par distance depuis le point de départ
5. Calcul de la durée totale (temps de marche + 5 min par POI)

### 2. Carte collaborative

**Fichier** : `src/pages/MapPage.tsx`

- **Bibliothèque** : Leaflet avec React-Leaflet
- **Tiles** : OpenStreetMap
- **Interactivité** : Popups avec informations POI, navigation vers détail
- **Liste** : Affichage des 5 premiers POI sous la carte

### 3. Espace communautaire

**Fichier** : `src/pages/CommunityPage.tsx`

- **Publications** : Feed avec photos et descriptions
- **Interactions** : Likes et commentaires
- **Modération** : Affichage uniquement des posts vérifiés
- **Temps réel** : Mise à jour immédiate des interactions

### 4. Scanner de traduction

**Fichier** : `src/components/TranslationScanner.tsx`

- **Interface** : Modale plein écran avec aperçu caméra
- **Simulation** : Actuellement simulée (prête pour intégration OCR/AR)
- **Résultats** : Affichage de la traduction et explication

### 5. Ressources éducatives

**Fichier** : `src/utils/educationalResources.ts`, `src/components/EducationalResources.tsx`

- **Types** : Ateliers, articles, vidéos, cours
- **Filtrage** : Par type de calligraphie
- **Affichage** : Liste avec icônes et liens externes

## Design System

### Palette de couleurs

```css
--ink-black: #1a1a1a      /* Textes principaux */
--ink-deep: #0a0a0a       /* Headers et arrière-plans sombres */
--parchment: #f5f1e8      /* Arrière-plan général */
--gold: #d4af37           /* Accents et highlights */
--copper: #b87333         /* Accents secondaires */
```

### Typographie

- **Display** : Georgia (titres)
- **Body** : Inter (texte général)

### Composants réutilisables

- **Cards** : Fonds blanc avec ombres douces
- **Buttons** : Gradients or/cuivre pour actions principales
- **Navigation** : Barre fixe en bas avec icônes
- **Headers** : Fonds noirs avec texte parchemin

## Responsive Design

L'application est optimisée pour mobile-first :
- Navigation tactile en bas d'écran
- Cartes interactives adaptées au touch
- Layouts flexibles avec Tailwind

## Données mockées

Les données de test sont définies dans `src/utils/mockData.ts` :
- 4 Points d'intérêt (POI) à Paris
- 2 Publications dans la communauté
- Utilisateur par défaut "Jean"

## Intégrations futures

1. **API Backend** : Remplacement des données mockées
2. **Géolocalisation** : Utilisation de l'API du navigateur
3. **OCR réel** : Intégration d'un service de reconnaissance de texte
4. **Notifications** : Push notifications pour les nouveaux parcours
5. **Authentification** : Système d'authentification utilisateur
6. **Paiement** : Pour les ateliers payants

## Performance

- **Code splitting** : Route-based avec React Router
- **Lazy loading** : Des images et composants lourds
- **Optimisation** : Tailwind purge pour réduire la taille CSS
- **PWA** : Configuration prête pour installation mobile

## Sécurité

- **Validation** : Types TypeScript pour la sécurité de type
- **Sanitization** : À implémenter pour les inputs utilisateur
- **HTTPS** : Requis pour la géolocalisation en production
- **Modération** : Vérification des posts avant publication

