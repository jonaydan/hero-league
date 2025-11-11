# 🦸 Heros League™ - Super-héros à votre service 24/7

![Version](https://img.shields.io/badge/version-1.1-blue)
![SEO](https://img.shields.io/badge/SEO-Optimized-green)
![License](https://img.shields.io/badge/license-MIT-orange)

## 📋 Description

**Heros League™** est une plateforme web permettant de louer des super-héros pour toutes vos urgences. Intervention rapide, héros vérifiés, disponibilité 24/7.

## ✨ Fonctionnalités

- 🦸‍♂️ **Galerie de 6 super-héros** avec leurs pouvoirs et spécialités
- 🚀 **Design responsive** (Mobile, Tablette, Desktop)
- ⚡ **Animations fluides** et effets de survol
- 📧 **Formulaire de contact** pour urgences
- 🎨 **Police Satoshi** via Fontshare API
- 🔍 **SEO optimisé** avec microdonnées Schema.org

## 🛠️ Technologies

- **HTML5** - Structure sémantique avec microdonnées
- **CSS3** - Design moderne et animations
- **JavaScript (Vanilla)** - Interactions dynamiques
- **Schema.org** - Microdonnées pour le SEO
- **Open Graph** - Partage sur réseaux sociaux

## 📊 Optimisations SEO

### ✅ Implémentées

1. **Balises Meta complètes**
   - Title, Description, Keywords
   - Open Graph (Facebook, Twitter)
   
2. **Microdonnées Schema.org**
   - `Organization` - Entreprise Heros League
   - `Service` - Services proposés (urgences domestiques, sécurité)
   - `Person` - Chaque héros avec attributs (nom, alternateName, description, jobTitle)
   - `ContactPage` - Formulaire de contact
   - `ItemList` - Liste des héros disponibles
   
3. **Accessibilité ARIA**
   - Labels sur tous les champs de formulaire
   - Rôles sémantiques (`navigation`, `banner`, `contentinfo`)
   - Attributs `aria-label` descriptifs
   - Attribut `role` sur les sections

4. **Structure HTML5 sémantique**
   - `<header>`, `<main>`, `<section>`, `<footer>`
   - Navigation avec `role="navigation"`
   - Images avec attributs `alt` descriptifs
   - Attribut `loading="lazy"` sur les images
   
5. **Fichiers SEO**
   - `robots.txt` - Instructions pour les crawlers
   - `sitemap.xml` - Plan du site XML
   
6. **Performance**
   - Images en lazy loading
   - CSS optimisé sans redondance
   - JavaScript modulaire et commenté
   - Police chargée via API Fontshare

## 📁 Structure du projet

```
heros-league/
├── index.html          # Page principale (SEO optimisé)
├── robots.txt          # Instructions pour robots
├── sitemap.xml         # Plan du site
├── CAHIER_DES_CHARGES.md  # Documentation complète
├── css/
│   ├── style.css       # Styles principaux
│   └── fonts.css       # Configuration polices
├── js/
│   └── script.js       # Logique + microdonnées
├── ressources/
│   ├── images/         # 11 images PNG (héros + témoignages)
│   ├── textes.txt      # Contenus du projet
│   └── *.png           # 9 maquettes de design
└── README.md           # Ce fichier
```

## 🚀 Installation

1. **Cloner le dépôt**
```bash
git clone https://github.com/jonaydan/hero-league.git
cd hero-league
```

2. **Ouvrir dans un navigateur**
```bash
# Windows
start index.html

# macOS
open index.html

# Linux
xdg-open index.html
```

3. **Aucune dépendance** - Le projet fonctionne directement !

## 🎯 Héros disponibles

| Héros | Spécialité | Pouvoirs |
|-------|-----------|----------|
| **Catastrophic** | Force destructrice | Manipulation de l'énergie |
| **Carotte Woman** | Vision nocturne | Régénération, super santé |
| **Ultraquenarde** | Vol supersonique | Résistance aquatique |
| **Poulpy** | Maître des océans | 8 tentacules, camouflage |
| **Oran Wu-Tang Clan** | Arts martiaux | Agilité suprême |
| **Superime** | Héros suprême | Force, vol, invulnérabilité |

## 📈 Prochaines étapes

### Phase 2 - Contenu
- [ ] Intégrer les textes de `ressources/textes.txt`
- [ ] Ajouter section témoignages (4 images disponibles)
- [ ] Utiliser l'image `hero-banner.png` dans la section hero

### Phase 3 - Fonctionnalités
- [ ] Backend Node.js pour formulaire
- [ ] Système de réservation de héros
- [ ] Espace client avec authentification
- [ ] Notifications par email

### Phase 4 - SEO avancé
- [ ] JSON-LD structuré pour Rich Snippets
- [ ] FAQ avec microdonnées
- [ ] Breadcrumbs (fil d'Ariane)
- [ ] Articles de blog SEO-friendly

## 🔍 Tests SEO

### Validation Schema.org
```
https://search.google.com/test/rich-results
```
Colle l'URL ou le code HTML pour tester les microdonnées.

### Validation HTML
```
https://validator.w3.org/
```
Vérifie que le code HTML est valide W3C.

### Validation CSS
```
https://jigsaw.w3.org/css-validator/
```

### PageSpeed Insights
```
https://pagespeed.web.dev/
```
Teste la performance et les Core Web Vitals.

### Lighthouse (Chrome DevTools)
1. Ouvre Chrome DevTools (F12)
2. Onglet "Lighthouse"
3. Lance l'audit (Performance, SEO, Accessibility)

## 📱 Responsive Design

| Taille | Breakpoint | Layout |
|--------|-----------|--------|
| Desktop | > 768px | 3 colonnes |
| Tablette | 481-768px | 2 colonnes |
| Mobile | ≤ 480px | 1 colonne |

## 💡 Conseils SEO appliqués

1. **Mots-clés ciblés** :
   - super-héros, urgence, héros à louer, service héroïque
   - intervention rapide, sécurité publique

2. **Hiérarchie des titres** :
   - `<h1>` - Titre principal unique
   - `<h2>` - Titres de sections
   - `<h3>` - Sous-titres (noms des héros)

3. **Alt text descriptifs** :
   - Format : "Nom du héros - Description courte"
   - Exemple : "Catastrophic - Héros mystérieux aux pouvoirs dévastateurs"

4. **URLs propres** :
   - Utilisez des ancres claires : `#services`, `#heros`, `#contact`

5. **Temps de chargement** :
   - Lazy loading sur les images
   - CSS minifié (pour production)
   - Police optimisée via API

## 👤 Auteur

**Flow (barna)** - Développeur Web Full Stack
- GitHub: [@jonaydan](https://github.com/jonaydan)
- Projet: Formation développement web - O-clock

## 📄 Licence

Ce projet est sous licence MIT - libre d'utilisation pour fins éducatives.

## 🙏 Remerciements

- **O-clock Falun** - Ressources du projet (images, maquettes)
- **Fontshare** - Police Satoshi gratuite
- **Schema.org** - Standards de microdonnées
- **MDN Web Docs** - Documentation HTML/CSS/JS

---

⭐ **Heros League™** - Votre sécurité, notre mission ! 🦸‍♀️

*Besoin d'un héros ? Appelez-nous 24/7 !*
