# Accéder à Callimaps depuis d'autres appareils

## Problème

Par défaut, `http://localhost:3000` n'est accessible que depuis votre machine. Pour que d'autres appareils (téléphone, autre ordinateur) puissent accéder à l'application, vous devez utiliser votre **adresse IP locale**.

## Solution : Utiliser votre adresse IP locale

### Étape 1 : Trouver votre adresse IP locale

#### Sur Windows :

1. Ouvrez l'invite de commandes (cmd) ou PowerShell
2. Tapez la commande suivante :
   ```bash
   ipconfig
   ```
3. Cherchez la section "Carte réseau Ethernet" ou "Adaptateur Ethernet" ou "Wi-Fi"
4. Trouvez la ligne **"Adresse IPv4"** - elle ressemble à `192.168.x.x` ou `10.0.x.x`

**Exemple :**
```
Carte réseau Wi-Fi :
   Adresse IPv4. . . . . . . . . . . . . . . : 192.168.1.100
```

#### Sur Mac/Linux :

1. Ouvrez le Terminal
2. Tapez :
   ```bash
   ifconfig
   ```
   ou
   ```bash
   ip addr show
   ```
3. Cherchez `inet` avec une adresse `192.168.x.x` ou `10.0.x.x`

### Étape 2 : Démarrer le serveur

Démarrez l'application normalement :
```bash
npm run dev
```

### Étape 3 : Accéder depuis un autre appareil

Au lieu d'utiliser `http://localhost:3000`, utilisez :
```
http://VOTRE_IP:3000
```

**Exemple :**
Si votre adresse IP est `192.168.1.100`, l'URL sera :
```
http://192.168.1.100:3000
```

### Étape 4 : Vérifier la connexion

✅ Assurez-vous que :
- Les deux appareils sont sur le **même réseau Wi-Fi** (ou Ethernet)
- Le pare-feu Windows/Mac autorise les connexions entrantes sur le port 3000
- Le serveur Vite affiche les bonnes informations au démarrage

### Informations affichées par Vite

Quand vous démarrez `npm run dev`, Vite devrait afficher quelque chose comme :
```
  VITE v5.0.8  ready in 500 ms

  ➜  Local:   http://localhost:3000/
  ➜  Network: http://192.168.1.100:3000/
```

L'URL "Network" est celle que vous devez partager ! ✅

## Résolution de problèmes

### L'application ne se charge pas depuis un autre appareil

1. **Vérifiez le pare-feu**
   - Windows : Autorisez Node.js dans le Pare-feu Windows
   - Mac : Autorisez les connexions entrantes dans Préférences Système > Sécurité

2. **Vérifiez que vous êtes sur le même réseau**
   - Les deux appareils doivent être connectés au même Wi-Fi/Ethernet

3. **Essayez de redémarrer le serveur**
   ```bash
   # Arrêtez le serveur (Ctrl+C)
   # Puis redémarrez
   npm run dev
   ```

4. **Vérifiez que le port 3000 n'est pas bloqué**
   - Essayez un autre port si nécessaire (modifiez `vite.config.ts`)

### Changer le port

Si le port 3000 pose problème, vous pouvez le changer dans `vite.config.ts` :

```typescript
server: {
  port: 3001, // Changez ici
  host: true
}
```

## Accès depuis Internet (production)

⚠️ **Important :** Cette méthode permet uniquement l'accès sur votre réseau local. Pour rendre l'application accessible depuis Internet, vous devrez :

1. Utiliser un service de déploiement :
   - **Vercel** (gratuit) : `vercel deploy`
   - **Netlify** (gratuit) : `netlify deploy`
   - **GitHub Pages** (gratuit) : Via GitHub Actions

2. Ou configurer un tunnel local :
   - **ngrok** : `ngrok http 3000`
   - **localtunnel** : `npx localtunnel --port 3000`

Ces services créeront une URL publique que vous pourrez partager avec n'importe qui !
