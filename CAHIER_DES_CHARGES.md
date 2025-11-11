# 📋 CAHIER DES CHARGES - Heroes League

## 📌 INFORMATIONS GÉNÉRALES

**Projet :** Heroes League - Ligue des Super-Héros  
**Version :** 1.0  
**Date :** 11 novembre 2025  
**Développeur :** Flow (barna)  
**Statut :** En développement

---

## 🎯 OBJECTIF DU PROJET

Créer un site web moderne et responsive présentant une galerie de super-héros avec leurs informations détaillées. Le site doit offrir une expérience utilisateur immersive avec des animations et un design attrayant.

---

## 🎨 DESIGN & INTERFACE

### Palette de couleurs
- **Couleurs principales :**
  - Dégradé héro : `linear-gradient(135deg, #667eea 0%, #764ba2 100%)`
  - Fond principal : `#f8f9fa`
  - Texte : `#333`
  - Accents : `#667eea`, `#764ba2`

### Typographie
- **Police principale :** Plus Jakarta Sans (Google Fonts)
- **Alternative prévue :** Satoshi (Fontshare)
- **Poids disponibles :** 400 (Regular), 500 (Medium), 600 (Semi-Bold), 700 (Bold), 800 (Extra-Bold)

### Responsive Design
- ✅ **Desktop :** > 768px (grille 3 colonnes)
- ✅ **Tablette :** 481px - 768px (grille 2 colonnes)
- ✅ **Mobile :** ≤ 480px (grille 1 colonne)

---

## 📁 STRUCTURE DU PROJET

```
heros-league/
│
├── index.html              # Page principale
├── CAHIER_DES_CHARGES.md   # Ce fichier
│
├── css/
│   ├── style.css           # Styles principaux
│   ├── fonts.css           # Configuration des polices
│   └── fonts/              # Fichiers de police locale (vide pour l'instant)
│
├── js/
│   └── script.js           # Logique JavaScript
│
└── ressources/
    ├── images/             # Images des héros et témoignages
    │   ├── catastrophic.png
    │   ├── carotte-woman.png
    │   ├── ultraquenarde.png
    │   ├── poulpy.png
    │   ├── oran-wu-tang-clan.png
    │   ├── superime.png
    │   ├── hero-banner.png
    │   └── testimony-1/2/3/4.png
    │
    ├── textes.txt          # Contenus textuels du projet
    └── maquettes/          # Fichiers de design (9 PNG)
        ├── home.png
        ├── home-tablet.png
        ├── home-phone.png
        ├── header.png
        ├── hover-hero.png
        ├── menu-hover.png
        ├── footer-menu-hover.png
        ├── button-hover.png
        └── input-focus.png
```

---

## ⚙️ FONCTIONNALITÉS

### Version 1.0 - RÉALISÉE ✅

#### 1. En-tête (Header)
- [x] Logo "Heroes League"
- [x] Menu de navigation (Accueil, Héros, À propos, Contact)
- [x] Effet sticky (reste visible au scroll)
- [x] Ombre portée pour la profondeur

#### 2. Section Héro (Hero Section)
- [x] Titre principal "Bienvenue à la Heroes League"
- [x] Sous-titre descriptif
- [x] Bouton CTA "Découvrez nos héros"
- [x] Dégradé de fond violet/bleu
- [x] Animation d'entrée (fadeInDown)
- [x] Scroll automatique vers la section héros au clic

#### 3. Galerie de Héros
- [x] Affichage dynamique via JavaScript
- [x] 6 héros avec vraies images :
  - **Catastrophic** - Force destructrice
  - **Carotte Woman** - Vision nocturne
  - **Ultraquenarde** - Vol supersonique
  - **Poulpy** - Maître des océans
  - **Oran Wu-Tang Clan** - Arts martiaux
  - **Superime** - Héros suprême
- [x] Cartes avec image, nom, identité réelle, description, pouvoirs
- [x] Effet de survol (scale + shadow)
- [x] Animation d'entrée (fadeInUp)
- [x] Modal d'information au clic
- [x] Grille responsive (3/2/1 colonnes)

#### 4. Pied de page (Footer)
- [x] Copyright et crédits
- [x] Liens sociaux (prévus)
- [x] Design sobre et professionnel

---

## 🛠️ TECHNOLOGIES UTILISÉES

### Front-end
- **HTML5** - Structure sémantique
- **CSS3** - Styling moderne
  - Flexbox & Grid
  - Animations (@keyframes)
  - Media queries
  - Custom properties (variables CSS)
- **JavaScript (Vanilla)** - Logique applicative
  - Manipulation DOM
  - Event listeners
  - Fonctions modulaires

### Polices & Assets
- **Google Fonts** - Plus Jakarta Sans
- **Images PNG** - Haute qualité (21 fichiers, ~30MB total)
- **Ressources O-clock** - Maquettes et contenus fournis

### Outils de développement
- **VS Code** - Éditeur de code
- **Git** - Contrôle de version (à initialiser)
- **GitHub** - Hébergement du code (à configurer)
- **PowerShell** - Terminal Windows

---

## 📊 DONNÉES DES HÉROS

### Structure JavaScript

```javascript
{
    id: Number,           // Identifiant unique
    name: String,         // Nom du héros
    realName: String,     // Identité réelle
    description: String,  // Description courte
    powers: String,       // Liste des pouvoirs
    image: String         // Chemin vers l'image
}
```

### Exemple
```javascript
{
    id: 1,
    name: "Catastrophic",
    realName: "???",
    description: "Un héros mystérieux aux pouvoirs dévastateurs",
    powers: "Force destructrice, manipulation de l'énergie",
    image: "ressources/images/catastrophic.png"
}
```

---

## 🎬 ANIMATIONS & INTERACTIONS

### Animations CSS
- **fadeInDown** - Apparition du hero section (du haut vers le bas)
- **fadeInUp** - Apparition des cartes héros (du bas vers le haut)
- **Hover effects** - Scale + shadow sur les cartes
- **Transitions** - Fluidité des changements (0.3s ease)

### Interactions JavaScript
- **Scroll smooth** - Défilement fluide vers la section héros
- **Modal alert** - Affichage des détails au clic
- **Console logs** - Messages de débogage

---

## 📝 PLAN DE DÉVELOPPEMENT

### Phase 1 : Base ✅ TERMINÉE
- [x] Structure HTML
- [x] Styles CSS de base
- [x] Configuration des polices
- [x] Intégration des vraies images
- [x] JavaScript pour affichage dynamique

### Phase 2 : Amélioration 🔄 EN COURS
- [ ] Remplacer les textes placeholder par le contenu réel (textes.txt)
- [ ] Ajouter section "Services" ou "Nos missions"
- [ ] Ajouter section "Témoignages" avec les 4 images testimony
- [ ] Créer formulaire de contact fonctionnel
- [ ] Améliorer le design selon les maquettes

### Phase 3 : Finalisation 📋 À VENIR
- [ ] Tests de compatibilité navigateurs
- [ ] Optimisation des performances
- [ ] SEO (meta tags, alt texts)
- [ ] Validation W3C (HTML + CSS)
- [ ] Initialisation Git
- [ ] Déploiement GitHub Pages

### Phase 4 : Bonus 🎁 OPTIONNEL
- [ ] Filtres par type de pouvoir
- [ ] Recherche de héros
- [ ] Mode sombre/clair
- [ ] Animations avancées (GSAP)
- [ ] Backend (Node.js + base de données)

---

## 🧪 TESTS À EFFECTUER

### Tests fonctionnels
- [ ] Navigation entre les sections
- [ ] Bouton CTA scroll vers héros
- [ ] Clic sur cartes héros (modal)
- [ ] Responsive sur 3 tailles d'écran
- [ ] Chargement des images

### Tests de performance
- [ ] Temps de chargement < 3s
- [ ] Optimisation des images (compression)
- [ ] Minification CSS/JS (production)

### Tests de compatibilité
- [ ] Chrome (dernière version)
- [ ] Firefox (dernière version)
- [ ] Safari (dernière version)
- [ ] Edge (dernière version)
- [ ] Mobile (iOS & Android)

---

## 📚 RESSOURCES

### Documentation
- [MDN Web Docs](https://developer.mozilla.org/)
- [Google Fonts](https://fonts.google.com/specimen/Plus+Jakarta+Sans)
- [Fontshare - Satoshi](https://www.fontshare.com/fonts/satoshi)

### Inspiration Design
- Maquettes fournies dans `ressources/` (9 fichiers PNG)
- Textes originaux dans `ressources/textes.txt`

### Dépôt GitHub (ressources)
- **URL :** `git@github.com:O-clock-Falun/SA03-bonus-heroes-league-jonaydan.git`
- **Branche :** main
- **Contenu :** 21 fichiers (images + maquettes + textes)

---

## 🐛 PROBLÈMES CONNUS

### ✅ Résolus
- ~~Images placeholder~~ → Remplacées par vraies images
- ~~Police Satoshi indisponible~~ → Alternative Plus Jakarta Sans configurée

### ⚠️ En cours
- Favicon manquant (référencé mais fichier non créé)
- Contenus textuels encore en placeholder
- Sections Témoignages et Contact non implémentées

### 📋 À résoudre
- Optimisation du poids des images PNG (30MB total)
- Configuration Git (pas encore initialisé)
- Accessibilité (aria-labels manquants)

---

## 📈 ÉVOLUTIONS FUTURES

### Version 1.1
- Intégration complète du contenu textes.txt
- Section Témoignages avec carrousel
- Formulaire de contact avec validation

### Version 1.2
- Système de filtres avancé
- Recherche en temps réel
- Animations au scroll (reveal)

### Version 2.0
- Backend Node.js
- Base de données MongoDB
- Authentification utilisateurs
- Administration des héros

---

## 👤 CRÉDITS

**Développeur :** Flow (barna)  
**Ressources :** O-clock Falun (SA03 Bonus)  
**Police :** Plus Jakarta Sans (Google Fonts)  
**Inspiration :** Univers Marvel/DC Comics  

---

## 📄 LICENCE

Projet éducatif - Formation développement web  
© 2025 Heroes League - Tous droits réservés

---

**Dernière mise à jour :** 11 novembre 2025  
**Version du cahier des charges :** 1.0
