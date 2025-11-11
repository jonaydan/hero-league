# Guide de déploiement GitHub Pages

## 🚀 Déployer sur GitHub Pages (5 minutes)

### Étape 1 : Activer GitHub Pages
1. Va sur ton dépôt : https://github.com/jonaydan/hero-league
2. Clique sur **"Settings"** (en haut à droite)
3. Dans le menu de gauche, clique sur **"Pages"**
4. Sous "Source", sélectionne **"main"** (branche)
5. Clique **"Save"**
6. Attends 2-3 minutes ⏳

### Étape 2 : Accéder au site
Ton site sera disponible à :
```
https://jonaydan.github.io/hero-league/
```

### Étape 3 : Tester le SEO
Une fois en ligne, teste sur :
- https://search.google.com/test/rich-results
- Entre l'URL : https://jonaydan.github.io/hero-league/

## ⚡ Commandes Git pour mettre à jour

```bash
# Ajouter les nouveaux fichiers (robots.txt, sitemap.xml, etc.)
git add .

# Créer un commit
git commit -m "SEO: Ajout microdonnées Schema.org, robots.txt, sitemap.xml"

# Pousser vers GitHub
git push origin main
```

## 🔧 Mettre à jour l'URL dans les fichiers

Une fois déployé, remplace "https://ton-site.com" par ton URL réelle dans :
- index.html (balise Open Graph)
- sitemap.xml (toutes les URLs)
- robots.txt (Sitemap URL)

## 📊 Vérifications post-déploiement

1. ✅ Site accessible : https://jonaydan.github.io/hero-league/
2. ✅ Images chargées correctement
3. ✅ Formulaire fonctionne
4. ✅ Responsive sur mobile
5. ✅ Test SEO passe avec succès

## 🎯 Soumettre à Google

1. Va sur https://search.google.com/search-console
2. Ajoute ta propriété : https://jonaydan.github.io/hero-league/
3. Vérifie via GitHub (fichier HTML ou DNS)
4. Soumets le sitemap.xml
5. Demande l'indexation

---

💡 **Astuce** : GitHub Pages est gratuit et parfait pour les projets statiques comme celui-ci !
