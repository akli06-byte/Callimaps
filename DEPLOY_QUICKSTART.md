# ⚡ Déploiement rapide - 5 minutes

## 🎯 Option la plus simple : Vercel

### Étape 1 : Mettre sur GitHub (2 min)

```bash
# Dans votre dossier Callimaps
git init
git add .
git commit -m "Initial commit"
git branch -M main

# Créez un nouveau repo sur github.com (sans README)
# Puis :
git remote add origin https://github.com/VOTRE_USERNAME/callimaps.git
git push -u origin main
```

### Étape 2 : Déployer sur Vercel (3 min)

1. **Allez sur** : https://vercel.com
2. **Cliquez** : "Sign Up" → Connectez-vous avec GitHub
3. **Cliquez** : "Add New Project"
4. **Choisissez** : Votre repo `callimaps`
5. **Laissez** : Les paramètres par défaut (Vite est détecté automatiquement)
6. **Cliquez** : "Deploy"

**C'est fait ! 🎉**

Votre app sera en ligne à l'adresse : `https://callimaps-xxxxx.vercel.app`

---

## ✨ Après le déploiement

- ✅ Votre app est en ligne
- ✅ Chaque fois que vous faites `git push`, Vercel redéploie automatiquement
- ✅ L'URL est permanente et gratuite
- ✅ Vous pouvez partager le lien avec qui vous voulez !

---

## 🔗 Autres options

- **Netlify** : https://app.netlify.com (similaire à Vercel)
- **GitHub Pages** : Plus complexe, voir DEPLOY.md

**Recommandation : Utilisez Vercel, c'est le plus simple !** 🚀
