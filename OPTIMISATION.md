# 🚀 Guide d'optimisation des performances - Heros League

## 📊 État actuel

### Fichiers non optimisés :
- `css/style.css` : 566 lignes (~15 KB)
- `css/fonts.css` : ~50 lignes (~2 KB)
- `css/blog.css` : ~400 lignes (~10 KB)
- `js/script.js` : ~190 lignes (~7 KB)

### Images :
- 11 images PNG dans `ressources/images/` (~30 MB total)
- ✅ Lazy loading déjà implémenté

---

## ✅ Optimisations déjà appliquées

### 1. **Lazy Loading des images**
```javascript
loading="lazy"
```
Toutes les images des héros sont chargées en différé.

### 2. **Police optimisée**
```html
<link rel="stylesheet" href="https://api.fontshare.com/v2/css?f[]=satoshi@400,700&display=swap">
```
Police chargée via API avec `display=swap`.

### 3. **CSS optimisé**
- Animations GPU-accelerated (transform)
- Transitions ciblées
- Media queries efficaces

---

## 🔧 Optimisations à faire manuellement

### Étape 1 : Minifier CSS en ligne

**Outil recommandé** : https://www.toptal.com/developers/cssminifier

1. Copie le contenu de `css/style.css`
2. Colle sur CSS Minifier
3. Télécharge le résultat
4. Sauvegarde comme `css/style.min.css`

**Gain estimé** : 15 KB → 8 KB (~47% de réduction)

### Étape 2 : Minifier JavaScript

**Outil recommandé** : https://www.toptal.com/developers/javascript-minifier

1. Copie le contenu de `js/script.js`
2. Colle sur JS Minifier
3. Télécharge le résultat
4. Sauvegarde comme `js/script.min.js`

**Gain estimé** : 7 KB → 4 KB (~43% de réduction)

### Étape 3 : Compresser les images

**Outil recommandé** : https://tinypng.com/

Images à compresser :
```
ressources/images/catastrophic.png      2.7 MB → ~800 KB
ressources/images/carotte-woman.png     2.1 MB → ~600 KB
ressources/images/ultraquenarde.png     1.9 MB → ~500 KB
ressources/images/poulpy.png            2.4 MB → ~700 KB
ressources/images/oran-wu-tang-clan.png 2.6 MB → ~800 KB
ressources/images/superime.png          1.1 MB → ~300 KB
```

**Gain total estimé** : 30 MB → 8-10 MB (~67% de réduction)

---

## 📝 Utilisation des fichiers minifiés

### Pour le CSS

Dans `index.html` et `blog/comment-choisir-son-hero.html` :

```html
<!-- Version développement (commentée en production) -->
<!-- <link rel="stylesheet" href="css/style.css"> -->

<!-- Version production (décommenter) -->
<link rel="stylesheet" href="css/style.min.css">
```

### Pour le JavaScript

Dans `index.html` :

```html
<!-- Version développement (commentée en production) -->
<!-- <script src="js/script.js"></script> -->

<!-- Version production (décommenter) -->
<script src="js/script.min.js"></script>
```

---

## 🎯 Script PowerShell d'optimisation basique

Voici un script pour créer une version simplifiée minifiée :

```powershell
# Minification basique CSS (suppression commentaires et espaces)
$css = Get-Content css\style.css -Raw
$css = $css -replace '/\*[\s\S]*?\*/', ''  # Supprime commentaires
$css = $css -replace '\s+', ' '             # Réduit espaces multiples
$css = $css -replace '\s*{\s*', '{'         # Espaces autour de {
$css = $css -replace '\s*}\s*', '}'         # Espaces autour de }
$css = $css -replace '\s*:\s*', ':'         # Espaces autour de :
$css = $css -replace '\s*;\s*', ';'         # Espaces autour de ;
$css | Out-File css\style.min.css -Encoding UTF8

Write-Host "✅ CSS minifié créé : css\style.min.css"

# Même chose pour JS
$js = Get-Content js\script.js -Raw
$js = $js -replace '//.*$', '', 'Multiline'  # Supprime commentaires //
$js = $js -replace '/\*[\s\S]*?\*/', ''      # Supprime commentaires /* */
$js = $js -replace '\s+', ' '                # Réduit espaces
$js | Out-File js\script.min.js -Encoding UTF8

Write-Host "✅ JS minifié créé : js\script.min.js"
Write-Host "⚠️  Pour une minification complète, utilisez les outils en ligne."
```

---

## 📊 Résultats attendus après optimisations

### Avant optimisation :
- **Taille totale** : ~32 MB
- **Temps de chargement** : 3-5 secondes (3G)
- **Score PageSpeed** : ~60-70/100

### Après optimisation :
- **Taille totale** : ~10 MB
- **Temps de chargement** : 1-2 secondes (3G)
- **Score PageSpeed** : ~85-95/100

### Améliorations :
- ✅ **67% de réduction** de la taille des images
- ✅ **45% de réduction** du CSS/JS
- ✅ **50-60% plus rapide** au chargement
- ✅ **Meilleur référencement** (vitesse = facteur SEO)

---

## 🧪 Tester les performances

### 1. Google PageSpeed Insights
```
https://pagespeed.web.dev/
```
Teste : `https://jonaydan.github.io/hero-league/`

### 2. GTmetrix
```
https://gtmetrix.com/
```

### 3. WebPageTest
```
https://www.webpagetest.org/
```

---

## 🎯 Checklist d'optimisation

- [x] Lazy loading images
- [x] Police optimisée (display=swap)
- [x] CSS organisé et efficace
- [ ] CSS minifié (style.min.css)
- [ ] JS minifié (script.min.js)
- [ ] Images compressées (TinyPNG)
- [ ] Utiliser fichiers .min en production
- [ ] Tester PageSpeed (objectif : >85/100)

---

## 💡 Optimisations avancées (optionnel)

### 1. Utiliser WebP pour les images
Format moderne plus léger que PNG :
```html
<picture>
  <source srcset="hero.webp" type="image/webp">
  <img src="hero.png" alt="Hero" loading="lazy">
</picture>
```

### 2. Activer la compression Gzip
GitHub Pages le fait déjà automatiquement ! ✅

### 3. Cache navigateur
Ajouter dans `.github/workflows/deploy.yml` :
```yaml
- name: Add cache headers
  run: echo "cache-control: public, max-age=31536000" > _headers
```

### 4. Précharger les ressources critiques
```html
<link rel="preload" href="css/style.min.css" as="style">
<link rel="preload" href="https://api.fontshare.com/v2/css?f[]=satoshi@400,700" as="style">
```

---

**Prêt pour la production après minification !** 🚀
