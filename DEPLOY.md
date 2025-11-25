# 🚀 Guide de déploiement en ligne - Callimaps

Votre application peut être mise en ligne gratuitement en quelques minutes ! Voici les meilleures options :

## Option 1 : Vercel (⭐ Recommandé - Le plus simple)

Vercel est spécialement optimisé pour Vite et React. Déploiement en 2 minutes !

### Méthode 1 : Via l'interface GitHub (Le plus simple)

1. **Mettez votre code sur GitHub** (voir GITHUB_SETUP.md)

2. **Allez sur Vercel** :
   - Ouvrez https://vercel.com
   - Cliquez sur "Sign Up" et connectez-vous avec votre compte GitHub

3. **Importez votre projet** :
   - Cliquez sur "Add New Project"
   - Sélectionnez votre repository `callimaps`
   - Vercel détecte automatiquement que c'est un projet Vite

4. **Configurez (optionnel)** :
   - Framework Preset : Vite (détecté automatiquement)
   - Build Command : `npm run build` (déjà configuré)
   - Output Directory : `dist` (déjà configuré)
   - Install Command : `npm install`

5. **Cliquez sur "Deploy"** 🚀
   - En 1-2 minutes, votre app sera en ligne !
   - Vous recevrez une URL comme : `https://callimaps-xxxxx.vercel.app`

6. **C'est tout !** ✨
   - Vercel déploie automatiquement à chaque `git push`
   - L'URL est permanente et gratuite

### Méthode 2 : Via la ligne de commande

```bash
# Installer Vercel CLI
npm install -g vercel

# Dans votre dossier du projet
cd C:\Users\TTN\Desktop\Akli\PARIS8\Art\Callimaps

# Déployer
vercel

# Suivez les instructions :
# - Login avec GitHub
# - Confirmez les paramètres
# - C'est fait !
```

**Avantages de Vercel :**
- ✅ Gratuit pour toujours
- ✅ HTTPS automatique
- ✅ Déploiement automatique à chaque push
- ✅ URL personnalisable
- ✅ Super rapide
- ✅ Parfait pour Vite/React

---

## Option 2 : Netlify (Alternative excellente)

### Via GitHub (Recommandé)

1. **Mettez votre code sur GitHub**

2. **Allez sur Netlify** :
   - https://app.netlify.com
   - "Sign up" avec GitHub

3. **Nouveau site depuis Git** :
   - "Add new site" > "Import an existing project"
   - Choisissez GitHub et sélectionnez `callimaps`

4. **Configuration** :
   - Build command : `npm run build`
   - Publish directory : `dist`
   - Cliquez "Deploy site"

5. **En ligne !** 
   - URL : `https://callimaps-xxxxx.netlify.app`

### Via Netlify CLI

```bash
# Installer Netlify CLI
npm install -g netlify-cli

# Build votre projet
npm run build

# Déployer
netlify deploy --prod
```

---

## Option 3 : GitHub Pages (Gratuit mais plus complexe)

Si vous voulez utiliser GitHub Pages, il faut adapter la config pour le routing.

1. **Installer gh-pages** :
```bash
npm install --save-dev gh-pages
```

2. **Ajouter dans package.json** :
```json
{
  "scripts": {
    "deploy": "npm run build && gh-pages -d dist"
  },
  "homepage": "https://VOTRE_USERNAME.github.io/callimaps"
}
```

3. **Adapter vite.config.ts** pour le base path :
```typescript
export default defineConfig({
  base: '/callimaps/',
  // ... reste de la config
})
```

4. **Déployer** :
```bash
npm run deploy
```

⚠️ **Note** : GitHub Pages nécessite quelques ajustements pour React Router. Vercel/Netlify sont plus simples.

---

## 🎯 Résultat attendu

Après déploiement, vous aurez :
- ✅ Une URL publique (ex: `https://callimaps.vercel.app`)
- ✅ HTTPS automatique
- ✅ Accessible depuis n'importe où dans le monde
- ✅ Déploiement automatique à chaque mise à jour

---

## 📝 Checklist avant déploiement

- [ ] Votre code est sur GitHub
- [ ] Le build fonctionne localement (`npm run build`)
- [ ] Pas de fichiers sensibles dans le code
- [ ] README.md est à jour

---

## 🔧 Si le déploiement échoue

### Erreur de build
```bash
# Testez localement d'abord
npm run build

# Si ça marche, le déploiement devrait aussi fonctionner
```

### Erreur de routing (404 sur certaines pages)
- Vercel et Netlify gèrent ça automatiquement
- Si problème, créez un fichier `public/_redirects` (Netlify) ou `vercel.json` (Vercel)

### Erreur de dépendances
- Vérifiez que toutes les dépendances sont dans `package.json`
- Pas dans `package-lock.json` seulement

---

## 🎉 Recommandation

**Utilisez Vercel** - C'est le plus simple et le plus rapide pour votre app React/Vite !

1. Push sur GitHub
2. Connecter à Vercel
3. Déployer en 2 minutes
4. C'est en ligne ! 🚀

---

## 🔗 Liens utiles

- Vercel : https://vercel.com
- Netlify : https://netlify.com
- GitHub Pages : https://pages.github.com

Bonne chance ! 🎯
