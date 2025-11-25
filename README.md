# Callimaps 🗺️✍️

Application mobile pour découvrir le patrimoine calligraphique urbain en marchant.

## Objectif

Callimaps vise à encourager les utilisateurs à redécouvrir leur environnement urbain en valorisant la calligraphie présente dans la ville. L'application incite à porter un nouveau regard sur le patrimoine culturel souvent ignoré.

## Fonctionnalités principales

### 1. Moteur de Parcours Personnalisés
- Création d'itinéraire personnalisé (départ → destination)
- Filtrage par type de calligraphie (Arabe, Chinoise, Contemporaine, etc.)
- Filtrage par durée/distance
- Guidage GPS vers les points d'intérêt
- Notifications de fin de parcours

### 2. Carte Collaborative
- Carte interactive avec points d'intérêt calligraphiques
- Fiches descriptives pour chaque œuvre/lieu
- Contribution utilisateur pour enrichir la carte

### 3. Espace Communautaire
- Galerie de photos partagées
- Système de likes et commentaires
- Modération par les administrateurs
- Profil utilisateur avec statistiques

### 4. Outils d'Apprentissage
- Traduction par scan (AR) des inscriptions
- Ressources éducatives et liens vers ateliers

## Technologies

- React 18 + TypeScript
- Vite
- React Router
- Leaflet (cartes)
- Tailwind CSS
- Zustand (état global)

## Installation

```bash
npm install
```

## Développement

```bash
npm run dev
```

L'application sera disponible sur `http://localhost:3000` sur votre machine.

### Accéder depuis d'autres appareils (téléphone, autre ordinateur)

Pour partager l'application avec d'autres appareils sur le même réseau :

1. **Trouvez votre adresse IP locale** :
   - Windows : Ouvrez cmd et tapez `ipconfig`, cherchez "Adresse IPv4" (ex: `192.168.1.100`)
   - Mac/Linux : Ouvrez Terminal et tapez `ifconfig`, cherchez "inet" (ex: `192.168.1.100`)

2. **Utilisez votre IP au lieu de localhost** :
   - Au lieu de `http://localhost:3000`
   - Utilisez `http://192.168.1.100:3000` (remplacez par votre IP)

3. **Vite affiche automatiquement l'URL réseau** :
   Quand vous lancez `npm run dev`, Vite affiche :
   ```
   ➜  Local:   http://localhost:3000/
   ➜  Network: http://192.168.1.100:3000/  ← Utilisez cette URL !
   ```

⚠️ **Important** : Les deux appareils doivent être sur le **même réseau Wi-Fi/Ethernet**.

📖 Voir [NETWORK_ACCESS.md](./NETWORK_ACCESS.md) pour plus de détails et résolution de problèmes.

## Build

```bash
npm run build
```

## Design

Palette de couleurs:
- **Noir encre profond**: `#0a0a0a` / `#1a1a1a`
- **Beige parchemin**: `#f5f1e8`
- **Accent or**: `#d4af37`
- **Accent cuivre**: `#b87333`

## Structure du projet

```
src/
├── components/       # Composants réutilisables
├── pages/           # Pages de l'application
├── stores/          # État global (Zustand)
├── types/           # Types TypeScript
├── utils/           # Utilitaires
├── styles/          # Styles globaux
└── assets/          # Images et ressources
```

