# Guide de démarrage rapide - Callimaps

## Installation

1. **Installer les dépendances**
   ```bash
   npm install
   ```

2. **Lancer l'application en mode développement**
   ```bash
   npm run dev
   ```

3. **Ouvrir dans le navigateur**
   L'application sera disponible à l'adresse : `http://localhost:3000`

## Structure de l'application

### Pages principales
- **Accueil** (`/`) : Vue d'ensemble avec statistiques et actions rapides
- **Carte** (`/map`) : Carte interactive avec tous les points d'intérêt
- **Planification de parcours** (`/plan`) : Créer un parcours personnalisé
- **Communauté** (`/community`) : Galerie de photos partagées avec likes et commentaires
- **Profil** (`/profile`) : Statistiques et paramètres utilisateur

### Fonctionnalités principales

1. **Parcours personnalisés**
   - Définir point de départ et destination
   - Filtrer par type de calligraphie
   - Ajuster la durée maximale
   - Suivre le parcours en temps réel

2. **Carte collaborative**
   - Visualiser tous les POI sur une carte Leaflet
   - Cliquer sur un POI pour voir les détails
   - Naviguer vers les pages de détail

3. **Espace communautaire**
   - Publier des photos de découvertes
   - Liker et commenter les publications
   - Modération par les administrateurs

4. **Outils d'apprentissage**
   - Scanner AR pour traduire les inscriptions
   - Ressources éducatives par type de calligraphie
   - Liens vers ateliers et cours

## Données de test

L'application utilise des données mockées dans `src/utils/mockData.ts`. Vous pouvez les modifier pour tester différents scénarios.

### Points d'intérêt (POI) disponibles
- Mosquée de Paris (calligraphie arabe)
- Fresque murale "Mots de Paix" (contemporaine)
- Atelier de calligraphie M. Dubois (latine)
- Institut Feibai (chinoise)

### Utilisateurs de test
- **Jean** : Utilisateur par défaut connecté
- **Meriem** : Auteur des publications dans la communauté

## Design

L'application utilise une palette de couleurs inspirée de la calligraphie :
- **Noir encre** : `#0a0a0a` / `#1a1a1a` (arrière-plans principaux)
- **Beige parchemin** : `#f5f1e8` (arrière-plan général)
- **Or** : `#d4af37` (accents et highlights)
- **Cuivre** : `#b87333` (accents secondaires)

## Technologies utilisées

- **React 18** avec TypeScript
- **Vite** pour le build et le développement
- **React Router** pour la navigation
- **Leaflet** pour les cartes
- **Tailwind CSS** pour le styling
- **Zustand** pour la gestion d'état
- **Lucide React** pour les icônes

## Build de production

```bash
npm run build
```

Les fichiers de production seront générés dans le dossier `dist/`.

## Notes importantes

- L'application est une **PWA-ready** (Progressive Web App)
- La fonctionnalité de scan AR est actuellement simulée (interface uniquement)
- La géolocalisation réelle nécessiterait une clé API pour les services de cartographie
- Les images sont actuellement des placeholders

## Prochaines étapes

Pour développer davantage l'application :

1. Intégrer une API backend pour les données réelles
2. Ajouter l'authentification utilisateur
3. Implémenter la géolocalisation GPS
4. Intégrer un service de traduction OCR réel
5. Ajouter un système de notifications push
6. Développer l'application mobile native (React Native)

