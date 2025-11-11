# 🦸 Heroes League - Ligue des Super-Héros

Une application web interactive pour découvrir et explorer les super-héros les plus célèbres.

## 📋 Description

Heroes League est une application web moderne qui présente une galerie de super-héros avec leurs informations, pouvoirs et caractéristiques. L'application offre une interface utilisateur élégante et responsive.

## ✨ Fonctionnalités

- 🎨 **Design moderne** - Interface utilisateur attrayante avec dégradés et animations
- 📱 **Responsive** - S'adapte à tous les écrans (mobile, tablette, desktop)
- 🦸‍♂️ **Galerie de héros** - Affichage des héros en grille avec cartes interactives
- ⚡ **Animations** - Effets de survol et transitions fluides
- 🎯 **Navigation fluide** - Défilement doux vers les sections

## 🚀 Technologies Utilisées

- **HTML5** - Structure de la page
- **CSS3** - Styles, animations, responsive design
- **JavaScript (Vanilla)** - Logique et interactivité
- **Grid CSS** - Mise en page responsive

## 📁 Structure du Projet

```
heros-league/
│
├── index.html          # Page d'accueil
├── css/
│   └── style.css       # Feuille de style
│
├── js/
│   └── script.js       # JavaScript
│
├── ressources/         # Dossier pour les images/maquettes
│   ├── home.png        # Maquette desktop
│   ├── header.png      # Maquette header
│   ├── hero1.jpg       # Exemple d'image de héros
│   └── favicon.ico     # Icône du site
│
└── README.md           # Ce fichier
```

## 🎮 Héros Disponibles

1. **Iron Man** - Génie, milliardaire, philanthrope
2. **Spider-Man** - L'homme araignée amical du quartier
3. **Wonder Woman** - Princesse guerrière d'Amazonie
4. **Batman** - Le chevalier noir de Gotham
5. **Captain America** - Le premier Avenger
6. **Black Widow** - Espionne et combattante d'élite

## 🛠️ Installation

1. **Cloner ou télécharger le projet**
   ```bash
   git clone <url-du-repo>
   ```

2. **Ouvrir le fichier `index.html`**
   - Double-cliquez sur le fichier
   - Ou faites un clic droit → "Ouvrir avec" → Votre navigateur

3. **Aucune dépendance** - Le projet fonctionne sans installation !

## 💻 Utilisation

- **Navigation** : Utilisez le menu pour naviguer entre les sections
- **Bouton Explorer** : Cliquez pour accéder directement aux héros
- **Cartes de héros** : Cliquez sur une carte pour voir plus d'informations

## 🎨 Personnalisation

### Ajouter un nouveau héros

Dans `js/script.js`, ajoutez un objet dans le tableau `heroes` :

```javascript
{
    id: 7,
    name: "Nom du Héros",
    realName: "Identité Secrète",
    description: "Description du héros",
    powers: "Liste des pouvoirs",
    image: "URL de l'image"
}
```

### Modifier les couleurs

Dans `css/style.css`, modifiez les dégradés :

```css
background: linear-gradient(135deg, #COULEUR1 0%, #COULEUR2 100%);
```

## 📱 Responsive Design

L'application s'adapte automatiquement :
- **Desktop** : Grille de 3 colonnes
- **Tablette** : Grille de 2 colonnes
- **Mobile** : Grille de 1 colonne

## 🔮 Améliorations Futures

- [ ] Système de recherche de héros
- [ ] Filtrage par univers (Marvel, DC, etc.)
- [ ] Mode sombre/clair
- [ ] Favoris avec localStorage
- [ ] Formulaire d'ajout de héros personnalisés
- [ ] API pour récupérer de vrais héros

## 👨‍💻 Auteur

**Flow**  
Date : 11 novembre 2025

## 📄 Licence

Ce projet est libre d'utilisation pour des fins éducatives.

---

⭐ N'hésitez pas à donner une étoile si vous aimez ce projet !
