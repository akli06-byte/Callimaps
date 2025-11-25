# Guide pour mettre Callimaps sur GitHub

## ✅ Vérifications avant de push sur GitHub

### 1. Fichiers déjà exclus (`.gitignore`)
- ✅ `node_modules/` - Les dépendances ne doivent pas être commitées
- ✅ `.env` - Variables d'environnement sensibles
- ✅ `dist/` - Fichiers de build
- ✅ Fichiers de l'éditeur (`.vscode/`, `.idea/`, etc.)

### 2. Fichiers nécessaires déjà présents
- ✅ `package.json` - Dépendances et scripts
- ✅ `README.md` - Documentation complète
- ✅ Configuration TypeScript, Vite, Tailwind, etc.

## 🚀 Étapes pour mettre sur GitHub

### Option 1 : Via GitHub Desktop ou l'interface GitHub

1. **Créer un nouveau repository sur GitHub**
   - Allez sur https://github.com/new
   - Nommez-le `callimaps` (ou un autre nom)
   - **Ne cochez PAS** "Initialize with README" (vous en avez déjà un)

2. **Dans votre terminal, depuis le dossier du projet :**

```bash
# Initialiser git si ce n'est pas déjà fait
git init

# Ajouter tous les fichiers (le .gitignore exclura automatiquement node_modules, etc.)
git add .

# Faire le premier commit
git commit -m "Initial commit: Callimaps app"

# Ajouter le remote GitHub (remplacez USERNAME par votre nom d'utilisateur)
git remote add origin https://github.com/USERNAME/callimaps.git

# Ou si vous utilisez SSH :
# git remote add origin git@github.com:USERNAME/callimaps.git

# Pousser sur GitHub
git branch -M main
git push -u origin main
```

### Option 2 : Via la ligne de commande GitHub CLI

```bash
# Installer GitHub CLI si nécessaire
# Puis :
gh repo create callimaps --public --source=. --remote=origin --push
```

## 📋 Checklist avant de push

- [ ] Aucune clé API ou secret dans le code
- [ ] `.gitignore` est présent et configuré
- [ ] `README.md` est complet et à jour
- [ ] `package.json` contient toutes les dépendances
- [ ] Aucun fichier `.env` n'est commité
- [ ] Les fichiers de configuration sont présents

## 🔍 Vérifier ce qui sera commité

Avant de faire `git add .`, vous pouvez vérifier :

```bash
# Voir les fichiers qui seront ajoutés
git status

# Voir les fichiers ignorés
git status --ignored
```

## ✅ Après avoir pushé sur GitHub

1. **Cloner ailleurs pour tester** :
   ```bash
   git clone https://github.com/USERNAME/callimaps.git
   cd callimaps
   npm install
   npm run dev
   ```

2. **Partager le lien** :
   - Le repository est maintenant accessible publiquement (si public)
   - D'autres peuvent cloner et installer

## 🌐 Déployer en ligne (optionnel)

Si vous voulez héberger l'application en ligne gratuitement :

### Vercel (recommandé)
```bash
npm install -g vercel
vercel
```

### Netlify
1. Aller sur https://app.netlify.com
2. Connecter votre repo GitHub
3. Configurer le build : `npm run build`
4. Dossier de publication : `dist`

### GitHub Pages
Ajouter dans `package.json` :
```json
"scripts": {
  "deploy": "npm run build && gh-pages -d dist"
}
```

## ⚠️ Notes importantes

1. **Le repository sera PUBLIC** par défaut - tout le monde pourra voir le code
2. **Les données mockées** sont dans le code - c'est normal pour une démo
3. **Pas de backend** - tout est côté client pour l'instant
4. **Pas de clés API nécessaires** - tout fonctionne sans authentification externe

## 🎯 Résultat attendu

Après avoir pushé, n'importe qui peut :
1. Cloner le repository
2. Faire `npm install`
3. Lancer `npm run dev`
4. L'application fonctionnera exactement comme sur votre machine !

C'est prêt ! 🚀
